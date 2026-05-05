import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Farid Asnawi" },
      { name: "description", content: "Get in touch with Farid Asnawi for IT support, web development, or collaboration opportunities." },
    ],
  }),
  component: Contact,
});

const items = [
  { icon: Mail, label: "Email", value: "faridasnawi10@gmail.com", href: "mailto:faridasnawi10@gmail.com" },
  { icon: Phone, label: "Phone", value: "+60 11-3600 2703", href: "tel:+601136002703" },
  { icon: MapPin, label: "Location", value: "Pusing, Perak, Malaysia" },
];

function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl sm:text-5xl font-bold">Let's <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Connect</span></h1>
      <p className="mt-4 text-muted-foreground max-w-xl">Open to opportunities in IT support, software testing, and web development. Drop a message — I'd love to hear from you.</p>

      <div className="mt-12 grid sm:grid-cols-3 gap-5">
        {items.map((i) => {
          const inner = (
            <>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary-glow/20 border border-primary/30 flex items-center justify-center mb-4">
                <i.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{i.label}</div>
              <div className="mt-1 font-medium break-words">{i.value}</div>
            </>
          );
          return i.href ? (
            <a key={i.label} href={i.href} className="rounded-xl bg-card border border-border p-6 hover:border-primary/50 transition-all shadow-[var(--shadow-card)]">
              {inner}
            </a>
          ) : (
            <div key={i.label} className="rounded-xl bg-card border border-border p-6 shadow-[var(--shadow-card)]">{inner}</div>
          );
        })}
      </div>

      <div className="mt-12 rounded-2xl bg-gradient-to-br from-primary/10 to-primary-glow/5 border border-primary/30 p-8 text-center">
        <h2 className="text-2xl font-semibold">Ready to work together?</h2>
        <p className="mt-2 text-muted-foreground">Send me an email and I'll get back to you as soon as possible.</p>
        <Button asChild size="lg" className="mt-6 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:opacity-90 shadow-[var(--shadow-glow)]">
          <a href="mailto:faridasnawi10@gmail.com"><Mail className="mr-2 h-4 w-4" /> Email Me</a>
        </Button>
      </div>
    </div>
  );
}
