import { Box, IconButton, Tooltip } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import { useNavigate } from "react-router-dom";
import { logout } from "@/lib/auth";

export default function Dockbar() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 16,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        alignItems: "center",
        gap: 1,
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
