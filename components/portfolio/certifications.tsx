import { Award } from "lucide-react"

interface Certification {
  name: string
  issuer: string
  details: string
  skills: string
}

const certifications: Certification[] = [
  {
    name: "Burp Suite Certified Practitioner",
    issuer: "PortSwigger",
    details: "Issued Aug 2026 · Expires Aug 2032",
    skills: "Web Application Security · Penetration Testing",
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    details: "Issued Mar 2026 · Expires Mar 2029",
    skills: "Network Security · Risk Management · Security Operations",
  },
  {
    name: "International Baccalaureate",
    issuer: "International Baccalaureate",
    details: "Issued May 2022",
    skills: "International Baccalaureate Diploma Programme",
  },
]

export function Certifications() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-3 mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Certifications
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Credentials supporting a practical foundation in offensive security, risk, and systems.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {certifications.map((certification) => (
            <article
              key={certification.name}
              className="rounded-xl border border-border/50 bg-card/30 p-6 transition-all duration-300 hover:border-border hover:bg-card/50"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-2.5 shrink-0">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground text-balance">
                      {certification.name}
                    </h3>
                    <p className="text-primary font-medium">{certification.issuer}</p>
                  </div>
                  <p className="text-sm text-muted-foreground font-mono">
                    {certification.details}
                  </p>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {certification.skills}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
