"use client"

import { useRef, type MouseEvent } from "react"

interface MagneticButtonProps {
  children: React.ReactNode
  href: string
  className?: string
  target?: string
  rel?: string
}

export default function MagneticButton({ children, href, className, target, rel }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)

  function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`
  }

  function handleMouseLeave() {
    const el = ref.current
    if (!el) return
    el.style.transform = "translate(0px, 0px)"
  }

  return (
    <a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      className={`inline-block transition-transform duration-200 ease-out ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </a>
  )
}
