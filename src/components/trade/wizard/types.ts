export type WizardMode = "create" | "edit";

export type TradeDraft = {
  // Step 1 – Account
  account_id?: string;
  market_id?: string;
  platform_id?: string;

  // Step 2 – Context
  pair_id?: string;
  entry_datetime?: string;
  direction_id?: number;
  timeframe_id?: string;
  session?: "Asia" | "London" | "New York";

  // Step 3 – Execution
  entry_price?: number;
  stop_loss?: number;
  take_profit?: number;
  qty_total?: number;
  entry_fee?: number;
  risk_pct?: number;

  // Derived (auto)
  risk_per_unit?: number;
  reward_per_unit?: number;
  rrr?: number;
  risk_distance?: number;
  reward_distance?: number;
};

export type WizardState = {
  mode: WizardMode;
  step: number;
  draft: TradeDraft;
};
