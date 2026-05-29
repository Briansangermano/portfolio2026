"use client"

import { useEffect } from "react"
import { setLenis } from "@/lib/lenis"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Experience from "@/components/sections/Experience"
import Skills from "@/components/sections/Skills"
import Projects from "@/components/sections/Projects"
import Education from "@/components/sections/Education"
import Certificates from "@/components/sections/Certificates"
import Contact from "@/components/sections/Contact"

export default function Home() {
  useEffect(() => {
    async function initLenis() {
      const Lenis = (await import("lenis")).default
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        smoothWheel: true,
      })

      setLenis(lenis)

      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)

      return () => {
        setLenis(null)
        lenis.destroy()
      }
    }

    const cleanup = initLenis()
    return () => {
      cleanup.then((fn) => fn())
    }
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
