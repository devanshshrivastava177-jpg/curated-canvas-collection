import { useServerFn } from "@tanstack/react-start";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { submitContact } from "@/lib/api/contact.functions";

export function ContactForm() {
  const submit = useServerFn(submitContact);
  const [busy, setBusy] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    project_type: "Residence",
    message: "",
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      await submit({ data: form });
      toast.success("Message received", {
        description: "We'll be in touch within 2 business days.",
      });
      setForm({ name: "", email: "", project_type: "Residence", message: "" });
    } catch (err) {
      toast.error("Something went wrong", {
        description: err instanceof Error ? err.message : "Please try again.",
      });
    } finally {
      setBusy(false);
    }
  };

  return (
    <section id="contact" className="bg-white px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#7a7570]">
            04 — Begin a Project
          </span>
          <h2
            className="mt-4 font-display text-[#1a1a1a]"
            style={{ fontSize: "clamp(36px, 4.6vw, 56px)", lineHeight: 1.05 }}
          >
            Let's create
            <br /> something rare.
          </h2>
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-[#7a7570]">
            We work with a limited number of clients each year. Tell us about your space and we'll
            arrange a call within two business days.
          </p>
          <div className="mt-10 space-y-3 text-sm text-[#5a5550]">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#7a7570]">Studio</div>
              <div className="mt-1">By appointment · Noida & Mumbai</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#7a7570]">Press</div>
              <div className="mt-1">press@raunaqsalariya.studio</div>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-6 md:col-span-7">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Field label="Your name">
              <input
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-b border-[#e8e2d9] py-3 text-[15px] text-[#1a1a1a] outline-none focus:border-[#c8b89a] transition-colors"
              />
            </Field>
            <Field label="Email">
              <input
                required
                type="email"
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border-b border-[#e8e2d9] py-3 text-[15px] text-[#1a1a1a] outline-none focus:border-[#c8b89a] transition-colors"
              />
            </Field>
          </div>
          <Field label="Project type">
            <select
              value={form.project_type}
              onChange={(e) => setForm({ ...form, project_type: e.target.value })}
              className="w-full bg-transparent border-b border-[#e8e2d9] py-3 text-[15px] text-[#1a1a1a] outline-none focus:border-[#c8b89a] transition-colors"
            >
              <option>Residence</option>
              <option>Hospitality</option>
              <option>Commercial</option>
              <option>Art direction</option>
              <option>Other</option>
            </select>
          </Field>
          <Field label="Tell us about your space">
            <textarea
              required
              rows={5}
              maxLength={2000}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full resize-none bg-transparent border-b border-[#e8e2d9] py-3 text-[15px] text-[#1a1a1a] outline-none focus:border-[#c8b89a] transition-colors"
            />
          </Field>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={busy}
            type="submit"
            className="px-10 py-4 text-[11px] uppercase tracking-[0.3em] disabled:opacity-50"
            style={{ background: "#1a1a1a", color: "#faf9f7" }}
          >
            {busy ? "Sending…" : "Send Enquiry"}
          </motion.button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[10px] uppercase tracking-[0.3em] text-[#7a7570]">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
