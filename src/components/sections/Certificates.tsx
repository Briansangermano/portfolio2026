"use client"

import Image from "next/image"
import ScrollReveal from "@/components/ui/ScrollReveal"
import { portfolioData } from "@/data/portfolio"
import { LuAward, LuExternalLink } from "react-icons/lu"

export default function Certificates() {
  const { certificates } = portfolioData

  return (
    <section id="certificates" className="relative overflow-hidden px-6 pb-32 pt-16">
      <div className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />

      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <span className="text-xs font-medium uppercase tracking-widest bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Certificates
          </span>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => (
            <ScrollReveal key={cert.name} delay={0.1 + i * 0.1}>
              <div className="group relative flex h-full flex-col rounded-xl border border-white/5 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-[0_0_25px_rgba(99,102,241,0.1)]">
                <div className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-gradient-to-b from-indigo-500 to-purple-500" />

                <div className="flex-1 pb-6">
                  <LuAward className="mb-4 h-8 w-8 text-indigo-400" />

                  <h3 className="text-lg font-semibold text-white">
                    {cert.name}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400">{cert.issuer}</p>
                  <p className="mt-1 text-xs text-zinc-500">{cert.date}</p>
                </div>

                {cert.type === "image" ? (
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative mt-auto block aspect-video w-full overflow-hidden rounded-lg pt-8"
                  >
                    <Image
                      src={cert.file}
                      alt={cert.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </a>
                ) : (
                  <div className="mt-auto pt-4">
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-indigo-500/10 px-4 py-2 text-sm text-indigo-400 transition-colors hover:bg-indigo-500/20"
                    >
                      <LuExternalLink className="h-4 w-4" />
                      View Certificate
                    </a>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="section-number">07</div>
    </section>
  )
}
