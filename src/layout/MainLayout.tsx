import { Outlet, useLocation } from "react-router-dom";
import Dockbar from "@/components/Dockbar";
import AddTradeModal from "@/components/trade/AddTradeModal";

export default function MainLayout() {
  const { pathname } = useLocation();

  // 🔒 login page tanpa dockbar
  const hideDock = pathname === "/login";

  return (
    <>
      <Outlet />
      {!hideDock && <Dockbar />}
      <AddTradeModal />
    </>
  );
}
