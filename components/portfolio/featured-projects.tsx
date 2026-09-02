"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import {
  RAGPipelineDiagram,
  GradCAMVisualization,
  NIDSPipelineDiagram,
  AnomalyTimelineVisualization,
} from "./project-visuals"
import type { ReactNode } from "react"

interface Project {
  title: string
  impact: string
  bullets: string[]
  tech: string[]
  visual: ReactNode
  github: string
}

const featuredProjects: Project[] = [
  {
    title: "NIST Cybersecurity Q&A System (RAG)",
    impact: "Retrieval-Augmented Generation system delivering grounded cybersecurity guidance from official NIST publications.",
    bullets: [
      "Built end-to-end RAG pipeline using Mistral-7B-Instruct, LangChain, and FAISS",
      "Implemented 4-bit quantization for memory-efficient inference (~4GB VRAM)",
      "Engineered recursive PDF scraping and validation for NIST SP 1800 documents",
      "Generated semantic embeddings with Sentence Transformers for sub-100ms retrieval",
      "Enabled automatic source attribution for every answer",
    ],
    tech: ["Python", "LangChain", "FAISS", "Mistral", "NLP", "Web Scraping"],
    visual: <RAGPipelineDiagram />,
    github: "https://github.com/D-Rafiou/Cybersecurity-Chatbot-NIST-RAG-System-",
  },
  {
    title: "Malware Image Classification using CNNs",
    impact: "Interpretable deep learning system for malware family classification from raw binaries.",
    bullets: [
      "Converted malware binaries into 128x128 RGB images",
      "Designed custom CNNs and fine-tuned ResNet50, achieving 98.4% test accuracy",
      "Optimized architectures with Optuna",
      "Implemented Grad-CAM for per-family interpretability",
      "Built misclassification analysis pipeline for edge-case discovery",
    ],
    tech: ["PyTorch", "CNNs", "ResNet50", "Optuna", "Grad-CAM"],
    visual: <GradCAMVisualization />,
    github: "https://github.com/D-Rafiou/MalwareVision",
  },
  {
    title: "ML Network Intrusion Detection (CICIDS2017)",
    impact: "Production-scale ML system detecting real-world network attacks across millions of flows.",
    bullets: [
      "Processed 2.2M+ network flows across 10 attack categories",
      "Achieved 98% macro-F1, 99% recall on Bot attacks",
      "Addressed extreme class imbalance with targeted resampling",
      "Optimized LightGBM across 40+ configurations",
      "Applied SHAP to reveal protocol-level attack signatures",
    ],
    tech: ["Python", "LightGBM", "SHAP", "Pandas", "Network Security"],
    visual: <NIDSPipelineDiagram />,
    github: "https://github.com/D-Rafiou/Network-Intrusion-Detection-CICIDS2017",
  },
  {
    title: "Semi-Supervised Anomaly Detection in System Logs",
    impact: "Sequence-based anomaly detection system for large-scale distributed logs.",
    bullets: [
      "Built LSTM next-event prediction model using PyTorch",
      "Learned normal execution patterns from unlabeled data",
      "Scaled analysis to millions of HDFS log lines",
      "Aggregated losses using p95 / max / mean for block-level detection",
      "Emphasized exploratory analysis over brittle classification",
    ],
    tech: ["PyTorch", "NLP", "LSTM", "Pandas", "NumPy"],
    visual: <AnomalyTimelineVisualization />,
    github: "https://github.com/D-Rafiou/semi-supervised-anomaly-detection-in-system-logs",
  },
]

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-3 mb-20">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Featured Projects
          </h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <article 
              key={index}
              className="group relative rounded-xl border border-border bg-card/40 p-6 transition-all duration-500 ease-out hover:border-primary/30 hover:bg-card/60 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Subtle gradient border glow on hover */}
              <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              
              <div className="space-y-5">
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  {project.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.impact}
                </p>
                
                {/* Project Visual */}
                <div className="overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-[1.02]">
                  {project.visual}
                </div>
                
                <ul className="space-y-2">
                  {project.bullets.map((bullet, bulletIndex) => (
                    <li 
                      key={bulletIndex}
                      className="flex items-start gap-3 text-sm text-foreground/75"
                    >
                      <span className="mt-2 h-1 w-1 rounded-full bg-primary/60 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="text-xs font-mono bg-secondary/60 text-secondary-foreground/80 border-0"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="group/btn -ml-2 text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                    <ExternalLink className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
