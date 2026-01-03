import { supabase } from "@/lib/supabase";

export async function fetchTimeframes() {
  const { data, error } = await supabase
    .from("mst_timeframetrade")
    .select("id, code")
    .order("id", { ascending: true });

  if (error) throw error;
  return data ?? [];
}
