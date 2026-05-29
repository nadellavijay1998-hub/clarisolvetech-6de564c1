import { createFileRoute } from "@tanstack/react-router";
import {
  Lightbulb, ShieldCheck, Award, Handshake, HeartHandshake, Sparkles, Quote,
} from "lucide-react";
import { SectionHeader } from "@/components/site/Section";
import founderImg from "@/assets/founder-vijay.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ClariSolve Tech" },
      { name: "description", content: "ClariSolve Tech exists to help businesses turn complexity into clarity. Learn about our mission, vision and core values." },
      { property: "og:title", content: "About — ClariSolve Tech" },
      { property: "og:description", content: "Our mission: help businesses grow through practical technology." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { Icon: Lightbulb, title: "Clarity", desc: "We make complex decisions easy to understand." },
  { Icon: ShieldCheck, title: "Honesty", desc: "We say what's true, even when it's inconvenient." },
  { Icon: Award, title: "Quality", desc: "We build things that last and hold up under pressure." },
  { Icon: HeartHandshake, title: "Service", desc: "We treat your business like our own." },
  { Icon: Handshake, title: "Partnership", desc: "We aim for long-term relationships, not one-off projects." },
  { Icon: Sparkles, title: "Continuous Improvement", desc: "We get better — quietly and consistently." },
];

function AboutPage() {
  return (
    <>
      <section className="container-narrow pt-14 md:pt-20 pb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">About</p>
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground max-w-3xl">
          We help businesses turn <span className="text-brand-gradient">complexity into clarity.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
          ClariSolve Tech exists for one reason: technology should solve problems, not create them.
          We work with shops, service businesses, SMEs, startups, SaaS teams and agencies — and we
          help each of them move forward with confidence.
        </p>
      </section>

      {/* Mission / Vision */}
      <section className="container-narrow py-10 md:py-16 grid gap-6 md:grid-cols-2">
        {[
          {
            label: "Our Mission",
            title: "Help businesses grow through practical technology solutions.",
            desc: "We focus on solutions that move the metrics that matter — leads, sales, time saved, customer trust.",
          },
          {
            label: "Our Vision",
            title: "Become a trusted technology partner for businesses seeking clarity, quality and sustainable growth.",
            desc: "Long-term relationships, honest advice, and engineering you can rely on year after year.",
          },
        ].map((card) => (
          <div key={card.label} className="rounded-3xl border border-border bg-card p-8 md:p-10 hover-lift">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">{card.label}</p>
            <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
              {card.title}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </section>

      {/* Values */}
      <section className="bg-surface border-y border-border">
        <div className="container-narrow py-16 md:py-24">
          <SectionHeader
            eyebrow="Core values"
            title={<>What we stand for.</>}
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-7 hover-lift">
                <div className="h-11 w-11 rounded-xl bg-primary-light/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-primary-light" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="container-narrow py-16 md:py-24 grid gap-10 lg:grid-cols-12 items-center">
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
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">Founder</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Vijay Nadella
          </h2>
          <p className="text-base text-muted-foreground">Founder &amp; CEO</p>
          <Quote className="mt-6 h-8 w-8 text-primary-light/50" />
          <p className="mt-3 text-lg md:text-xl leading-relaxed text-foreground/90 font-medium">
            "ClariSolve Tech was founded with a simple belief: businesses should not struggle
            with technology. Our mission is to help organizations understand challenges clearly,
            simplify solutions, and implement technology that creates real business value."
          </p>
        </div>
      </section>
    </>
  );
}
