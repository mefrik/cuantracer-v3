import { createContext, useContext, useMemo, useState, ReactNode } from "react";
import { TradeDraft, WizardMode } from "./types";

type WizardContextType = {
  mode: WizardMode;
  step: number;
  draft: TradeDraft;

  // navigation
  next: () => void;
  back: () => void;
  goTo: (step: number) => void;

  // data
  setDraft: (patch: Partial<TradeDraft>) => void;
  reset: () => void;
  loadForEdit: (data: TradeDraft) => void;
};

const TradeWizardContext = createContext<WizardContextType | null>(null);

const TOTAL_STEPS = 4;

export function TradeWizardProvider({
  children,
  mode = "create",
}: {
  children: ReactNode;
  mode?: WizardMode;
}) {
  const [step, setStep] = useState(1);
  const [draft, setDraftState] = useState<TradeDraft>({});

  const setDraft = (patch: Partial<TradeDraft>) => {
    setDraftState((prev) => ({ ...prev, ...patch }));
  };

  const next = () => setStep((s) => (s < TOTAL_STEPS ? s + 1 : s));

  const back = () => setStep((s) => (s > 1 ? s - 1 : s));

  const goTo = (s: number) => {
    if (s >= 1 && s <= TOTAL_STEPS) setStep(s);
  };

  const reset = () => {
    setDraftState({});
    setStep(1);
  };

  const loadForEdit = (data: TradeDraft) => {
    setDraftState(data);
    setStep(1);
  };

  const value = useMemo(
    () => ({
      mode,
      step,
      draft,
      next,
      back,
      goTo,
      setDraft,
      reset,
      loadForEdit,
    }),
    [mode, step, draft]
  );

  return (
    <TradeWizardContext.Provider value={value}>
      {children}
    </TradeWizardContext.Provider>
  );
}

export const useTradeWizardContext = () => {
  const ctx = useContext(TradeWizardContext);
  if (!ctx) throw new Error("TradeWizardProvider is missing");
  return ctx;
};
