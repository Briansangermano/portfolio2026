"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import ScrollReveal from "@/components/ui/ScrollReveal"
import { portfolioData } from "@/data/portfolio"
import { getSkillIcon } from "@/lib/icons"

export default function Skills() {
  const { skills } = portfolioData
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section id="skills" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <span className="text-xs font-medium uppercase tracking-widest bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Technologies & <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">tools</span>
          </h2>
        </ScrollReveal>

        <div ref={ref} className="mt-16 space-y-6">
          {skills.map((category, i) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-xl border border-white/5 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:z-10 hover:border-indigo-500/30 hover:shadow-[0_0_35px_rgba(99,102,241,0.15),0_0_60px_rgba(168,85,247,0.1)]"
            >
              <div className="flex flex-col items-center gap-5">
                <h3 className="text-base font-semibold uppercase tracking-wider text-indigo-300">
                  {category.category}
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {category.items.map((skill) => {
                    const Icon = getSkillIcon(skill)
                    return (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-zinc-200 transition-all duration-300 hover:border-indigo-500/40 hover:bg-indigo-500/5 hover:text-white hover:shadow-[0_0_15px_rgba(99,102,241,0.12),0_0_30px_rgba(168,85,247,0.06)]"
                      >
                        {Icon && <Icon className="text-base" />}
                        {skill}
                      </span>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section-number">04</div>
    </section>
  )
}
