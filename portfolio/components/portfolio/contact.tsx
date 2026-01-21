import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin } from "lucide-react"

export function Contact() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
              {"Let's Connect"}
            </h2>
            <p className="text-muted-foreground text-lg">
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 bg-transparent"
            >
              <a href="mailto:rafioudiallo@cunet.carleton.ca">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
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
      </div>
    </section>
  )
}
