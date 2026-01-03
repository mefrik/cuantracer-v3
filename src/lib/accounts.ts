import { supabase } from "@/lib/supabase";

export async function fetchAccounts() {
  const { data, error } = await supabase
    .from("accounts")
    .select(
      `
      id,
      name,
      market_id,
      platform_id,
      mst_market (
        id,
        name
      ),
      mst_platform (
        id,
        name
      )
    `
    )
    .order("name");

  if (error) throw error;
  return data ?? [];
}
