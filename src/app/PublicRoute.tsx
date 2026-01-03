import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { ReactNode } from "react";

export default function PublicRoute({ children }: { children: ReactNode }) {
  const session = useAuth();

  // 🔒 sudah login → tidak boleh ke /login
  if (session) return <Navigate to="/" replace />;

  return <>{children}</>;
}
