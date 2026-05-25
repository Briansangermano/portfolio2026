"use client"

import { type MouseEvent, useRef } from "react"
import Image from "next/image"
import ScrollReveal from "@/components/ui/ScrollReveal"
import { portfolioData } from "@/data/portfolio"

function ProjectCard({
  name,
  description,
  technologies,
  image,
  url,
}: {
  name: string
  description: string
  technologies: string[]
  image: string
  url?: string
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 12
    const rotateY = (centerX - x) / 12
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
  }

  function handleMouseLeave() {
    const card = cardRef.current
    if (!card) return
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
  }

  function handleCardClick() {
    if (url) window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div
      ref={cardRef}
      onClick={handleCardClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 ease-out will-change-transform hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-[0_0_25px_rgba(99,102,241,0.12),0_0_60px_rgba(168,85,247,0.08)] ${url ? "cursor-pointer" : ""}`}
      role={url ? "link" : undefined}
      tabIndex={url ? 0 : undefined}
      onKeyDown={url ? (e) => { if (e.key === "Enter") handleCardClick() } : undefined}
    >
      <div className="relative mb-4 aspect-video overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <h3 className="text-lg font-semibold text-white">{name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{description}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {technologies.slice(0, 6).map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-indigo-500/10 px-2 py-0.5 text-[10px] text-indigo-300"
          >
            {tech}
          </span>
        ))}
        {technologies.length > 6 && (
          <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-[10px] text-zinc-500">
            +{technologies.length - 6}
          </span>
        )}
      </div>

      {url && (
        <span className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-indigo-500/30 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 px-3 py-1.5 text-xs font-semibold text-indigo-300 transition-all duration-300 hover:border-indigo-400/50 hover:from-indigo-500/20 hover:to-purple-500/20 hover:text-indigo-200 hover:shadow-[0_0_12px_rgba(99,102,241,0.15),0_0_24px_rgba(168,85,247,0.1)]">
          View Website
          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </span>
      )}
    </div>
  )
}

export default function Projects() {
  const { projects } = portfolioData

  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <span className="text-xs font-medium uppercase tracking-widest bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Featured <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">work</span>
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ScrollReveal key={project.name} delay={0.1 * i}>
              <ProjectCard {...project} />
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="section-number">05</div>
    </section>
  )
}
