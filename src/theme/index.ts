import { createTheme } from "@mui/material/styles";
import { lightPalette, darkPalette } from "./palette";
import { typography } from "./typography";

export const createAppTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: mode === "light" ? lightPalette : darkPalette,
    typography,
    shape: {
      borderRadius: 10,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: 10,
            fontWeight: 600,
          },
        },
      },
    },
  });
