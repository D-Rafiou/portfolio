"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react"

interface OtherProject {
  title: string
  description: string
  github: string
}

const otherProjects: OtherProject[] = [
  {
    title: "Unsupervised Anomaly Detection (UNSW-NB15)",
    description: "Clustering-based anomaly detection on network traffic dataset",
    github: "https://github.com/D-Rafiou/Unsupervised-Anomaly-Detection-on-UNSW-NB15-Using-PCA-GMM-and-Isolation-Forest",
  },
  {
    title: "Patent Law Assistant (RAG + NLP)",
    description: "Legal documents retrieval system with natural language queries",
    github: "https://github.com/D-Rafiou/Patent-Assistant-chatbot",
  },
  {
    title: "Attest (Document Automation)",
    description: "Enterprise document workflow automation for Société Générale",
    github: "https://github.com/D-Rafiou/Attest",
  },
  {
    title: "Gestion Garanties",
    description: "Banking guarantee management system with audit logging",
    github: "https://github.com/D-Rafiou/GestGaranties",
  },
  {
    title: "Musishare",
    description: "Real-time chat and music sharing application",
    github: "https://github.com/D-Rafiou/Musishare",
  },
]

export function OtherProjects() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => setIsExpanded(!isExpanded)}
          className="mb-8 text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-300"
        >
          {isExpanded ? (
            <>
              Hide other projects
              <ChevronUp className="ml-2 h-4 w-4" />
            </>
          ) : (
            <>
              Show more projects
              <ChevronDown className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
        
        {isExpanded && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-in fade-in slide-in-from-top-4 duration-500">
            {otherProjects.map((project, index) => (
              <a
                key={index}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border border-border/50 bg-card/20 p-5 transition-all duration-300 hover:border-primary/30 hover:bg-card/40 hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-2">
                    <h3 className="font-medium text-sm text-foreground/90 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <ExternalLink className="h-3.5 w-3.5 text-muted-foreground/50 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
