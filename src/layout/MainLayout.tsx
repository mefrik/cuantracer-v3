import { Outlet, useLocation } from "react-router-dom";
import Dockbar from "@/components/Dockbar";

export default function MainLayout() {
  const { pathname } = useLocation();

  // 🔒 login page tanpa dockbar
  const hideDock = pathname === "/login";

  return (
    <>
      <Outlet />
      {!hideDock && <Dockbar />}
    </>
  );
}
