import { Box, LinearProgress, Typography } from "@mui/material";
import { useTradeWizard } from "./useTradeWizard";

export default function WizardStepper() {
  const { step } = useTradeWizard();

  return (
    <Box mb={3}>
      <Typography variant="caption">Step {step} of 4</Typography>
      <LinearProgress
        variant="determinate"
        value={(step / 4) * 100}
        sx={{ mt: 1, height: 6, borderRadius: 3 }}
      />
    </Box>
  );
}
