import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Footer } from "../components/site/Footer";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign in — Raunaq Salariya Designs" },
      { name: "description", content: "Sign in or create an account to save projects and complete orders." },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/" });
    });
  }, [navigate]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: name },
            emailRedirectTo: `${window.location.origin}/`,
          },
        });
        if (error) throw error;
        toast.success("Account created. Check your email to confirm, then sign in.");
        setMode("signin");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Welcome back.");
        navigate({ to: "/" });
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong";
      toast.error(message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <main style={{ background: "#faf9f7" }} className="min-h-screen">
      <section className="grid min-h-screen grid-cols-1 md:grid-cols-2">
        {/* Visual */}
        <div
          className="relative hidden overflow-hidden md:block"
          style={{
            background:
              "radial-gradient(120% 80% at 20% 0%, #4a4540 0%, transparent 50%), linear-gradient(135deg,#2e2b28 0%,#3d3833 50%,#c8b89a 130%)",
          }}
        >
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 800" preserveAspectRatio="xMidYMid slice" aria-hidden>
            <circle cx="120" cy="200" r="180" fill="#c8b89a" opacity="0.14" />
            <circle cx="380" cy="600" r="240" fill="#c8b89a" opacity="0.10" />
            <rect x="60" y="380" width="240" height="240" fill="#c8b89a" opacity="0.06" />
          </svg>
          <div className="relative z-10 flex h-full flex-col justify-between p-12">
            <Link to="/" className="font-display text-xl text-[#faf9f7]">RSD</Link>
            <div>
              <p className="font-display italic text-[#e8e2d9]" style={{ fontSize: 28, lineHeight: 1.3 }}>
                "Restraint, ritual, and craft — for the considered home."
              </p>
              <p className="mt-4 text-[11px] uppercase tracking-[0.3em] text-[#c8b89a]">Raunaq Salariya · Atelier</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="flex items-center justify-center px-6 py-20 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-sm"
          >
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#7a7570]">
              {mode === "signin" ? "Welcome Back" : "Begin Your Story"}
            </span>
            <h1 className="mt-3 font-display text-4xl text-[#1a1a1a]">
              {mode === "signin" ? "Sign in" : "Create account"}
            </h1>
            <p className="mt-3 text-sm text-[#7a7570]">
              {mode === "signin"
                ? "Access your saved projects, orders, and journal."
                : "Save selections, track orders, and curate your archive."}
            </p>

            <form onSubmit={onSubmit} className="mt-8 space-y-4">
              {mode === "signup" && (
                <Field label="Full Name">
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="lv-input"
                    placeholder="Your name"
                  />
                </Field>
              )}
              <Field label="Email">
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="lv-input"
                  placeholder="you@example.com"
                />
              </Field>
              <Field label="Password">
                <input
                  required
                  type="password"
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="lv-input"
                  placeholder="••••••••"
                />
              </Field>

              <button
                type="submit"
                disabled={busy}
                className="mt-2 w-full px-8 py-4 text-[11px] uppercase tracking-[0.3em] transition-transform hover:scale-[1.01] disabled:opacity-60"
                style={{ background: "#1a1a1a", color: "#faf9f7" }}
              >
                {busy ? "Please wait…" : mode === "signin" ? "Sign In →" : "Create Account →"}
              </button>
            </form>

            <p className="mt-6 text-sm text-[#7a7570]">
              {mode === "signin" ? "New to the atelier?" : "Already have an account?"}{" "}
              <button
                onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
                className="story-link text-[#1a1a1a]"
              >
                {mode === "signin" ? "Create one" : "Sign in"}
              </button>
            </p>
          </motion.div>
        </div>
      </section>
      <Footer brand="Raunaq Salariya Designs" />

      <style>{`
        .lv-input{
          width:100%;
          background:transparent;
          border:none;
          border-bottom:1px solid #d9d2c5;
          padding:10px 0;
          font-size:14px;
          color:#1a1a1a;
          outline:none;
          transition:border-color .25s;
        }
        .lv-input:focus{ border-bottom-color:#c8b89a; }
      `}</style>
    </main>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.25em] text-[#7a7570]">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
