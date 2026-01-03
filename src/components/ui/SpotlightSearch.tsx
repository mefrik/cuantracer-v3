import { Box, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SpotlightSearch({
  value,
  onChange,
  placeholder = "Search trades…",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <Paper
      sx={{
        px: 2,
        py: 1,
        mb: 2,
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        borderRadius: 3,
        backdropFilter: "blur(14px)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
      }}
    >
      <SearchIcon sx={{ opacity: 0.6 }} />
      <InputBase
        fullWidth
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </Paper>
  );
}
