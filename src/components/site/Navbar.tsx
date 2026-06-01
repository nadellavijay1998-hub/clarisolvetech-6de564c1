import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, Instagram, Facebook, Mail } from "lucide-react";
import logo from "@/assets/clarisolve-logo.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const socials = [
  { href: "https://wa.me/918500222838", label: "WhatsApp", Icon: MessageCircle },
  { href: "https://www.instagram.com/ClariSolve_Tech", label: "Instagram", Icon: Instagram },
  { href: "https://www.facebook.com/ClariSolveTech", label: "Facebook", Icon: Facebook },
  { href: "mailto:vijaynadella@clarisolvetech.com", label: "Email", Icon: Mail },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled
          ? "bg-white/10 backdrop-blur-xl border-b border-white/15 shadow-[0_1px_24px_-12px_rgba(0,0,0,0.5)]"
          : "bg-white/5 backdrop-blur-md border-b border-white/10"
      }`}
    >
      <div className="container-narrow flex h-16 md:h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <img src={logo} alt="ClariSolve Tech" className="h-12 md:h-16 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary-light rounded-md transition-colors"
              activeProps={{ className: "text-primary-light bg-white/10" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-1">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-md text-foreground/70 hover:text-primary-light hover:bg-white/10 transition-colors"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
          <Link
            to="/contact"
            className="ml-2 inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-light transition-colors"
          >
            Get Started
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-md text-foreground/80 hover:bg-white/10"
        >

            <Link
              key={item.to}
              to={item.to}
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary rounded-md transition-colors"
              activeProps={{ className: "text-primary bg-slate-100" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-1">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-md text-slate-600 hover:text-primary hover:bg-slate-100 transition-colors"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
          <Link
            to="/contact"
            className="ml-2 inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-light transition-colors"
          >
            Get Started
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-narrow py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md text-base font-medium text-foreground/80 hover:bg-secondary"
                activeProps={{ className: "text-primary bg-secondary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center items-center rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              Get Started
            </Link>
            <div className="flex items-center justify-center gap-2 pt-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-full text-muted-foreground hover:text-primary-light hover:bg-secondary"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
