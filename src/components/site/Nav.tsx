import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { LogOut, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useCart } from "./CartContext";
import logo from "@/assets/rsd-logo.jpg.asset.json";

const NAV_LINKS = [
  { to: "/", label: "Atelier" },
  { to: "/interior-spaces", label: "Interior Spaces" },
  { to: "/hodch-store", label: "Hodch Store" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const { count, open: openCart } = useCart();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  void useNavigate; // reserved for future programmatic nav

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUserEmail(data.session?.user.email ?? null);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setUserEmail(session?.user.email ?? null);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const fg = scrolled ? "#1a1a1a" : "#faf9f7";

  return (
    <>
      <motion.header
        animate={{
          backgroundColor: scrolled ? "rgba(250,249,247,0.92)" : "rgba(250,249,247,0)",
          borderBottomColor: scrolled ? "#e8e2d9" : "rgba(232,226,217,0)",
          backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
        }}
        transition={{ duration: 0.35 }}
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{ borderBottomWidth: 1 }}
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:h-20 md:px-10">
          {/* Logo + wordmark */}
          <Link to="/" className="flex items-center gap-3" aria-label="Raunaq Salariya Designs — home">
            <motion.div
              animate={{
                background: scrolled ? "#1a1a1a" : "#faf9f7",
              }}
              transition={{ duration: 0.35 }}
              className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full md:h-10 md:w-10"
            >
              <img
                src={logo.url}
                alt=""
                className="h-7 w-7 object-contain md:h-8 md:w-8"
                style={{ filter: scrolled ? "invert(1)" : "none" }}
              />
            </motion.div>
            <span
              className="hidden font-display text-base tracking-wide sm:block md:text-lg"
              style={{ color: fg, transition: "color 0.35s" }}
            >
              Raunaq Salariya
            </span>
          </Link>

          {/* Center links */}
          <nav className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className="relative font-sans text-[11px] uppercase tracking-[0.25em] transition-opacity hover:opacity-70"
                  style={{ color: fg }}
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 -bottom-1.5 h-px w-full"
                      style={{ background: "#c8b89a" }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-4 md:gap-5">
            <button aria-label="Search" className="hidden md:block" style={{ color: fg }}>
              <Search size={18} />
            </button>
            {userEmail ? (
              <button
                aria-label="Sign out"
                title={`Signed in as ${userEmail} — click to sign out`}
                onClick={async () => {
                  await supabase.auth.signOut();
                  toast.success("Signed out.");
                }}
                className="hidden md:block"
                style={{ color: fg }}
              >
                <LogOut size={18} />
              </button>
            ) : (
              <Link
                to="/auth"
                aria-label="Sign in"
                className="hidden md:block"
                style={{ color: fg }}
              >
                <User size={18} />
              </Link>
            )}
            <button aria-label="Cart" onClick={openCart} className="relative" style={{ color: fg }}>
              <ShoppingBag size={18} />
              <span
                className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-medium"
                style={{ background: "#c8b89a", color: "#1a1a1a" }}
              >
                {count}
              </span>
            </button>
            <button
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="md:hidden"
              style={{ color: fg }}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile fullscreen */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex flex-col"
            style={{ background: "#1a1a1a" }}
          >
            <div className="flex h-16 items-center justify-between px-6">
              <img src={logo.url} alt="" className="h-8 w-8 object-contain" style={{ filter: "invert(1)" }} />
              <button aria-label="Close menu" onClick={() => setMobileOpen(false)} className="text-[#faf9f7]">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-8 px-10">
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                >
                  <Link to={l.to} className="font-display text-4xl text-[#faf9f7]">
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="flex items-center justify-center gap-8 pb-10 text-[#c8b89a]">
              <Search size={20} />
              <User size={20} />
              <button onClick={openCart} aria-label="Cart">
                <ShoppingBag size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
