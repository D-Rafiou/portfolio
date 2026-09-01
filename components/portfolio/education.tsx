import { GraduationCap } from "lucide-react"

export function Education() {
  return (
    <section className="py-28 px-6 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-3 mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Education
          </h2>
        </div>
        
        <div className="rounded-xl border border-border/50 bg-card/30 p-8 max-w-2xl transition-all duration-300 hover:border-border hover:bg-card/50">
          <div className="flex items-start gap-5">
            <div className="rounded-xl bg-primary/10 p-4 shrink-0">
              <GraduationCap className="h-7 w-7 text-primary" />
            </div>
            
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-foreground">
                Carleton University
              </h3>
              <p className="text-primary font-medium text-lg">
                B.C.S. Honors Computer Science
              </p>
              <div className="text-sm text-muted-foreground space-y-1.5">
                <p>Minor in Mathematics</p>
                <p>GPA: 3.5</p>
                <p className="font-mono text-xs text-muted-foreground/70">Expected Graduation: 2027</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
