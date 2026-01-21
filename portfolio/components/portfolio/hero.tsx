"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, ArrowDown } from "lucide-react"

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary/10" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="space-y-6 sm:space-y-8">
          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight text-balance">
            Rafiou Diallo
          </h1>

          {/* Title */}
          <div className="space-y-2">
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-primary">
              Machine Learning & Cybersecurity
            </p>
            <p className="text-sm sm:text-base text-muted-foreground font-mono tracking-wide">
              Applied AI · CyberSecurity · Interpretable ML
            </p>
          </div>

          {/* Tagline */}
          <p className="max-w-2xl mx-auto text-muted-foreground text-base sm:text-lg leading-relaxed text-pretty">
            Machine Learning & Cybersecurity Enthusiast specializing in Applied AI, Security, and
            Interpretable ML. I build intelligent systems at the intersection of machine learning,
            cybersecurity, and real-world deployment with a focus on robustness, interpretability,
            and scale.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="group bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
            >
              View Projects
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="bg-transparent border-border hover:border-primary/40 hover:bg-primary/5"
            >
              <a
                href="https://github.com/D-Rafiou"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="bg-transparent border-border hover:border-primary/40 hover:bg-primary/5"
            >
              <a
                href="https://www.linkedin.com/in/rafiou-diallo-004522260/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator (hidden on mobile) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
          <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
            <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
