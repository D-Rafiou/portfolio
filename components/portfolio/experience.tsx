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
    company: "Packetlabs",
    role: "Associate Ethical Hacker · Co-op",
    period: "May 2026 – Aug 2026",
    location: "Ottawa, ON",
    bullets: [
      "Performed web application, infrastructure, and cloud retests to verify vulnerability remediation",
      "Conducted external penetration tests and vulnerability assessments for enterprise clients",
      "Ran OSINT-driven vishing, phishing, and pretexting campaigns to test security awareness",
      "Communicated findings with clients and delivered clear, client-ready penetration testing reports",
      "Helped standardize client-facing testing methodology documentation in a fast-paced consulting environment",
    ],
    tools: ["Burp Suite", "Penetration Testing", "OSINT", "Phishing", "Web Application Security", "Consulting", "Kali Linux", "Reporting"],
  },
  {
    company: "Carleton University",
    role: "Information Security Co-op",
    period: "Sep 2025 – Apr 2026",
    location: "Ottawa, ON · Hybrid",
    bullets: [
      "Conducted 100+ vulnerability assessments using Tenable Nessus and Qualys, prioritizing critical CVEs",
      "Built Python and PowerShell automation for compromised credential parsing, account lockout monitoring, and IP organization",
      "Designed Microsoft Defender phishing simulations for 30,000+ users, achieving a 5% compromise rate",
      "Reviewed WAF traffic, investigated DNS/SPF misconfigurations, and researched DDoS mitigation practices",
      "Modernized security awareness training and documented vulnerability management, phishing, WAF, and authentication procedures",
    ],
    tools: ["Nessus", "Qualys", "Defender", "Python", "PowerShell", "WAF", "Brightspace"],
  },
  {
    company: "myAIpathway.ORG",
    role: "Developer · Internship",
    period: "Feb 2025 – Sep 2025",
    location: "Ottawa, ON · Remote",
    bullets: [
      "Built full-stack web applications and automation scripts using Python, React, and Node.js",
      "Contributed to FRED, a platform connecting farmers with buyers to reduce food waste",
      "Worked in an agile team to plan features, test releases, improve performance, and maintain clean code with Git",
    ],
    tools: ["React", "Node.js", "Python", "Git", "Agile", "Automation"],
  },
  {
    company: "Société Générale",
    role: "Intern",
    period: "May 2024 – Jul 2024",
    location: "Conakry Region, Guinea · On-site",
    bullets: [
      "Supported network security operations by monitoring firewall configurations, antivirus software, and intrusion detection systems",
      "Built RESTful database management applications that reduced paper usage by 50% and improved document workflows by over 40%",
      "Implemented Chart.js visualizations, Axios data flows, and advanced search and filtering for banking documents",
      "Resolved technical issues to support 95% uptime and mentored junior interns",
    ],
    tools: ["JavaScript", "CakePHP", "HTML", "Chart.js", "Axios", "Network Security"],
  },
  {
    company: "The UPS Store",
    role: "Sales Assistant · Contract Part-time",
    period: "Sep 2023 – Mar 2024",
    location: "Ottawa, ON · On-site",
    bullets: [
      "Delivered customer service while protecting customer privacy and handling sensitive personal information",
      "Balanced competing customer needs, corporate policies, and daily operational responsibilities",
      "Collaborated with team members to keep store operations organized and responsive",
    ],
    tools: ["Customer Service", "Communication", "Organization", "Privacy"],
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
