import { TableRow, TableCell, Chip, Avatar, Stack } from "@mui/material";
import TradeActions from "./TradeActions";
import dayjs from "dayjs";

export default function TradeRow({ trade }: { trade: any }) {
  return (
    <TableRow hover>
      <TableCell>{trade.market}</TableCell>
      <TableCell>{trade.platform}</TableCell>
      <TableCell>{trade.account}</TableCell>

      {/* Pair */}
      <TableCell>
        <Stack
          display="flex"
          flexDirection={"row"}
          gap={1}
          alignItems={"center"}
        >
          {trade.pair_icon_url ? (
            <Avatar
              src={trade.pair_icon_url}
              sx={{ width: 20, height: 20 }}
              variant="square"
            />
          ) : (
            "-"
          )}
          {trade.pair}
        </Stack>
      </TableCell>

      <TableCell>{trade.timeframe}</TableCell>
      <TableCell>{trade.direction}</TableCell>

      {/* Entry Time */}
      <TableCell>
        {trade.entry_datetime
          ? dayjs(trade.entry_datetime).format("YYYY-MM-DD HH:mm")
          : "-"}
      </TableCell>

      {/* Status */}
      <TableCell>
        <Chip
          size="small"
          label={trade.status}
          color={
            trade.status === "Closed"
              ? "success"
              : trade.status === "Partial"
                ? "warning"
                : "info"
          }
        />
      </TableCell>

      {/* Progress */}
      <TableCell>{trade.progress}%</TableCell>

      {/* PnL */}
      <TableCell
        sx={{
          color:
            trade.pnl > 0
              ? "success.light"
              : trade.pnl < 0
                ? "error.light"
                : "text.secondary",
          fontWeight: 600,
        }}
      >
        {trade.pnl}
      </TableCell>

      {/* Grade */}
      <TableCell>
        {trade.grade ? <Chip size="small" label={trade.grade} /> : "-"}
      </TableCell>

      {/* Actions */}
      <TableCell>
        <TradeActions />
      </TableCell>
    </TableRow>
  );
}
