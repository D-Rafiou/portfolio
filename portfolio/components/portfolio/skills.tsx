import React from "react"
import { Brain, BarChart3, Shield, Code, Wrench } from "lucide-react"

interface SkillCategory {
  icon: React.ElementType
  title: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    icon: Brain,
    title: "Machine Learning & AI",
    skills: [
      "PyTorch, Scikit-Learn",
      "Deep Learning (CNNs, LSTM, Transformers)",
      "Natural Language Processing (NLP)",
      "Retrieval-Augmented Generation (RAG)",
      "Model Interpretability (SHAP, Grad-CAM)",
      "Hyperparameter Optimization (Optuna)",
      "Representation Learning & Embeddings",
      "Semi-supervised & Unsupervised Learning",
    ],
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    skills: [
      "Pandas, NumPy, Matplotlib",
      "Data Preprocessing & Feature Engineering",
      "Exploratory Data Analysis (EDA)",
      "Large-scale dataset handling",
      "Class imbalance handling & resampling",
      "Statistical aggregation & optimization",
    ],
  },
  {
    icon: Shield,
    title: "Cybersecurity & GRC",
    skills: [
      "Vulnerability Management",
      "Network Security & Intrusion Detection",
      "Governance, Risk & Compliance (GRC)",
      "WAF Operations & Traffic Analysis",
      "DNS / SPF / Email Security",
      "Threat Modeling & Security Awareness",
      "Zero-day & anomaly-based detection",
    ],
  },
  {
    icon: Code,
    title: "Software Engineering",
    skills: [
      "Python, JavaScript, SQL",
      "React, Node.js, FastAPI",
      "REST APIs & Backend Systems",
      "Automation & Scripting (Python, PowerShell)",
      "Git, Agile Development",
      "System Design & Documentation",
      "Performance Optimization",
    ],
  },
  {
    icon: Wrench,
    title: "Security & Dev Tooling",
    skills: [
      "Tenable Nessus, Qualys",
      "Microsoft Defender",
      "FAISS, LangChain",
      "Jira, Bitwarden",
      "Linux / CLI workflows",
    ],
  },
]

export function Skills() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-3 mb-20 text-center flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Skills & Tooling
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Technical expertise across machine learning, cybersecurity, and software engineering.
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
