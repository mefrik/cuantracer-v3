import { supabase } from "@/lib/supabase";

export async function fetchPairs() {
  const { data, error } = await supabase
    .from("mst_pairs")
    .select("id, symbol, icon_url")
    .order("id");

  if (error) throw error;
  return data ?? [];
}
