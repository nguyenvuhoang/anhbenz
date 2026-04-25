import Image from 'next/image'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { projects } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'
import { SectionOrbits } from './section-orbits'

export function ProjectsSection() {
  return (
    <section id="projects" className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-10">
      <SectionOrbits align="right" />
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Projects"
            title="Selected systems with a premium product layer."
            description="Placeholder case studies that are structured for quick replacement with production links, deeper metrics, and richer screenshots."
          />
          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-sky-300/35 bg-linear-to-r from-sky-500/30 via-blue-600/24 to-cyan-500/30 px-5 py-2.5 text-sm font-bold text-white transition hover:border-sky-200/70 hover:from-sky-400/40 hover:to-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Discuss a project
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/4 shadow-2xl shadow-slate-950/30 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-200/30"
              key={project.title}
            >
              <div className="relative aspect-16/11 overflow-hidden bg-slate-900">
                <Image
                  src={project.image}
                  alt={`${project.title} interface preview`}
                  fill
                  sizes="(min-width: 1024px) 30vw, 92vw"
                  className="object-contain p-5 opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/10 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      className="rounded-full bg-white/6 px-3 py-1 text-xs font-medium text-slate-300"
                      key={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <a
                    href={project.links.preview}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-300"
                  >
                    Live Preview
                    <FiArrowUpRight aria-hidden="true" />
                  </a>
                  <a
                    href={project.links.source}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-300"
                  >
                    <FiGithub aria-hidden="true" />
                    Source
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
