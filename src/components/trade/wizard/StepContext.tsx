import {
  Card,
  CardContent,
  Typography,
  Stack,
  TextField,
  MenuItem,
  ToggleButton,
  ToggleButtonGroup,
  Chip,
  Box,
  CircularProgress,
} from "@mui/material";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useTradeWizard } from "./useTradeWizard";
import { fetchPairs } from "@/lib/pairs";
import { fetchTimeframes } from "@/lib/timeframes";
import { fetchSessions } from "@/lib/sessions";

type PairRow = { id: string; symbol: string; icon_url?: string };
type TFRow = { id: string; code: string };

type SessionRow = {
  id: string;
  name: string;
  code?: string;
  session_id?: string;
};

export default function StepContext() {
  const { draft, setDraft, next, back } = useTradeWizard();

  const [pairs, setPairs] = useState<PairRow[]>([]);
  const [tfs, setTfs] = useState<TFRow[]>([]);
  const [sessions, setSessions] = useState<SessionRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([fetchPairs(), fetchTimeframes(), fetchSessions()])
      .then(([p, t, s]) => {
        setPairs(p);
        setTfs(t);
        setSessions(s);
      })
      .finally(() => setLoading(false));
  }, []);

  const canNext =
    !!draft.pair_id &&
    !!draft.entry_datetime &&
    !!draft.direction_id &&
    !!draft.timeframe_id &&
    !!draft.session;

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Define market context
        </Typography>

        {loading ? (
          <Box display="flex" justifyContent="center" py={4}>
            <CircularProgress />
          </Box>
        ) : (
          <Stack spacing={3}>
            {/* WHAT & WHEN */}
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                What &amp; When
              </Typography>

              <Stack spacing={2}>
                {/* Symbol */}
                <TextField
                  select
                  label="Symbol"
                  value={draft.pair_id ?? ""}
                  onChange={(e) => setDraft({ pair_id: e.target.value })}
                >
                  {pairs.map((p) => (
                    <MenuItem key={p.id} value={p.id}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        {p.icon_url && (
                          <img
                            src={p.icon_url}
                            alt={p.symbol}
                            width={16}
                            height={16}
                          />
                        )}
                        <span>{p.symbol}</span>
                      </Stack>
                    </MenuItem>
                  ))}
                </TextField>

                {/* Entry Date Time */}
                <TextField
                  type="datetime-local"
                  label="Entry Date & Time"
                  value={
                    draft.entry_datetime
                      ? dayjs(draft.entry_datetime).format("YYYY-MM-DDTHH:mm")
                      : ""
                  }
                  onChange={(e) =>
                    setDraft({
                      entry_datetime: dayjs(e.target.value).toISOString(),
                    })
                  }
                  InputLabelProps={{ shrink: true }}
                />
              </Stack>
            </Box>

            {/* TRADE INTENT */}
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Trade Intent
              </Typography>

              <Stack spacing={2}>
                {/* Direction */}
                <ToggleButtonGroup
                  exclusive
                  value={draft.direction_id ?? null}
                  onChange={(_, v) => v && setDraft({ direction_id: v })}
                >
                  <ToggleButton value={1}>LONG</ToggleButton>
                  <ToggleButton value={2}>SHORT</ToggleButton>
                </ToggleButtonGroup>

                {/* Timeframe */}
                <Box>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    mb={1}
                    display="block"
                  >
                    Timeframe
                  </Typography>

                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {tfs.map((tf) => {
                      const selected = draft.timeframe_id === tf.id;

                      return (
                        <Chip
                          key={tf.id}
                          label={tf.code}
                          clickable
                          color={selected ? "primary" : "default"}
                          variant={selected ? "filled" : "outlined"}
                          onClick={() => setDraft({ timeframe_id: tf.id })}
                        />
                      );
                    })}
                  </Stack>
                </Box>

                {/* Session */}
                <Box>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    mb={1}
                    display="block"
                  >
                    Session
                  </Typography>

                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {sessions.map((s) => {
                      const selected = draft.session_id === s.id;

                      return (
                        <Chip
                          key={s.id}
                          label={s.code ?? s.name}
                          clickable
                          color={selected ? "primary" : "default"}
                          variant={selected ? "filled" : "outlined"}
                          onClick={() => setDraft({ session_id: s.id })}
                        />
                      );
                    })}
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Stack>
        )}

        {/* Footer */}
        {/* <Box display="flex" justifyContent="space-between" mt={3}>
          <Box
            component="button"
            onClick={back}
            style={{
              padding: "8px 20px",
              borderRadius: 20,
              border: "1px solid #e5e7eb",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            Back
          </Box>

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
