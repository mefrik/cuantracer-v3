import { supabase } from "@/lib/supabase";

export async function fetchTrades({
  page,
  pageSize,
  search,
}: {
  page: number;
  pageSize: number;
  search: string;
}) {
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  let query = supabase
    .from("vw_trades_list") // ⬅️ view (atau table) utama
    .select("*", { count: "exact" })
    .range(from, to)
    .order("entry_time", { ascending: false });

  // 🔍 spotlight search → kirim full string ke DB
  if (search.trim()) {
    query = query.ilike("search_text", `%${search}%`);
  }

  const { data, count, error } = await query;

  if (error) throw error;

  return {
    rows: data ?? [],
    total: count ?? 0,
  };
}
