import { createBrowserRouter } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
import DashboardPage from "@/pages/DashboardPage";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import MainLayout from "@/layout/MainLayout";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/trades",
        element: (
          <ProtectedRoute>
            <div>Trades Page</div>
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
]);
