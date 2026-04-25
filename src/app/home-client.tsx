'use client'

import Image from 'next/image'
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import profileImage from '@/assets/images/about/ben.png'

const trustDomains = ['Banking', 'Microfinance', 'Core Systems', 'OpenAPI']

const experience = [
  {
    period: '2016 - Present',
    role: 'Software Developer',
    company: 'JUST-IN-TIME SOLUTIONS',
    summary:
      'Senior developer and deputy head of deployment for banking solutions, major Cambodia market projects, and Microfinance clients.',
  },
  {
    period: '2014 - 2016',
    role: 'Software Developer',
    company: 'FPT Software.',
    summary: 'Designed and developed Autosar-based embedded software components.',
  },
]

const projects = [
  {
    name: 'Core Banking Platform Delivery',
    role: 'Senior Developer / Deployment Lead',
    description:
      'Implementation and delivery support for banking operations, product rollout, and client-facing deployment.',
    stack: ['Core Banking', 'Oracle', 'Java', 'OpenAPI'],
  },
  {
    name: 'Microfinance Market Projects',
    role: 'Project Management',
    description:
      'Major Cambodia market initiatives for Microfinance clients with banking solution consulting and delivery coordination.',
    stack: ['Microfinance', 'Banking Systems', 'Client Delivery'],
  },
  {
    name: 'Digital Service Consulting',
    role: 'Solution Consultant',
    description:
      'Delivery models focused on automation, artificial intelligence, machine learning, agile, and DevOps.',
    stack: ['Automation', 'AI', 'Machine Learning', 'DevOps'],
  },
  {
    name: 'Developer Portfolio',
    role: 'Personal Brand',
    description:
      'A focused personal website for fintech engineering credibility, project context, and professional contact.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  },
]

const skillGroups = [
  { title: 'Frontend', skills: ['React', 'Next.js', 'Web Design', 'UI/UX'] },
  { title: 'Backend', skills: ['Java', 'Oracle', 'Core Banking', 'OpenAPI'] },
  { title: 'Mobile', skills: ['Mobile App', 'Responsive Interfaces'] },
  { title: 'DevOps', skills: ['Agile', 'DevOps', 'Deployment', 'Delivery Management'] },
  { title: 'AI', skills: ['Artificial Intelligence', 'Machine Learning', 'Automation'] },
]

const contacts = [
  {
    label: 'Email',
    value: 'nguyenvuhoangz@gmail.com',
    href: 'mailto:nguyenvuhoangz@gmail.com',
    icon: FiMail,
  },
  {
    label: 'GitHub',
    value: 'github.com/nguyenvuhoang',
    href: 'https://github.com/nguyenvuhoang/',
    icon: FiGithub,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/anhben',
    href: 'https://www.linkedin.com/in/anhben/',
    icon: FiLinkedin,
  },
]

const sectionClass =
  'border-b border-white/10 py-20 sm:py-24 lg:py-28'
const containerClass = 'mx-auto w-full max-w-6xl px-5 sm:px-8'
const eyebrowClass =
  'text-xs font-bold uppercase tracking-normal text-cyan-200/70'
const headingClass =
  'mt-3 max-w-xl text-3xl font-bold leading-tight tracking-normal text-slate-50 sm:text-4xl lg:text-5xl'
const tagClass =
  'rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-slate-300'

function SectionHeader({
  eyebrow,
  id,
  title,
}: {
  eyebrow: string
  id: string
  title: string
}) {
  return (
    <div>
      <p className={eyebrowClass}>{eyebrow}</p>
      <h2 id={id} className={headingClass}>
        {title}
      </h2>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-40">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_0%,rgba(34,211,238,0.18),transparent_34rem)]" />
      <div className={`${containerClass} grid items-center gap-12 lg:grid-cols-[1fr_420px] lg:gap-20`}>
        <div>
          <p className={eyebrowClass}>Nguyen Vu Hoang (BEN)</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Senior fintech engineer building banking systems.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Senior developer working in fintech, banking systems, and microfinance
            with experience across core systems, deployment, and client delivery.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex h-11 items-center justify-center rounded-lg bg-slate-50 px-5 text-sm font-bold text-slate-950 transition hover:bg-white focus-visible:outline-[3px] focus-visible:outline-offset-3 focus-visible:outline-cyan-200/60"
              href="#projects"
            >
              View Work
            </a>
            <a
              className="inline-flex h-11 items-center justify-center rounded-lg border border-white/15 bg-white/[0.03] px-5 text-sm font-bold text-slate-100 transition hover:border-cyan-200/50 hover:bg-white/[0.06] focus-visible:outline-[3px] focus-visible:outline-offset-3 focus-visible:outline-cyan-200/60"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="max-w-[420px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]">
          <Image
            src={profileImage}
            alt="Nguyen Vu Hoang (BEN)"
            width={520}
            height={620}
            priority
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  )
}

function TrustStrip() {
  return (
    <section className="border-y border-white/10 bg-white/[0.015]" aria-label="Domains">
      <div className={containerClass}>
        <ul className="grid grid-cols-2 gap-px py-4 sm:grid-cols-4">
          {trustDomains.map((domain) => (
            <li className="py-3 text-sm font-bold text-slate-200" key={domain}>
              {domain}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className={sectionClass} id="about" aria-labelledby="about-title">
      <div className={`${containerClass} grid gap-10 lg:grid-cols-[0.4fr_1fr] lg:gap-20`}>
        <SectionHeader
          eyebrow="About"
          id="about-title"
          title="Fintech delivery with engineering depth."
        />
        <div className="grid gap-5 text-base leading-8 text-slate-300">
          <p>
            BEN is a senior developer at JUST-IN-TIME SOLUTIONS, a company
            specializing in banking solutions. He has participated in many company
            projects and has over 7 years of experience in banking solution
            consulting.
          </p>
          <p>
            He is in charge of project management for major projects in Cambodia,
            collaborating with clients in the field of Microfinance.
          </p>
        </div>
      </div>
    </section>
  )
}

function ExperienceSection() {
  return (
    <section className={sectionClass} id="experience" aria-labelledby="experience-title">
      <div className={`${containerClass} grid gap-10 lg:grid-cols-[0.4fr_1fr] lg:gap-20`}>
        <SectionHeader
          eyebrow="Experience"
          id="experience-title"
          title="Focused on banking delivery."
        />
        <div className="relative grid gap-0 pl-6 before:absolute before:top-2 before:bottom-2 before:left-1 before:w-px before:bg-white/15">
          {experience.map((item) => (
            <article
              className="relative grid gap-2 pb-10 last:pb-0 sm:grid-cols-[130px_1fr] sm:gap-8 before:absolute before:top-1.5 before:-left-6 before:h-2.5 before:w-2.5 before:rounded-full before:bg-cyan-200/80 before:ring-6 before:ring-cyan-200/10"
              key={`${item.company}-${item.period}`}
            >
              <p className="text-xs font-bold uppercase tracking-normal text-cyan-200/70">
                {item.period}
              </p>
              <div>
                <h3 className="text-xl font-bold text-slate-50">{item.role}</h3>
                <p className="mt-1 font-semibold text-slate-200">{item.company}</p>
                <p className="mt-3 leading-8 text-slate-300">{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  return (
    <section className={sectionClass} id="projects" aria-labelledby="projects-title">
      <div className={containerClass}>
        <SectionHeader
          eyebrow="Projects"
          id="projects-title"
          title="Selected work and operating context."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article
              className="flex min-h-72 flex-col rounded-2xl border border-white/10 bg-white/[0.028] p-6"
              key={project.name}
            >
              <p className="text-xs font-bold uppercase tracking-normal text-cyan-200/70">
                {project.role}
              </p>
              <h3 className="mt-3 text-xl font-bold leading-snug text-slate-50">
                {project.name}
              </h3>
              <p className="mt-4 leading-8 text-slate-300">{project.description}</p>
              <ul className="mt-auto flex flex-wrap gap-2 pt-8">
                {project.stack.map((tech) => (
                  <li className={tagClass} key={tech}>
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillsSection() {
  return (
    <section className={sectionClass} id="skills" aria-labelledby="skills-title">
      <div className={`${containerClass} grid gap-10 lg:grid-cols-[0.4fr_1fr] lg:gap-20`}>
        <SectionHeader
          eyebrow="Skills"
          id="skills-title"
          title="Practical stack for financial products."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <article className="rounded-2xl border border-white/10 bg-white/[0.028] p-5" key={group.title}>
              <h3 className="text-lg font-bold text-slate-50">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li className={tagClass} key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28" id="contact" aria-labelledby="contact-title">
      <div className={containerClass}>
        <SectionHeader eyebrow="Contact" id="contact-title" title="Simple ways to reach BEN." />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {contacts.map((contact) => {
            const Icon = contact.icon

            return (
              <a
                className="grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.028] p-5 text-slate-300 transition hover:border-cyan-200/50 hover:bg-white/[0.045] focus-visible:outline-[3px] focus-visible:outline-offset-3 focus-visible:outline-cyan-200/60"
                href={contact.href}
                key={contact.label}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <Icon aria-hidden="true" className="h-5 w-5 text-cyan-200/75" />
                <span className="min-w-0 text-sm leading-5 text-slate-400">
                  <strong className="block text-base text-slate-50">{contact.label}</strong>
                  {contact.value}
                </span>
                <FiArrowUpRight aria-hidden="true" className="h-4 w-4 text-cyan-200/75" />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default function HomeClient() {
  return (
    <main className="min-h-screen overflow-hidden bg-[linear-gradient(180deg,#080d14_0%,#0a0f18_42%,#05080d_100%)] text-slate-100">
      <HeroSection />
      <TrustStrip />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  )
}
