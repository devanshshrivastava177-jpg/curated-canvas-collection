import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  mat: string;
  image: string;
  qty: number;
};

type CartCtx = {
  items: CartItem[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  add: (item: Omit<CartItem, "qty">) => void;
  remove: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clear: () => void;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<CartItem[]>([]);

  const { count, subtotal } = useMemo(() => {
    const c = items.reduce((s, i) => s + i.qty, 0);
    const sub = items.reduce((s, i) => s + i.qty * i.price, 0);
    return { count: c, subtotal: sub };
  }, [items]);

  return (
    <Ctx.Provider
      value={{
        items,
        count,
        subtotal,
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
        toggle: () => setIsOpen((v) => !v),
        add: (it) => {
          setItems((prev) => {
            const ex = prev.find((p) => p.id === it.id);
            if (ex) return prev.map((p) => (p.id === it.id ? { ...p, qty: p.qty + 1 } : p));
            return [...prev, { ...it, qty: 1 }];
          });
          setIsOpen(true);
        },
        remove: (id) => setItems((p) => p.filter((i) => i.id !== id)),
        updateQty: (id, qty) =>
          setItems((p) =>
            p.map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i)),
          ),
        clear: () => setItems([]),
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
