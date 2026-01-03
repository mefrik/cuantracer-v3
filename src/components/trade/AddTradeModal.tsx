import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { useUI } from "@/app/uiStore";
import { TradeWizardProvider } from "@/components/trade/wizard/TradeWizardContext";
import AddTradeWizardContent from "./AddTradeWizardContent";

export default function AddTradeModal() {
  const { openAddTrade, closeAddTradeModal } = useUI();

  return (
    <Dialog
      open={openAddTrade}
      onClose={closeAddTradeModal}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle>New Trade</DialogTitle>

      <TradeWizardProvider mode="create">
        <AddTradeWizardContent onClose={closeAddTradeModal} />
      </TradeWizardProvider>
    </Dialog>
  );
}
