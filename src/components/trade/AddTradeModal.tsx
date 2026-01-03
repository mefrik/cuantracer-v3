import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Stack,
} from "@mui/material";
import { useUI } from "@/app/uiStore";

export default function AddTradeModal() {
  const { openAddTrade, closeAddTradeModal } = useUI();

  const handleSubmit = () => {
    // nanti insert supabase di sini
    closeAddTradeModal();
  };

  return (
    <Dialog
      open={openAddTrade}
      onClose={closeAddTradeModal}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>Add Trade</DialogTitle>

      <DialogContent>
        <Stack spacing={2} mt={1}>
          <TextField label="Pair" fullWidth />
          <TextField label="Entry Price" type="number" fullWidth />
          <TextField label="Stop Loss" type="number" fullWidth />
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={closeAddTradeModal}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
