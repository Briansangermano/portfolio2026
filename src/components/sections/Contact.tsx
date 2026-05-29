"use client"

import MagneticButton from "@/components/ui/MagneticButton"
import ScrollReveal from "@/components/ui/ScrollReveal"
import { portfolioData } from "@/data/portfolio"

export default function Contact() {
  const { email, linkedin, cv } = portfolioData

  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <span className="text-xs font-medium uppercase tracking-widest bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Contact
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">work together</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-md text-zinc-400">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <MagneticButton
              href={`mailto:${email}`}
              className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-3 text-sm font-medium text-white shadow-[0_0_20px_rgba(99,102,241,0.3),0_0_40px_rgba(168,85,247,0.15)] transition-all duration-300 hover:from-indigo-600 hover:to-purple-700 hover:shadow-[0_0_30px_rgba(99,102,241,0.5),0_0_60px_rgba(168,85,247,0.25)]"
            >
              Contact Me
            </MagneticButton>
            <MagneticButton
              href={`https://${linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 bg-zinc-900 px-8 py-3 text-sm font-medium text-zinc-300 shadow-[0_0_15px_rgba(99,102,241,0.05),0_0_30px_rgba(168,85,247,0.03)] transition-all duration-300 hover:border-indigo-400/50 hover:text-white hover:shadow-[0_0_25px_rgba(99,102,241,0.15),0_0_50px_rgba(168,85,247,0.08)]"
            >
              LinkedIn
            </MagneticButton>
            <MagneticButton
              href={cv}
              download="CV-BrianSangermano.pdf"
              className="rounded-full border border-white/20 bg-zinc-900 px-8 py-3 text-sm font-medium text-zinc-300 shadow-[0_0_15px_rgba(99,102,241,0.05),0_0_30px_rgba(168,85,247,0.03)] transition-all duration-300 hover:border-indigo-400/50 hover:text-white hover:shadow-[0_0_25px_rgba(99,102,241,0.15),0_0_50px_rgba(168,85,247,0.08)]"
            >
              Download Resume
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>

      <div className="section-number">08</div>
    </section>
  )
}
