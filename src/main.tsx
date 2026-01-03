import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";
import { AuthProvider } from "./app/AuthProvider";
import { UIProvider } from "./app/uiStore";
import { ThemeProvider } from "./app/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <UIProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </UIProvider>
    </AuthProvider>
  </React.StrictMode>
);
