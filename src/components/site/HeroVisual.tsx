import { TrendingUp, Sparkles, ShieldCheck, Workflow, Bot, LineChart } from "lucide-react";

/**
 * Custom-built hero visual representing
 * Complexity → Understand · Simplify · Solve → Results
 * Pure React + SVG. No stock photos.
 */
export function HeroVisual() {
  return (
    <div className="relative w-full aspect-[5/6] sm:aspect-[6/5] lg:aspect-square max-w-[640px] mx-auto">
      {/* Soft background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light/10 via-transparent to-primary/10 rounded-[2rem]" />
        <div className="absolute inset-6 grid-bg rounded-[2rem] opacity-60" />
      </div>

      {/* Connecting SVG lines */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full"
        fill="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.62 0.14 245)" stopOpacity="0.0" />
            <stop offset="50%" stopColor="oklch(0.62 0.14 245)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="oklch(0.28 0.08 252)" stopOpacity="0.0" />
          </linearGradient>
        </defs>
        <path d="M60 80 C 140 120, 180 180, 200 200" stroke="url(#line)" strokeWidth="1.5" />
        <path d="M340 70 C 280 130, 230 170, 200 200" stroke="url(#line)" strokeWidth="1.5" />
        <path d="M70 330 C 150 300, 180 240, 200 200" stroke="url(#line)" strokeWidth="1.5" />
        <path d="M340 330 C 270 290, 230 240, 200 200" stroke="url(#line)" strokeWidth="1.5" />
      </svg>

      {/* Top-left: complexity (tangled) */}
      <FloatingChip className="absolute top-2 left-2 sm:top-4 sm:left-4 animate-float">
        <Workflow className="h-4 w-4 text-primary-light" />
        <span>Disconnected tools</span>
      </FloatingChip>

      <FloatingChip className="absolute top-20 left-1 sm:top-24 sm:left-2 animate-float-delay opacity-90">
        <span className="h-2 w-2 rounded-full bg-destructive/70" />
        <span>Manual tasks</span>
      </FloatingChip>

      {/* Top-right */}
      <FloatingChip className="absolute top-2 right-2 sm:top-4 sm:right-4 animate-float-delay">
        <span className="h-2 w-2 rounded-full bg-amber-500/80" />
        <span>Slow growth</span>
      </FloatingChip>

      {/* Center framework */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="glass-card rounded-3xl p-5 sm:p-6 w-[78%] sm:w-[68%]">
          <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-semibold text-center">
            The ClariSolve Framework
          </p>
          <div className="mt-4 space-y-2.5">
            {[
              { label: "Understand", desc: "Listen to your business" },
              { label: "Simplify", desc: "Remove the noise" },
              { label: "Solve", desc: "Ship measurable value" },
            ].map((s, i) => (
              <div
                key={s.label}
                className="flex items-center gap-3 rounded-xl bg-background/80 border border-border px-3 py-2.5"
              >
                <div className="h-7 w-7 shrink-0 rounded-lg bg-brand-gradient text-primary-foreground text-xs font-semibold flex items-center justify-center">
                  {i + 1}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground leading-tight">{s.label}</p>
                  <p className="text-[11px] text-muted-foreground leading-tight">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom-left result */}
      <ResultCard
        className="absolute bottom-2 left-1 sm:bottom-4 sm:left-2 animate-float"
        Icon={TrendingUp}
        label="Leads"
        value="+184%"
      />
      {/* Bottom-right result */}
      <ResultCard
        className="absolute bottom-2 right-1 sm:bottom-4 sm:right-2 animate-float-delay"
        Icon={LineChart}
        label="Conversion"
        value="3.7×"
      />
      <FloatingChip className="absolute bottom-28 right-3 sm:bottom-32 sm:right-6 animate-float">
        <Bot className="h-4 w-4 text-primary-light" />
        <span>AI agent live</span>
      </FloatingChip>
      <FloatingChip className="absolute top-1/2 -translate-y-1/2 right-0 sm:right-1 animate-float-delay">
        <ShieldCheck className="h-4 w-4 text-emerald-600" />
        <span>QA passed</span>
      </FloatingChip>
      <FloatingChip className="absolute top-1/2 -translate-y-1/2 left-0 sm:left-1 animate-float">
        <Sparkles className="h-4 w-4 text-primary-light" />
        <span>Automated</span>
      </FloatingChip>
    </div>
  );
}

function FloatingChip({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`glass-card rounded-full pl-2 pr-3 py-1.5 flex items-center gap-2 text-[11px] font-medium text-foreground/85 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

function ResultCard({
  Icon,
  label,
  value,
  className = "",
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={`glass-card rounded-2xl p-3 sm:p-4 min-w-[120px] ${className}`}>
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 rounded-lg bg-primary-light/15 flex items-center justify-center">
          <Icon className="h-4 w-4 text-primary-light" />
        </div>
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">{label}</p>
      </div>
      <p className="mt-1.5 text-xl sm:text-2xl font-bold text-brand-gradient leading-none">{value}</p>
    </div>
  );
}
