import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import avatar from "@/assets/avatar.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Farid Asnawi — IT Professional & Web Developer" },
      {
        name: "description",
        content:
          "Hi, I'm Farid — ICT graduate with experience in IT support, troubleshooting, software testing, and web development.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1088}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 sm:py-32 grid md:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs mb-6">
              <Sparkles className="h-3 w-3" /> Available for opportunities
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Farid Asnawi
              </span>
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-muted-foreground">
              IT Professional · Web Developer · Problem Solver
            </p>
            <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
              Motivated ICT graduate with hands-on experience in IT infrastructure support, software testing,
              troubleshooting, and full-stack web development.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:opacity-90 shadow-[var(--shadow-glow)]"
              >
                <Link to="/projects">
                  View Projects <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">
                  <Mail className="mr-1 h-4 w-4" /> Contact Me
                </Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" /> Pusing, Perak, Malaysia
            </div>
          </div>
          <div className="relative justify-self-center">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/40 to-primary-glow/20 blur-2xl" />
            <img
              src={avatar}
              alt="Farid Asnawi"
              width={320}
              height={320}
              className="relative w-64 sm:w-80 rounded-full border-4 border-primary/30 bg-card"
            />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-3 gap-6">
        {[
          { num: "2+", label: "Years in IT" },
          { num: "3", label: "Professional Roles" },
          { num: "10+", label: "Skills & Tools" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-xl bg-card border border-border p-6 text-center shadow-[var(--shadow-card)]"
          >
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              {s.num}
            </div>
            <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </section>
    </div>
  );
}
