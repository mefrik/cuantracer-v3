import { Box, IconButton, Tooltip, Divider } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { logout } from "@/lib/auth";
import { useUI } from "@/app/uiStore";
import { useNavigate } from "react-router-dom";
import { useThemeMode } from "@/app/ThemeProvider";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";

export default function Dockbar() {
  const navigate = useNavigate();
  const { openAddTradeModal } = useUI();
  const { toggleTheme } = useThemeMode();
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 16,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        alignItems: "center",
        gap: 0.5,
        px: 2,
        py: 1.2,
        borderRadius: 999,
        backdropFilter: "blur(16px)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))",
        boxShadow:
          "0 10px 30px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.2)",
        zIndex: 1200,
      }}
    >
      {/* LOGO */}
      <Tooltip title="CUANTRACER">
        <IconButton
          onClick={() => navigate("/")}
          sx={{
            bgcolor: "rgba(255,255,255,0.15)",
            "&:hover": { bgcolor: "rgba(255,255,255,0.25)" },
          }}
        >
          <ShowChartIcon />
        </IconButton>
      </Tooltip>

      {/* ADD TRADE */}
      <Tooltip title="Add Trade">
        <IconButton onClick={openAddTradeModal} sx={{ color: "success.light" }}>
          <AddCircleOutlineIcon />
        </IconButton>
      </Tooltip>

      {/* DIVIDER */}
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          mx: 0.5,
          borderColor: "rgba(255,255,255,0.25)",
        }}
      />

      {/* DASHBOARD */}
      <Tooltip title="Dashboard">
        <IconButton onClick={() => navigate("/")}>
          <DashboardIcon />
        </IconButton>
      </Tooltip>

      {/* TRADES */}
      <Tooltip title="Trades">
        <IconButton onClick={() => navigate("/trades")}>
          <ListAltIcon />
        </IconButton>
      </Tooltip>

      {/* DIVIDER */}
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          mx: 0.5,
          borderColor: "rgba(255,255,255,0.25)",
        }}
      />

      {/* THEME */}
      <Tooltip title="Toggle Theme">
        <IconButton
          onClick={toggleTheme}
          sx={{
            color: "error.light",
          }}
        >
          <ToggleOnIcon />
        </IconButton>
      </Tooltip>

      {/* LOGOUT */}
      <Tooltip title="Logout">
        <IconButton
          onClick={logout}
          sx={{
            color: "error.light",
          }}
        >
          <LogoutIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
