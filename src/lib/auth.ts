import { supabase } from "./supabase";

export async function loginWithGoogle() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: window.location.origin,
    },
  });

  if (error) throw error;
}

export async function logout() {
  await supabase.auth.signOut();
}
