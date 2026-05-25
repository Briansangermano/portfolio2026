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
              <div className="relative">
                <div className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_20px_rgba(99,102,241,0.08),0_0_40px_rgba(168,85,247,0.04)]">
                  <Image
                    src="/images/hero-photo.png"
                    alt={name}
                    width={400}
                    height={500}
                    className="h-full w-full object-cover object-[50%_15%] transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="absolute -right-4 -top-4 h-full w-full rounded-2xl border border-indigo-500/15 shadow-[0_0_25px_rgba(99,102,241,0.1),0_0_50px_rgba(168,85,247,0.05)]" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="section-number">02</div>
    </section>
  )
}
