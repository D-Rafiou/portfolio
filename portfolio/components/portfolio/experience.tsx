import { Badge } from "@/components/ui/badge"

interface Experience {
  company: string
  role: string
  period: string
  location: string
  bullets: string[]
  tools: string[]
}

const experiences: Experience[] = [
  {
    company: "Carleton University",
    role: "Information Security Co-op",
    period: "Sep 2025 – Present",
    location: "Ottawa, ON",
    bullets: [
      "Conducted 50+ vulnerability assessments using Nessus & Qualys",
      "Automated compromised-credential intelligence parsing with Python",
      "Deployed phishing simulation to 30,000+ users",
      "Investigated DNS/SPF misconfigurations and supported WAF tuning",
      "Authored vulnerability management SOPs and governance documentation",
    ],
    tools: ["Nessus", "Qualys", "Defender", "Python", "PowerShell", "TCP/IP", "WAF"],
  },
  {
    company: "myAIpathway.org",
    role: "Software Developer Intern",
    period: "Feb 2025 – Sep 2025",
    location: "Remote",
    bullets: [
      "Built full-stack applications using React, Node.js, Python",
      "Contributed to FRED, a platform reducing food waste",
      "Worked in agile environment with Git-based workflows",
    ],
    tools: ["React", "Node.js", "Python", "Git", "Agile"],
  },
  {
    company: "Société Générale",
    role: "Software & Security Intern",
    period: "May 2024 – Jul 2024",
    location: "Guinea",
    bullets: [
      "Built production banking systems used in live operations",
      "Automated document workflows, reducing paper usage by 50%",
      "Implemented dashboards, audit logs, and REST APIs",
      "Supported network security operations and mentoring",
    ],
    tools: ["React", "Node.js", "REST APIs", "SQL", "Network Security"],
  },
]

export function Experience() {
  return (
    <section className="py-28 px-6 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-3 mb-20">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Professional experience in security operations, full-stack development, 
            and enterprise system engineering.
          </p>
        </div>
        
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <article 
              key={index}
              className="relative pl-8 pb-12 last:pb-0 border-l border-border/50 ml-4"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-primary/80 ring-4 ring-background" />
              
              {/* Connector line glow on current */}
              {index === 0 && (
                <div className="absolute left-0 top-1 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-primary animate-pulse" />
              )}
              
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.company}
                    </h3>
                    <p className="text-primary font-medium">
                      {exp.role}
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground font-mono shrink-0">
                    <span>{exp.period}</span>
                    <span className="mx-2 text-border">·</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, bulletIndex) => (
                    <li 
                      key={bulletIndex}
                      className="flex items-start gap-3 text-sm text-foreground/70"
                    >
                      <span className="mt-2 h-1 w-1 rounded-full bg-muted-foreground/50 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 pt-1">
                  {exp.tools.map((tool) => (
                    <Badge 
                      key={tool} 
                      variant="outline"
                      className="text-xs font-mono border-border/50 text-muted-foreground"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
