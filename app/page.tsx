import { Hero } from "@/components/portfolio/hero"
import { FeaturedProjects } from "@/components/portfolio/featured-projects"
import { OtherProjects } from "@/components/portfolio/other-projects"
import { Experience } from "@/components/portfolio/experience"
import { Skills } from "@/components/portfolio/skills"
import { Education } from "@/components/portfolio/education"
import { Certifications } from "@/components/portfolio/certifications"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <FeaturedProjects />
      <OtherProjects />
      <Experience />
      <Skills />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}
