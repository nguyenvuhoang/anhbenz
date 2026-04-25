import { FiCheckCircle } from 'react-icons/fi'
import { profile, strengths } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'
import { SectionOrbits } from './section-orbits'

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-10">
      <SectionOrbits align="right" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="About"
          title="Calm engineering for complex financial systems."
          description={profile.bio}
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {strengths.map((strength) => (
            <div
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-slate-950/30 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-200/30"
              key={strength}
            >
              <FiCheckCircle className="mb-5 h-6 w-6 text-cyan-300" aria-hidden="true" />
              <h3 className="text-lg font-semibold text-white">{strength}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Practical product judgment, clear communication, and implementation
                discipline for systems that need to age well.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
