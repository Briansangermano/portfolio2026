"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import ScrollReveal from "@/components/ui/ScrollReveal"
import MagneticButton from "@/components/ui/MagneticButton"
import { heroStagger, heroItem } from "@/lib/animations"
import { portfolioData } from "@/data/portfolio"

export default function Hero() {
  const { name, title, summary } = portfolioData

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center px-6 pb-20 pt-28 sm:pt-24"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#050505] via-[#050505] to-[#050505]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.08),rgba(168,85,247,0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(232,121,249,0.04),rgba(99,102,241,0.02),transparent_50%)]" />
      </div>

      <motion.div
        className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2"
        variants={heroStagger}
        initial="hidden"
        animate="visible"
      >
        <div className="flex min-w-0 flex-col gap-6">
          <motion.p
            variants={heroItem}
            className="text-base font-medium uppercase tracking-widest bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent sm:text-lg"
          >
            Software Engineer
          </motion.p>

          <motion.h1
            variants={heroItem}
            className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {name.split(" ")[0]}
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">{name.split(" ")[1]}</span>
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="break-words text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            {title} — {summary}
          </motion.p>

          <motion.div variants={heroItem} className="flex flex-wrap gap-4 pt-4">
            <MagneticButton
              href="#projects"
              className="rounded-full bg-indigo-500 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-600"
            >
              View Projects
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="rounded-full border border-white/20 px-8 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-white/40 hover:text-white"
            >
              Contact Me
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div variants={heroItem} className="relative flex justify-center md:justify-center">
          <div className="relative h-80 w-80 sm:h-[32rem] sm:w-[32rem] sm:-ml-16">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-b from-indigo-500/30 via-purple-500/20 to-pink-500/20 blur-xl" />
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#050505] via-indigo-950/40 to-purple-950/40 shadow-2xl shadow-indigo-500/10">
              <Image
                src="/images/without-bg.png"
                alt={name}
                fill
                sizes="(max-width: 640px) 320px, 512px"
                className="object-contain"
                priority
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#050505] to-transparent" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="section-number">01</div>
    </section>
  )
}
