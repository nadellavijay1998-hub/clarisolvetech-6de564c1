import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, MessageCircle, Globe, ShoppingBag, Code2, Bot, ShieldCheck,
  Wrench, Megaphone, Lightbulb, Award, Handshake, Quote,
} from "lucide-react";
import { HeroVisual } from "@/components/site/HeroVisual";
import { SectionHeader } from "@/components/site/Section";
import founderImg from "@/assets/founder-vijay.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ClariSolve Tech — Technology Solutions That Help Businesses Grow" },
      {
        name: "description",
        content:
          "Premium websites, web apps, automation, AI and QA built for measurable business growth. Understand. Simplify. Solve.",
      },
      { property: "og:title", content: "ClariSolve Tech — Technology Solutions That Help Businesses Grow" },
      { property: "og:description", content: "Turning complexity into clarity for ambitious businesses." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  { Icon: Globe, title: "Business Websites", desc: "Premium websites that build trust and convert visitors into customers." },
  { Icon: Code2, title: "Web Applications", desc: "Custom software tailored to how your business actually works." },
  { Icon: ShoppingBag, title: "E-Commerce", desc: "Storefronts engineered to sell — fast, mobile-first, and reliable." },
  { Icon: ShieldCheck, title: "QA Testing", desc: "Confidence at every release. We catch problems before customers do." },
  { Icon: Wrench, title: "Maintenance & Support", desc: "Long-term care that keeps your product fast, secure, and current." },
  { Icon: Megaphone, title: "Digital Marketing", desc: "Reach the right audience and turn attention into measurable revenue." },
  { Icon: Bot, title: "AI & Automation", desc: "AI agents and workflows that quietly do the work in the background." },
];

const whys = [
  { Icon: Lightbulb, title: "Clarity", desc: "We help businesses understand the right solution before investing." },
  { Icon: Award, title: "Quality", desc: "Every solution is built with long-term reliability in mind." },
  { Icon: Handshake, title: "Partnership", desc: "We aim to become a trusted technology partner — not a vendor." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-surface to-background" />
          <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-primary-light/15 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-primary/15 blur-3xl" />
        </div>

        <div className="container-narrow pt-12 md:pt-20 pb-16 md:pb-24 grid gap-12 lg:gap-16 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 backdrop-blur px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-light" />
              Understand. Simplify. Solve.
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-[3.6rem] font-semibold tracking-tight text-foreground leading-[1.05]">
              Technology solutions that{" "}
              <span className="text-brand-gradient">help businesses grow.</span>
            </h1>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              We help businesses build websites, develop software, automate processes,
              improve quality, and grow through technology — without the complexity.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-light transition-colors shadow-elegant"
              >
                Request Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/918500222838"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-primary-light" />
                Chat on WhatsApp
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                { k: "Outcome-first", v: "Strategy" },
                { k: "Mobile-first", v: "Engineering" },
                { k: "AI-ready", v: "Automation" },
              ].map((s) => (
                <div key={s.k} className="border-l-2 border-primary-light/40 pl-3">
                  <dt className="text-xs text-muted-foreground">{s.k}</dt>
                  <dd className="text-sm font-semibold text-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-6">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="container-narrow py-16 md:py-24">
        <SectionHeader
          eyebrow="What we do"
          title={<>Built for outcomes, not buzzwords.</>}
          description="A focused set of services designed to move the numbers that actually matter to your business."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ Icon, title, desc }) => (
            <article
              key={title}
              className="hover-lift group rounded-2xl border border-border bg-card p-6 md:p-7"
            >
              <div className="h-11 w-11 rounded-xl bg-primary-light/10 flex items-center justify-center group-hover:bg-primary-light/20 transition-colors">
                <Icon className="h-5 w-5 text-primary-light" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-light hover:text-primary"
          >
            Explore all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-surface border-y border-border">
        <div className="container-narrow py-16 md:py-24">
          <SectionHeader
            eyebrow="Why ClariSolve"
            title={<>Why businesses choose us.</>}
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {whys.map(({ Icon, title, desc }) => (
              <div key={title} className="rounded-2xl bg-card border border-border p-7 text-center">
                <div className="mx-auto h-12 w-12 rounded-2xl bg-brand-gradient text-primary-foreground flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-narrow py-16 md:py-24">
        <SectionHeader
          eyebrow="Our process"
          title={<>The ClariSolve Framework.</>}
          description="A simple, signature framework we apply to every engagement."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3 relative">
          {[
            { n: "01", t: "Understand", d: "We learn your business before recommending solutions. Goals, customers, constraints." },
            { n: "02", t: "Simplify", d: "We strip unnecessary complexity and align everyone on the simplest path forward." },
            { n: "03", t: "Solve", d: "We implement practical solutions that create measurable business results." },
          ].map((s) => (
            <div key={s.n} className="relative rounded-2xl border border-border bg-card p-7 md:p-8 hover-lift">
              <span className="text-xs font-semibold tracking-widest text-primary-light">{s.n}</span>
              <h3 className="mt-3 text-2xl font-semibold text-foreground">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDER */}
      <section className="bg-surface border-y border-border">
        <div className="container-narrow py-16 md:py-24 grid gap-10 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="absolute -inset-3 rounded-3xl bg-brand-gradient opacity-15 blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border border-border bg-card shadow-elegant">
                <img
                  src={founderImg}
                  alt="Vijay Nadella, Founder & CEO of ClariSolve Tech"
                  className="w-full h-auto object-cover aspect-[4/5]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">
              A word from our founder
            </p>
            <Quote className="mt-5 h-8 w-8 text-primary-light/50" />
            <p className="mt-3 text-xl md:text-2xl leading-relaxed text-foreground/90 font-medium">
              ClariSolve Tech was founded with a simple belief: businesses should not struggle
              with technology. Our mission is to help organizations understand challenges clearly,
              simplify solutions, and implement technology that creates real business value.
            </p>
            <div className="mt-7">
              <p className="text-base font-semibold text-foreground">Vijay Nadella</p>
              <p className="text-sm text-muted-foreground">Founder &amp; CEO, ClariSolve Tech</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-narrow py-16 md:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-brand-gradient p-8 sm:p-12 md:p-16 text-center">
          <div className="absolute inset-0 grid-bg opacity-10" aria-hidden />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-primary-foreground">
              Let's turn your complexity into clarity.
            </h2>
            <p className="mt-4 text-primary-foreground/85 max-w-xl mx-auto text-base md:text-lg">
              Tell us what you're trying to achieve — we'll recommend the simplest solution.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-primary hover:bg-background/90 transition-colors"
              >
                Request Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/918500222838"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-white/15 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
