import { Link } from "@tanstack/react-router";
import { Code2 } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/70 border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <Code2 className="h-5 w-5 text-primary" />
          <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Farid.dev</span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeOptions={{ exact: true }}
              activeProps={{ className: "px-3 py-2 rounded-md text-sm text-primary font-medium" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border mt-24 py-8 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} Farid Asnawi · Built with passion for tech
    </footer>
  );
}
