import { supabase } from "@/lib/supabase";

export async function fetchSessions() {
  const { data, error } = await supabase
    .from("mst_sessiontrade")
    .select("id, name, code")
    .order("id", { ascending: true });

  if (error) throw error;
  return data ?? [];
}
