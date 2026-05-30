import { Link } from "@tanstack/react-router";
import { MessageCircle, Instagram, Facebook, Mail, Phone } from "lucide-react";
import logo from "@/assets/clarisolve-logo.png";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-surface">
      <div className="container-narrow py-14 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <img src={logo} alt="ClariSolve Tech" className="h-20 w-auto" />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-md">
            ClariSolve Tech helps businesses turn complexity into clarity — through websites,
            web applications, automation, and AI that create real, measurable value.
          </p>
          <div className="mt-5 flex items-center gap-2">
            {[
              { href: "https://wa.me/918500222838", label: "WhatsApp", Icon: MessageCircle },
              { href: "https://www.instagram.com/ClariSolve_Tech", label: "Instagram", Icon: Instagram },
              { href: "https://www.facebook.com/ClariSolveTech", label: "Facebook", Icon: Facebook },
              { href: "mailto:vijaynadella@clarisolvetech.com", label: "Email", Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-md text-muted-foreground hover:text-primary-light hover:bg-background transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-sm font-semibold text-foreground">Navigate</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary-light">Home</Link></li>
            <li><Link to="/services" className="hover:text-primary-light">Services</Link></li>
            <li><Link to="/about" className="hover:text-primary-light">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary-light">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-sm font-semibold text-foreground">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-primary-light" />
              <a href="https://wa.me/918500222838" className="hover:text-primary-light">
                +91 85002 22838 (WhatsApp)
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-primary-light" />
              <a href="mailto:vijaynadella@clarisolvetech.com" className="hover:text-primary-light break-all">
                vijaynadella@clarisolvetech.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-narrow py-5 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} ClariSolve Tech. All rights reserved.</p>
          <p>Understand. Simplify. Solve.</p>
        </div>
      </div>
    </footer>
  );
}
