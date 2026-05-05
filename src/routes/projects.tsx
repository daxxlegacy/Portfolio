import { createFileRoute } from "@tanstack/react-router";
import { Ship, ShieldCheck, Bug, Boxes, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Farid Asnawi" },
      {
        name: "description",
        content:
          "Selected projects: LCS Naval IT support, EPF API testing, business operations, and web development work.",
      },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    icon: Ship,
    title: "Littoral Combat Ship (LCS) — IT Support",
    org: "Kemalak Marine · Royal Malaysian Navy project",
    tags: ["IT Infrastructure", "Networking", "Documentation"],
    desc: "Provided full IT infrastructure support for the LCS naval project — managing servers, storage, and networks, while supporting electrical inspections and FAT documentation alongside TLDM officers during ship inspections.",
  },
  {
    icon: Bug,
    title: "EPF API Testing & Validation",
    org: "Employees Provident Fund (KWSP)",
    tags: ["Postman", "API Testing", "QA"],
    desc: "Developed and executed automated API test scripts in Postman, performed validation, functionality, and performance testing, and documented system issues in collaboration with the development team.",
  },
  {
    icon: Boxes,
    title: "Locker & Inventory Management System",
    org: "Vanquish Capital",
    tags: ["Operations", "Compliance", "Records"],
    desc: "Built and maintained processes for locker assignment, inventory audits, key/access card issuance, and lost-key handling — ensuring compliance and operational continuity.",
  },
  {
    icon: ShieldCheck,
    title: "Mednefits Medical Claims Processing",
    org: "Vanquish Capital",
    tags: ["Process Compliance", "Confidentiality"],
    desc: "Reviewed and processed employee medical claims via the Mednefits platform with strict adherence to policy compliance and data confidentiality.",
  },
];

function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl sm:text-5xl font-bold">
        Featured{" "}
        <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Projects</span>
      </h1>
      <p className="mt-4 text-muted-foreground max-w-2xl">
        Real work from professional roles — spanning IT infrastructure, software QA, and operational systems.
      </p>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group relative rounded-2xl bg-card border border-border p-7 overflow-hidden hover:border-primary/50 transition-all shadow-[var(--shadow-card)]"
          >
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-2xl" />
            <div className="relative">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-4">
                <p.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <div className="text-sm text-primary mt-1">{p.org}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-dashed border-border p-8 text-center">
        <p className="text-muted-foreground">More web development projects coming soon.</p>
      </div>
    </div>
  );
}
