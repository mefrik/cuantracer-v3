import { IconButton, Tooltip } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SellIcon from "@mui/icons-material/Sell";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export default function TradeActions() {
  return (
    <>
      <Tooltip title="Details">
        <IconButton size="small">
          <InfoIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Evaluation">
        <IconButton size="small">
          <PsychologyIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Take Profit">
        <IconButton size="small">
          <SellIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Outcome">
        <IconButton size="small">
          <EmojiEventsIcon />
        </IconButton>
      </Tooltip>
    </>
  );
}
