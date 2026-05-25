"use client"

import { motion } from "framer-motion"
import ScrollReveal from "@/components/ui/ScrollReveal"
import { portfolioData } from "@/data/portfolio"
import { LuGraduationCap, LuLanguages } from "react-icons/lu"

const levelWidth: Record<string, string> = {
  Native: "w-full",
  "Bilingual proficiency": "w-[95%]",
  Fluent: "w-[90%]",
  "Full professional proficiency": "w-[85%]",
  Advanced: "w-[75%]",
  "Professional working": "w-[65%]",
  "Intermediate (B1–B2)": "w-[50%]",
  Intermediate: "w-[50%]",
  Basic: "w-[25%]",
}

function getWidth(level: string): string {
  for (const [key, value] of Object.entries(levelWidth)) {
    if (level.includes(key) || key.includes(level)) return value
  }
  return "w-[50%]"
}

export default function Education() {
  const { education, languages } = portfolioData

  return (
    <section id="education" className="relative overflow-hidden px-6 py-32">
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
          <ScrollReveal delay={0.1}>
            <div className="group relative rounded-xl border border-white/5 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-[0_0_25px_rgba(99,102,241,0.1)]">
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
          <ScrollReveal delay={0.2}>
            <div className="group relative rounded-xl border border-white/5 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-[0_0_25px_rgba(99,102,241,0.1)]">
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-gradient-to-b from-indigo-500 to-purple-500" />

              <LuLanguages className="mb-4 h-8 w-8 text-indigo-400" />

              <h3 className="text-lg font-semibold text-white">Languages</h3>
              <ul className="mt-6 space-y-5">
                {languages.map((lang, i) => (
                  <li key={lang.language}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-sm text-zinc-300">
                        {lang.language}
                      </span>
                      <span className="text-xs text-zinc-500">
                        {lang.level}
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: getWidth(lang.level) }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: 0.3 + i * 0.15,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="section-number">06</div>
    </section>
  )
}
