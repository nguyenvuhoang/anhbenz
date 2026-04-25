import { AboutSection } from './about-section'
import { ContactSection } from './contact-section'
import { ExperienceSection } from './experience-section'
import { HeroSection } from './hero-section'
import { ProjectsSection } from './projects-section'
import { ServicesSection } from './services-section'
import { SiteHeader } from './site-header'
import { SkillsSection } from './skills-section'

export function PortfolioPage() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ServicesSection />
      <ContactSection />
    </main>
  )
}
