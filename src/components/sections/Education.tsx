"use client"

import ScrollReveal from "@/components/ui/ScrollReveal"
import { portfolioData } from "@/data/portfolio"
import { LuGraduationCap, LuLanguages } from "react-icons/lu"

export default function Education() {
  const { education, languages } = portfolioData

  return (
    <section id="education" className="relative overflow-hidden px-6 pb-16 pt-32">
      {/* Decorative gradient blob */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />

      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <span className="text-xs font-medium uppercase tracking-widest bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Education
          </span>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Degree Card */}
          <ScrollReveal delay={0.1} className="h-full">
            <div className="group relative flex h-full flex-col rounded-xl border border-white/5 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-[0_0_25px_rgba(99,102,241,0.1)]">
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-gradient-to-b from-indigo-500 to-purple-500" />

              <LuGraduationCap className="mb-4 h-8 w-8 text-indigo-400" />

              <h3 className="text-lg font-semibold text-white">
                {education.degree}
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                {education.institution}
              </p>
              <p className="mt-1 text-xs text-zinc-500">{education.period}</p>
            </div>
          </ScrollReveal>

          {/* Languages Card */}
          <ScrollReveal delay={0.2} className="h-full">
            <div className="group relative flex h-full flex-col rounded-xl border border-white/5 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-[0_0_25px_rgba(99,102,241,0.1)]">
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-gradient-to-b from-indigo-500 to-purple-500" />

              <LuLanguages className="mb-4 h-8 w-8 text-indigo-400" />

              <h3 className="text-lg font-semibold text-white">Languages</h3>
              <div className="mt-4 space-y-3">
                {languages.map((lang) => (
                  <div key={lang.language} className="flex items-center justify-between">
                    <span className="text-sm text-zinc-300">{lang.language}</span>
                    <span className="text-xs text-zinc-500">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="section-number">06</div>
    </section>
  )
}
