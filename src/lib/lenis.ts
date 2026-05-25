let lenisInstance: Lenis | null = null

export function setLenis(instance: Lenis | null) {
  lenisInstance = instance
}

export function scrollToSection(href: string) {
  if (lenisInstance) {
    lenisInstance.scrollTo(href)
  } else {
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }
}

export type Lenis = {
  scrollTo: (target: string | HTMLElement, options?: { offset?: number; duration?: number }) => void
  raf: (time: number) => void
  destroy: () => void
}
