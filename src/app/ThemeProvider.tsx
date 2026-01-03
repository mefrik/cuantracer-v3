import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { createContext, useContext, useMemo, useState } from "react";
import { createAppTheme } from "@/theme";

type ThemeMode = "light" | "dark";

type ThemeContextType = {
  mode: ThemeMode;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>("dark");

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  const toggleTheme = () =>
    setMode((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useThemeMode = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("ThemeProvider missing");
  return ctx;
};
