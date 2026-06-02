import { useServerFn } from "@tanstack/react-start";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { placeOrder } from "@/lib/api/orders.functions";
import { useCart } from "./CartContext";

export function CartDrawer() {
  const { isOpen, close, items, subtotal, updateQty, remove, clear } = useCart();
  const [checkout, setCheckout] = useState(false);
  const [form, setForm] = useState({ customer_name: "", customer_email: "", shipping_address: "" });
  const [busy, setBusy] = useState(false);
  const order = useServerFn(placeOrder);

  const onCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!items.length) return;
    setBusy(true);
    try {
      const res = await order({
        data: {
          ...form,
          items: items.map((i) => ({ id: i.id, name: i.name, price: i.price, qty: i.qty })),
          total: subtotal,
        },
      });
      toast.success("Order placed", { description: `Confirmation #${res.id.slice(0, 8).toUpperCase()}` });
      clear();
      setCheckout(false);
      setForm({ customer_name: "", customer_email: "", shipping_address: "" });
      close();
    } catch (err) {
      toast.error("Order failed", { description: err instanceof Error ? err.message : "Try again." });
    } finally {
      setBusy(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/40"
            onClick={close}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.45 }}
            className="fixed right-0 top-0 z-[80] flex h-full w-full max-w-md flex-col"
            style={{ background: "#1a1a1a", color: "#faf9f7" }}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <h3 className="font-display text-2xl">
                {checkout ? "Checkout" : "Your Cart"}
              </h3>
              <button onClick={close} aria-label="Close cart" className="text-[#faf9f7]">
                <X size={20} />
              </button>
            </div>

            {!checkout && items.length === 0 && (
              <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
                <p className="font-display text-2xl text-[#c8b89a]">Your cart is empty</p>
                <p className="mt-3 text-sm text-[#b0a89a]">
                  Considered objects, curated for the home.
                </p>
                <button
                  onClick={close}
                  className="mt-8 text-[11px] uppercase tracking-[0.3em] text-[#c8b89a] story-link"
                >
                  Continue Browsing
                </button>
              </div>
            )}

            {!checkout && items.length > 0 && (
              <div className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
                {items.map((it) => (
                  <div key={it.id} className="flex gap-4">
                    <div
                      className="h-20 w-20 shrink-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${it.image})` }}
                    />
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="font-display text-lg leading-tight">{it.name}</div>
                          <div className="text-[10px] uppercase tracking-[0.2em] text-[#b0a89a]">
                            {it.mat}
                          </div>
                        </div>
                        <button onClick={() => remove(it.id)} className="text-[#b0a89a] hover:text-[#c8b89a]">
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-2 border border-white/15 px-2">
                          <button onClick={() => updateQty(it.id, it.qty - 1)} aria-label="Decrease">
                            <Minus size={12} />
                          </button>
                          <span className="min-w-[20px] text-center text-sm">{it.qty}</span>
                          <button onClick={() => updateQty(it.id, it.qty + 1)} aria-label="Increase">
                            <Plus size={12} />
                          </button>
                        </div>
                        <div className="text-sm">${(it.price * it.qty).toLocaleString()}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {checkout && (
              <form onSubmit={onCheckout} className="flex-1 space-y-5 overflow-y-auto px-6 py-5">
                <CField label="Full name">
                  <input
                    required maxLength={120}
                    value={form.customer_name}
                    onChange={(e) => setForm({ ...form, customer_name: e.target.value })}
                    className="lv-cinput"
                  />
                </CField>
                <CField label="Email">
                  <input
                    required type="email" maxLength={255}
                    value={form.customer_email}
                    onChange={(e) => setForm({ ...form, customer_email: e.target.value })}
                    className="lv-cinput"
                  />
                </CField>
                <CField label="Shipping address">
                  <textarea
                    required rows={4} maxLength={500}
                    value={form.shipping_address}
                    onChange={(e) => setForm({ ...form, shipping_address: e.target.value })}
                    className="lv-cinput resize-none"
                  />
                </CField>
                <div className="text-xs text-[#b0a89a]">
                  This is a demo checkout — no real payment will be processed.
                </div>
              </form>
            )}

            <div className="border-t border-white/10 px-6 py-5">
              <div className="flex items-center justify-between text-sm">
                <span className="uppercase tracking-[0.2em] text-[#b0a89a]">Subtotal</span>
                <span className="font-display text-xl">${subtotal.toLocaleString()}</span>
              </div>
              {!checkout ? (
                <motion.button
                  whileHover={{ scale: items.length ? 1.02 : 1 }}
                  whileTap={{ scale: items.length ? 0.98 : 1 }}
                  onClick={() => items.length && setCheckout(true)}
                  disabled={!items.length}
                  className="mt-5 w-full py-4 text-[11px] uppercase tracking-[0.3em] disabled:opacity-50"
                  style={{ background: "#c8b89a", color: "#1a1a1a" }}
                >
                  Checkout
                </motion.button>
              ) : (
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setCheckout(false)}
                    className="py-4 text-[11px] uppercase tracking-[0.3em] border border-white/20"
                  >
                    Back
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onCheckout}
                    disabled={busy}
                    className="py-4 text-[11px] uppercase tracking-[0.3em] disabled:opacity-50"
                    style={{ background: "#c8b89a", color: "#1a1a1a" }}
                  >
                    {busy ? "Placing…" : "Place Order"}
                  </motion.button>
                </div>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function CField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[10px] uppercase tracking-[0.3em] text-[#b0a89a]">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
