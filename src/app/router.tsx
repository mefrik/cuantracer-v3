import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    ),
  },
]);
