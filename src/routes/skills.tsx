import { createFileRoute } from "@tanstack/react-router";
import { Monitor, HardDrive, FileSpreadsheet, Wifi, Code, Database, Bug, Server } from "lucide-react";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Farid Asnawi" },
      {
        name: "description",
        content:
          "Technical skills: Windows installation, troubleshooting, MS Office 365, remote support, and web development.",
      },
    ],
  }),
  component: Skills,
});

const coreSkills = [
  {
    icon: Monitor,
    title: "Windows Installation & Troubleshooting",
    desc: "Clean OS installs, driver setup, BSOD diagnosis, system recovery, and performance tuning.",
  },
  {
    icon: HardDrive,
    title: "PC Formatting",
    desc: "Drive partitioning, secure data wipe, fresh OS deployment, and hardware optimization.",
  },
  {
    icon: FileSpreadsheet,
    title: "Microsoft Office / 365",
    desc: "Word, Excel, PowerPoint, Outlook, Teams — admin setup, mail config, and user training.",
  },
  {
    icon: Wifi,
    title: "Remote Support Tools",
    desc: "AnyDesk and TeamViewer for fast remote troubleshooting and end-user support.",
  },
];

const techSkills = [
  { icon: Code, label: "HTML / CSS / JavaScript" },
  { icon: Bug, label: "API Testing (Postman)" },
  { icon: Server, label: "IT Infrastructure" },
  { icon: Monitor, label: "Hardware Support" },
];

function Skills() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl sm:text-5xl font-bold">
        My <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Skills</span>
      </h1>
      <p className="mt-4 text-muted-foreground max-w-2xl">
        A blend of hands-on IT support skills and modern web development — built through real projects and professional
        experience.
      </p>

      <h2 className="mt-12 text-xl font-semibold">Core IT Support</h2>
      <div className="mt-6 grid sm:grid-cols-2 gap-5">
        {coreSkills.map((s) => (
          <div
            key={s.title}
            className="group rounded-xl bg-card border border-border p-6 hover:border-primary/50 transition-all shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)]"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary-glow/20 border border-primary/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-16 text-xl font-semibold">Tools & Technologies</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        {techSkills.map((t) => (
          <div
            key={t.label}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:border-primary/50 transition-colors"
          >
            <t.icon className="h-4 w-4 text-primary" />
            <span className="text-sm">{t.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
