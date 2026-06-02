import { createContext, useContext, useState, type ReactNode } from "react";

type CartCtx = {
  count: number;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const count = 0;
  return (
    <Ctx.Provider
      value={{
        count,
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
        toggle: () => setIsOpen((v) => !v),
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be used within CartProvider");
  return c;
}
