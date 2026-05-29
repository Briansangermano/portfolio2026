"use client"

import Image from "next/image"
import ScrollReveal from "@/components/ui/ScrollReveal"
import { portfolioData } from "@/data/portfolio"

export default function About() {
  const { summary, name } = portfolioData

  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <span className="text-xs font-medium uppercase tracking-widest bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            About
          </span>
        </ScrollReveal>

        <div className="mt-8 grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                Turning complex problems into
                <br />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">clean, functional code</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 leading-relaxed text-zinc-400">{summary}</p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="mt-4 leading-relaxed text-zinc-500">
                With over 6 years of experience across startups and enterprises, I specialize in
                building frontend architectures that scale. From high-traffic ticketing platforms to
                e-commerce solutions, I bring a performance-first mindset and a commitment to clean
                code.
              </p>
            </ScrollReveal>
          </div>

          <div className="md:col-span-2">
            <ScrollReveal delay={0.2}>
              <div className="relative mx-auto w-72 sm:w-80">
                <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-b from-indigo-500/30 via-purple-500/20 to-pink-500/20 blur-xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#050505] shadow-2xl shadow-indigo-500/10 aspect-[2/3]">
                  <Image
                    src="/images/perfil-brian.png"
                    alt={name}
                    fill
                    className="object-cover object-[120%_20%]"
                    style={{ transform: "scale(1.15) scaleX(-1)" }}
                    sizes="(max-width: 640px) 288px, 320px"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#050505] to-transparent" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="section-number">02</div>
    </section>
  )
}
