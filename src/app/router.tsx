import { createBrowserRouter } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
import DashboardPage from "@/pages/DashboardPage";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    ),
  },
]);
