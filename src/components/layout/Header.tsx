"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { scrollToSection } from "@/lib/lenis"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", onScroll, { passive: true })

    const observers: IntersectionObserver[] = []

    navItems.forEach((item) => {
      const el = document.querySelector(item.href)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(item.href)
          }
        },
        { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => {
      window.removeEventListener("scroll", onScroll)
      observers.forEach((o) => o.disconnect())
    }
  }, [])

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050505]/70 backdrop-blur-2xl border-b border-white/5 shadow-[0_0_30px_rgba(99,102,241,0.1),0_0_60px_rgba(168,85,247,0.05)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          type="button"
          onClick={() => scrollToSection("#hero")}
          className="relative text-lg font-bold tracking-tight text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-indigo-400 after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
        >
          BS<span className="text-indigo-400">.</span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href
            return (
              <li key={item.href}>
                <button
                  type="button"
                  onClick={() => scrollToSection(item.href)}
                  className={`relative rounded-lg px-4 py-2 text-sm transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-lg bg-white/5 shadow-[0_0_12px_rgba(99,102,241,0.08)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              </li>
            )
          })}
        </ul>

        <button
          type="button"
          onClick={() => setMobileOpen(prev => !prev)}
          className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 bg-white transition-all ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition-all ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition-all ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>
    </header>

    <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-[#0a0a0a]/90 backdrop-blur-2xl md:hidden"
          >
            <ul className="flex flex-col items-center gap-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    type="button"
                    onClick={() => {
                      scrollToSection(item.href)
                      setMobileOpen(false)
                    }}
                    className="text-2xl text-zinc-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
    </AnimatePresence>
    </>
  )
}
