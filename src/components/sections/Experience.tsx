"use client"

import { useRef, useEffect } from "react"
import type gsapNs from "gsap"
import type { ScrollTrigger as ST } from "gsap/ScrollTrigger"
import ScrollReveal from "@/components/ui/ScrollReveal"
import { portfolioData } from "@/data/portfolio"

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function init() {
      const gsap = (await import("gsap")).default
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default
      gsap.registerPlugin(ScrollTrigger)
      ScrollTrigger.refresh()

      if (lineRef.current && timelineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 60%",
              end: "bottom 20%",
              scrub: 1.5,
            },
          }
        )
      }

      ScrollTrigger.refresh()
    }

    init()
  }, [])

  const { experience } = portfolioData

  return (
    <section id="experience" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <span className="text-xs font-medium uppercase tracking-widest bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Where I&apos;ve <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">worked</span>
          </h2>
        </ScrollReveal>

        <div ref={timelineRef} className="relative mt-16">
          <div
            ref={lineRef}
            className="absolute left-[5px] top-0 bottom-0 w-1 origin-top scale-y-0 bg-gradient-to-b from-indigo-400 via-purple-500 to-pink-500/10 md:left-1/2 md:-translate-x-0.5"
          />

          {experience.map((exp, i) => (
            <div key={exp.company} className="relative mb-16 last:mb-0">
              <div className="md:grid md:grid-cols-2">
                {i % 2 === 0 ? (
                  <>
                    <div className="pr-0 md:pr-12 md:text-right">
                      <ScrollReveal delay={0.1 * i}>
                        <div className="group ml-14 rounded-xl border border-white/5 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-[0_0_25px_rgba(99,102,241,0.12),0_0_50px_rgba(168,85,247,0.08)] md:ml-0">
                          <span className="text-xs font-medium text-indigo-400">{exp.period}</span>
                          <h3 className="mt-1 text-lg font-semibold">{exp.role}</h3>
                          <p className="mt-1 text-sm text-zinc-500">{exp.company}</p>
                          <ul className="mt-4 space-y-2 md:text-right">
                            {exp.description.map((item, j) => (
                              <li key={j} className="text-sm leading-relaxed text-zinc-400">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </ScrollReveal>
                    </div>
                    <div className="hidden md:block" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block" />
                    <div className="pl-0 md:pl-12">
                      <ScrollReveal delay={0.1 * i}>
                        <div className="group ml-14 rounded-xl border border-white/5 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-[0_0_25px_rgba(99,102,241,0.12),0_0_50px_rgba(168,85,247,0.08)] md:ml-0">
                          <span className="text-xs font-medium text-indigo-400">{exp.period}</span>
                          <h3 className="mt-1 text-lg font-semibold">{exp.role}</h3>
                          <p className="mt-1 text-sm text-zinc-500">{exp.company}</p>
                          <ul className="mt-4 space-y-2">
                            {exp.description.map((item, j) => (
                              <li key={j} className="text-sm leading-relaxed text-zinc-400">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </ScrollReveal>
                    </div>
                  </>
                )}
              </div>

              <div className="absolute left-0 top-0 z-10 flex h-full items-start md:left-1/2 md:-translate-x-1/2">
                <div className="mt-6 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-indigo-400 bg-[#050505] shadow-[0_0_10px_rgba(99,102,241,0.3),0_0_20px_rgba(168,85,247,0.15)]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-number">03</div>
    </section>
  )
}
