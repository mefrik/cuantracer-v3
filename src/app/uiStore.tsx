import { createContext, useContext, useState } from "react";

type UIContextType = {
  openAddTrade: boolean;
  openAddTradeModal: () => void;
  closeAddTradeModal: () => void;
};

const UIContext = createContext<UIContextType | null>(null);

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [openAddTrade, setOpenAddTrade] = useState(false);

  return (
    <UIContext.Provider
      value={{
        openAddTrade,
        openAddTradeModal: () => setOpenAddTrade(true),
        closeAddTradeModal: () => setOpenAddTrade(false),
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

export const useUI = () => {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("UIProvider missing");
  return ctx;
};
