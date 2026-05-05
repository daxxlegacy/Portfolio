import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Award, Briefcase } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Farid Asnawi" },
      {
        name: "description",
        content: "Learn about Farid Asnawi — ICT graduate, IT professional, and web developer based in Malaysia.",
      },
    ],
  }),
  component: About,
});

const experience = [
  {
    role: "Business Operation Officer",
    company: "Vanquish Capital Sdn Bhd",
    period: "May 2025 — Present",
    points: [
      "Managed locker assignments, inventory, audits, repairs, and compliance.",
      "Issued keys/access cards and handled lost key replacements.",
      "Reviewed and processed employee medical claims via Mednefits.",
    ],
  },
  {
    role: "IT Assistant — LCS Project Team",
    company: "Kemalak Marine Sdn. Bhd.",
    period: "Jul 2024 — Feb 2025",
    points: [
      "Supported electrical inspections and FAT documentation.",
      "Assisted TLDM officers during ship inspections.",
      "Managed IT infrastructure including servers, storage, and networks.",
    ],
  },
  {
    role: "Software Testing Assistant — API Support",
    company: "EPF (KWSP)",
    period: "Mar 2023 — Aug 2023",
    points: [
      "Developed and executed API test scripts using Postman.",
      "Documented system issues and collaborated with developers.",
      "Performed API validation, functionality, and performance testing.",
    ],
  },
];

function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl sm:text-5xl font-bold">
        About <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Me</span>
      </h1>
      <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
        I'm a motivated and adaptable ICT graduate with hands-on experience in software testing, IT infrastructure
        support, documentation, and troubleshooting. I'm a strong team collaborator with solid technical knowledge —
        dedicated to continuous learning and delivering value to organizational objectives.
      </p>

      <div className="mt-12 grid sm:grid-cols-2 gap-6">
        <div className="rounded-xl bg-card border border-border p-6 shadow-[var(--shadow-card)]">
          <GraduationCap className="h-8 w-8 text-primary mb-3" />
          <h2 className="font-semibold text-lg">Education</h2>
          <div className="mt-3 space-y-3 text-sm">
            <div>
              <div className="font-medium">Bachelor of ICT (Hons)</div>
              <div className="text-muted-foreground">Management and Science University · 2019 – 2023</div>
            </div>
            <div>
              <div className="font-medium">Diploma in Computer Engineering</div>
              <div className="text-muted-foreground">Management and Science University · 2014 – 2018</div>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-card border border-border p-6 shadow-[var(--shadow-card)]">
          <Award className="h-8 w-8 text-primary mb-3" />
          <h2 className="font-semibold text-lg">Achievements</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc list-inside">
            <li>Represented MSU in Mahasiswa Badminton Competition (2020)</li>
            <li>Runner-up, Badminton Sports United Championship (2019)</li>
            <li>1st Place, Innovation Competition (2013)</li>
          </ul>
        </div>
      </div>

      <h2 className="mt-16 text-2xl font-bold flex items-center gap-2">
        <Briefcase className="h-6 w-6 text-primary" /> Experience
      </h2>
      <div className="mt-6 relative border-l-2 border-border pl-6 space-y-8">
        {experience.map((e) => (
          <div key={e.role} className="relative">
            <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-primary-glow shadow-[var(--shadow-glow)]" />
            <div className="text-xs text-primary font-medium">{e.period}</div>
            <div className="text-lg font-semibold mt-1">{e.role}</div>
            <div className="text-sm text-muted-foreground">{e.company}</div>
            <ul className="mt-2 text-sm text-muted-foreground list-disc list-inside space-y-1">
              {e.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
