import React from "react"
import { Brain, BarChart3, Shield, Code, Wrench } from "lucide-react"

interface SkillCategory {
  icon: React.ElementType
  title: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    icon: Shield,
    title: "Security Consulting",
    skills: [
      "Security assessments & client advisory",
      "Risk management & remediation planning",
      "Governance, Risk & Compliance (GRC)",
      "Threat modeling & security awareness",
      "Vulnerability management programs",
      "Technical reporting & stakeholder communication",
    ],
  },
  {
    icon: Wrench,
    title: "Web Application Security",
    skills: [
      "Web application security testing",
      "Burp Suite & OWASP methodology",
      "Penetration testing & vulnerability validation",
      "Authentication, authorization & access control",
      "API security & input validation",
      "Security findings, evidence & remediation guidance",
    ],
  },
  {
    icon: Code,
    title: "Security & Dev Tooling",
    skills: [
      "Kali Linux & Linux / CLI workflows",
      "Tenable Nessus, Qualys",
      "Microsoft Defender",
      "Burp Suite, Nmap & Wireshark",
      "Python, PowerShell & Bash automation",
      "Jira, Git & technical documentation",
    ],
  },
  {
    icon: Brain,
    title: "Machine Learning & AI",
    skills: [
      "PyTorch, Scikit-Learn",
      "Deep Learning (CNNs, LSTM, Transformers)",
      "Natural Language Processing (NLP)",
      "Retrieval-Augmented Generation (RAG)",
      "Model Interpretability (SHAP, Grad-CAM)",
      "Representation Learning & Embeddings",
    ],
  },
  {
    icon: BarChart3,
    title: "Data & Software Engineering",
    skills: [
      "Python, JavaScript, SQL",
      "React, Node.js, FastAPI",
      "REST APIs & backend systems",
      "Pandas, NumPy & data preprocessing",
      "System design & performance optimization",
      "Git, Agile development & documentation",
    ],
  },
]

export function Skills() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-3 mb-20">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Skills & Tooling
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Security consulting capabilities grounded in practical testing, clear communication, and actionable remediation.
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div 
                key={index}
                className="rounded-xl border border-border/50 bg-card/30 p-6 transition-all duration-300 hover:border-border hover:bg-card/50"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="rounded-lg bg-primary/10 p-2.5">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                </div>
                
                <ul className="space-y-2.5">
                  {category.skills.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex}
                      className="text-sm text-muted-foreground leading-relaxed"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
