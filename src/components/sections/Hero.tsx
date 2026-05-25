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
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
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
        <div className="flex flex-col gap-6">
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
            className="max-w-md text-base leading-relaxed text-zinc-400 sm:text-lg"
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

        <motion.div variants={heroItem} className="relative flex justify-center md:justify-end">
          <div className="relative h-72 w-72 overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(99,102,241,0.2),0_0_80px_rgba(168,85,247,0.1)] sm:h-80 sm:w-80">
            <Image
              src="/images/hero-photo.png"
              alt={name}
              fill
              sizes="(max-width: 640px) 288px, 320px"
              className="object-cover object-[50%_15%]"
              preload
            />
          </div>
        </motion.div>
      </motion.div>

      <div className="section-number">01</div>
    </section>
  )
}
