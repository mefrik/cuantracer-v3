import { DialogContent, DialogActions, Button } from "@mui/material";
import WizardStepper from "@/components/trade/wizard/WizardStepper";
import { useTradeWizard } from "@/components/trade/wizard/useTradeWizard";
import StepAccount from "@/components/trade/wizard/StepAccount";
import StepContext from "./wizard/StepContext";

export default function AddTradeWizardContent({
  onClose,
}: {
  onClose: () => void;
}) {
  const { step, next, back } = useTradeWizard();

  return (
    <>
      <DialogContent>
        <WizardStepper />

        {step === 1 && <StepAccount />}
        {step === 2 && <StepContext />}
        {/* {step === 3 && <StepExecution />}
        {step === 4 && <StepReview />} */}
      </DialogContent>

      <DialogActions>
        {step > 1 && <Button onClick={back}>Back</Button>}

        {step < 4 ? (
          <Button variant="contained" onClick={next}>
            Next
          </Button>
        ) : (
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              // nanti submit supabase
              onClose();
            }}
          >
            Save Trade
          </Button>
        )}
      </DialogActions>
    </>
  );
}
