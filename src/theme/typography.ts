import { TypographyOptions } from "@mui/material/styles/createTypography";

export const typography: TypographyOptions = {
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Inter",
    "sans-serif",
  ].join(","),

  h1: { fontSize: "2rem", fontWeight: 700 },
  h2: { fontSize: "1.5rem", fontWeight: 600 },
  h3: { fontSize: "1.25rem", fontWeight: 600 },

  body1: { fontSize: "0.95rem" },
  body2: { fontSize: "0.85rem" },
};
