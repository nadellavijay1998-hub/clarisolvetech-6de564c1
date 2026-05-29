import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Mail, MessageCircle, Phone, Send, CheckCircle2, Instagram, Facebook } from "lucide-react";
import { submitContact } from "@/lib/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ClariSolve Tech" },
      { name: "description", content: "Tell us what you're trying to achieve. We'll recommend the simplest solution." },
      { property: "og:title", content: "Contact — ClariSolve Tech" },
      { property: "og:description", content: "Get in touch with ClariSolve Tech." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const businessTypes = ["Shop", "Service Business", "SME", "Agency", "SaaS", "Other"];
const serviceOptions = [
  "Website",
  "E-Commerce",
  "Web Application",
  "QA & Maintenance",
  "Digital Marketing",
  "Automation & AI",
];

function ContactPage() {
  const submit = useServerFn(submitContact);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg(null);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      businessType: String(fd.get("businessType") ?? "").trim(),
      service: String(fd.get("service") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
    };
    try {
      await submit({ data: payload });
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <>
      <section className="container-narrow pt-14 md:pt-20 pb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">Contact</p>
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground max-w-3xl">
          Tell us what you're <span className="text-brand-gradient">trying to achieve.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground">
          We'll recommend the simplest solution — usually within one business day.
        </p>
      </section>

      <section className="container-narrow py-10 md:py-14 grid gap-10 lg:grid-cols-12">
        {/* Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-border bg-card p-6 sm:p-8 md:p-10 shadow-elegant"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" required placeholder="Your full name" />
              <Field label="Email" name="email" type="email" required placeholder="you@company.com" />
              <Field label="Phone / WhatsApp" name="phone" required placeholder="+91 ..." />
              <Select label="Business Type" name="businessType" required options={businessTypes} />
              <div className="sm:col-span-2">
                <Select label="Service Needed" name="service" required options={serviceOptions} />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <textarea
                  name="message"
                  required
                  minLength={10}
                  maxLength={2000}
                  rows={5}
                  placeholder="Tell us about your goals, timeline, and anything that helps us understand."
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-y"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-between">
              <p className="text-xs text-muted-foreground">
                By submitting, you agree to be contacted about your enquiry.
              </p>
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : (<>Send Message <Send className="h-4 w-4" /></>)}
              </button>
            </div>

            {status === "success" && (
              <div className="mt-5 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
                <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-emerald-600" />
                <div>
                  <p className="font-semibold">Thank you — we've received your message.</p>
                  <p className="mt-1 text-emerald-800/80">We'll get back to you shortly. For urgent enquiries, message us on WhatsApp.</p>
                </div>
              </div>
            )}
            {status === "error" && (
              <p className="mt-5 rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
                {errorMsg ?? "Something went wrong. Please try again or contact us on WhatsApp."}
              </p>
            )}
          </form>
        </div>

        {/* Contact info */}
        <aside className="lg:col-span-5 space-y-4">
          <InfoCard
            Icon={MessageCircle}
            label="WhatsApp"
            value="+91 85002 22838"
            href="https://wa.me/918500222838"
            cta="Message us"
          />
          <InfoCard
            Icon={Mail}
            label="Email"
            value="vijaynadella@clarisolvetech.com"
            href="mailto:vijaynadella@clarisolvetech.com"
            cta="Send an email"
          />
          <InfoCard
            Icon={Phone}
            label="Phone"
            value="+91 85002 22838"
            href="tel:+918500222838"
            cta="Call now"
          />
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="text-sm font-semibold text-foreground">Follow ClariSolve Tech</p>
            <div className="mt-3 flex gap-2">
              <a
                href="https://www.instagram.com/ClariSolve_Tech"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground hover:bg-secondary"
              >
                <Instagram className="h-4 w-4 text-primary-light" /> Instagram
              </a>
              <a
                href="https://www.facebook.com/ClariSolveTech"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground hover:bg-secondary"
              >
                <Facebook className="h-4 w-4 text-primary-light" /> Facebook
              </a>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}

function Field({
  label, name, type = "text", required, placeholder,
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={200}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

function Select({
  label, name, options, required,
}: { label: string; name: string; options: string[]; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-foreground">{label}</label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      >
        <option value="" disabled>Choose an option</option>
        {options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    </div>
  );
}

function InfoCard({
  Icon, label, value, href, cta,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string; value: string; href: string; cta: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="block rounded-2xl border border-border bg-card p-6 hover-lift"
    >
      <div className="flex items-start gap-4">
        <div className="h-11 w-11 rounded-xl bg-primary-light/10 flex items-center justify-center shrink-0">
          <Icon className="h-5 w-5 text-primary-light" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
          <p className="mt-1 text-sm font-semibold text-foreground break-all">{value}</p>
          <p className="mt-2 text-xs text-primary-light font-medium">{cta} →</p>
        </div>
      </div>
    </a>
  );
}
