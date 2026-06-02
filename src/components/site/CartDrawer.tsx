import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useCart } from "./CartContext";

export function CartDrawer() {
  const { isOpen, close } = useCart();
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
              <h3 className="font-display text-2xl">Your Cart</h3>
              <button onClick={close} aria-label="Close cart">
                <X size={20} />
              </button>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
              <p className="font-display text-2xl text-[#c8b89a]">Your cart is empty</p>
              <p className="mt-3 text-sm text-[#b0a89a]">
                Considered objects, curated for the home.
              </p>
            </div>
            <div className="border-t border-white/10 px-6 py-5">
              <div className="flex items-center justify-between text-sm">
                <span className="uppercase tracking-[0.2em] text-[#b0a89a]">Subtotal</span>
                <span className="font-display text-xl">$0.00</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-5 w-full py-4 text-[11px] uppercase tracking-[0.3em]"
                style={{ background: "#c8b89a", color: "#1a1a1a" }}
              >
                Checkout
              </motion.button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
