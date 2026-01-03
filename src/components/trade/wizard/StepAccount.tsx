import {
  Box,
  Card,
  CardContent,
  Typography,
  MenuItem,
  TextField,
  Stack,
  CircularProgress,
} from "@mui/material";
import { useEffect, useState } from "react";
import { fetchAccounts } from "@/lib/accounts";
import { useTradeWizard } from "./useTradeWizard";

type AccountRow = {
  id: string;
  name: string;
  market_id: string;
  platform_id: string;
  mst_market?: { id: string; name: string };
  mst_platform?: { id: string; name: string };
};

export default function StepAccount() {
  const { draft, setDraft, next } = useTradeWizard();

  const [accounts, setAccounts] = useState<AccountRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAccounts()
      .then(setAccounts)
      .finally(() => setLoading(false));
  }, []);

  const selectedAccount = accounts.find((a) => a.id === draft.account_id);

  const handleAccountChange = (id: string) => {
    const acc = accounts.find((a) => a.id === id);
    if (!acc) return;

    setDraft({
      account_id: acc.id,
      market_id: acc.market_id,
      platform_id: acc.platform_id,
    });
  };

  const canNext = !!draft.account_id;

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Trading Environment
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={2}>
          Select where this trade is executed.
        </Typography>

        {loading ? (
          <Box display="flex" justifyContent="center" py={4}>
            <CircularProgress />
          </Box>
        ) : (
          <Stack spacing={2}>
            {/* Market (readonly) */}
            <TextField
              label="Market"
              value={selectedAccount?.mst_market?.name ?? ""}
              InputProps={{ readOnly: true }}
            />

            {/* Platform (readonly) */}
            <TextField
              label="Platform / Exchange"
              value={selectedAccount?.mst_platform?.name ?? ""}
              InputProps={{ readOnly: true }}
            />

            {/* Account */}
            <TextField
              select
              label="Account"
              value={draft.account_id ?? ""}
              onChange={(e) => handleAccountChange(e.target.value)}
            >
              {accounts.map((a) => (
                <MenuItem key={a.id} value={a.id}>
                  {a.name}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
        )}

        {/* Footer */}
        {/* <Box display="flex" justifyContent="flex-end" mt={3}>
          <Box
            component="button"
            disabled={!canNext}
            onClick={next}
            style={{
              padding: "8px 20px",
              borderRadius: 20,
              border: "none",
              background: canNext ? "#3b82f6" : "#cbd5f5",
              color: "#fff",
              cursor: canNext ? "pointer" : "not-allowed",
            }}
          >
            Next
          </Box>
        </Box> */}
      </CardContent>
    </Card>
  );
}
