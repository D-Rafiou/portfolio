"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, ArrowDown } from "lucide-react"

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      {/* Subtle dot grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* Very subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary/10" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-balance animate-in fade-in slide-in-from-bottom-4 duration-700">
            Rafiou Diallo
          </h1>
          
          {/* Title */}
          <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-primary">
              Cybersecurity & Machine Learning
            </p>
            <p className="text-base sm:text-lg text-muted-foreground font-mono tracking-wide">
              Security Consulting · Penetration Testing · Applied ML
            </p>
          </div>
          
          {/* Tagline */}
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg sm:text-xl leading-relaxed text-pretty animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            I secure and stress-test real-world systems, blending a background in machine learning and interpretability with hands-on penetration testing, and a strong interest in security consulting.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="group bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-md hover:shadow-primary/20"
            >
              View Projects
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 bg-transparent"
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
              className="border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 bg-transparent"
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
        
        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
            <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
