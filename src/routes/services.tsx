import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Globe, LayoutTemplate, ShoppingBag, Megaphone,
  Code2, ShieldCheck, Wrench, Bot, ArrowRight,
} from "lucide-react";
import { SectionHeader } from "@/components/site/Section";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ClariSolve Tech" },
      { name: "description", content: "Business growth solutions and technology services: websites, e-commerce, web apps, QA, automation and AI." },
      { property: "og:title", content: "Services — ClariSolve Tech" },
      { property: "og:description", content: "Outcome-focused technology services for growing businesses." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

type Service = {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  problem: string;
  solution: string;
  outcome: string;
};

const growth: Service[] = [
  {
    Icon: Globe,
    title: "Business Websites",
    problem: "Your current site doesn't reflect the quality of your business.",
    solution: "A premium, mobile-first website built around your customers and brand.",
    outcome: "More trust, more enquiries, stronger online presence.",
  },
  {
    Icon: LayoutTemplate,
    title: "Landing Pages",
    problem: "Ad traffic isn't converting into customers.",
    solution: "High-conversion pages engineered for a single, clear action.",
    outcome: "Lower acquisition cost and more qualified leads.",
  },
  {
    Icon: ShoppingBag,
    title: "E-Commerce Solutions",
    problem: "Selling online is slow, manual, or unreliable.",
    solution: "Fast, scalable storefronts with payments, inventory and analytics done right.",
    outcome: "More sales, fewer drop-offs, healthier margins.",
  },
  {
    Icon: Megaphone,
    title: "Digital Marketing",
    problem: "You're invisible to the customers you want to reach.",
    solution: "Targeted campaigns across search, social and content with clear attribution.",
    outcome: "Consistent pipeline of relevant, ready-to-buy customers.",
  },
];

const tech: Service[] = [
  {
    Icon: Code2,
    title: "Web Application Development",
    problem: "Off-the-shelf tools don't match how your team really works.",
    solution: "Custom web apps designed around your processes — scalable and maintainable.",
    outcome: "Faster operations, fewer manual errors, real leverage.",
  },
  {
    Icon: ShieldCheck,
    title: "QA Testing",
    problem: "Bugs reach customers and damage trust.",
    solution: "Structured manual and automated testing across every release.",
    outcome: "Reliable software your customers can depend on.",
  },
  {
    Icon: Wrench,
    title: "Maintenance & Support",
    problem: "Your product is slow, outdated, or vulnerable.",
    solution: "Ongoing care: performance, security, dependencies and content.",
    outcome: "Peace of mind and a product that keeps getting better.",
  },
  {
    Icon: Bot,
    title: "AI & Automation",
    problem: "Repetitive work is eating your team's time.",
    solution: "AI agents and workflow automation tailored to your business logic.",
    outcome: "Hours saved every week and faster customer response times.",
  },
];

function ServiceCard({ s }: { s: Service }) {
  const { Icon } = s;
  return (
    <article className="hover-lift rounded-2xl border border-border bg-card p-6 md:p-7 h-full flex flex-col">
      <div className="h-11 w-11 rounded-xl bg-primary-light/10 flex items-center justify-center">
        <Icon className="h-5 w-5 text-primary-light" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
      <dl className="mt-4 space-y-3 text-sm">
        <div>
          <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Problem</dt>
          <dd className="mt-1 text-foreground/85">{s.problem}</dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Solution</dt>
          <dd className="mt-1 text-foreground/85">{s.solution}</dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Outcome</dt>
          <dd className="mt-1 text-primary font-medium">{s.outcome}</dd>
        </div>
      </dl>
    </article>
  );
}

function ServicesPage() {
  return (
    <>
      <section className="container-narrow pt-14 md:pt-20 pb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">Services</p>
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground max-w-3xl">
          Practical technology, <span className="text-brand-gradient">measurable growth.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
          Two clear tracks: solutions that grow your business, and solutions that strengthen
          your technology. Every engagement starts with understanding what you actually need.
        </p>
      </section>

      <section className="container-narrow py-10 md:py-14">
        <SectionHeader
          eyebrow="Business Growth Solutions"
          title={<>Reach more customers. Convert more sales.</>}
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {growth.map((s) => <ServiceCard key={s.title} s={s} />)}
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="container-narrow py-14 md:py-20">
          <SectionHeader
            eyebrow="Technology Solutions"
            title={<>Software you can trust. Operations that scale.</>}
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {tech.map((s) => <ServiceCard key={s.title} s={s} />)}
          </div>
        </div>
      </section>

      <section className="container-narrow py-16 md:py-24">
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-12 md:p-14 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground max-w-xl">
              Not sure which service fits? Start with a conversation.
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl">
              Tell us what you're trying to achieve — we'll recommend the simplest path forward.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-light transition-colors shrink-0"
          >
            Request Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
