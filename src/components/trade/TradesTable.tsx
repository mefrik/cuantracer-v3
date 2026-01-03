import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  TablePagination,
} from "@mui/material";
import TradeRow from "./TradeRow";

const HEADERS = [
  "Market",
  "Platform",
  "Account",
  "Pair",
  "", // 👈 ICON COLUMN
  "TF",
  "Direction",
  "Entry Time",
  "Status",
  "Progress %",
  "PnL",
  "Grade",
  "Action",
];

export default function TradesTable({
  data,
  page,
  pageSize,
  total,
  onPageChange,
}: {
  data: any[];
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (p: number) => void;
}) {
  return (
    <Paper>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              {[
                "Market",
                "Platform",
                "Account",
                "Pair",
                "TF",
                "Dir",
                "Entry Time",
                "Status",
                "Progress %",
                "PnL %",
                "Grade",
                "Action",
              ].map((h) => (
                <TableCell key={h}>{h}</TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((trade) => (
              <TradeRow key={trade.trade_id} trade={trade} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* 🔢 Pagination (DB driven) */}
      <TablePagination
        component="div"
        count={total}
        page={page - 1}
        onPageChange={(_, p) => onPageChange(p + 1)}
        rowsPerPage={pageSize}
        rowsPerPageOptions={[pageSize]}
      />
    </Paper>
  );
}
