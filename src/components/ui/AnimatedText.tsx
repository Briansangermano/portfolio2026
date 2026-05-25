"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

interface AnimatedTextProps {
  text: string
  className?: string
  tag?: "h1" | "h2" | "h3" | "p" | "span"
}

export default function AnimatedText({ text, className, tag: Tag = "p" }: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const words = text.split(" ")

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="inline"
      aria-label={text}
    >
      <Tag className={className}>
        {words.map((word, i) => (
          <motion.span key={i} variants={staggerItem} className="inline-block">
            {word}&nbsp;
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  )
}
