"use client"

import { useEffect, useState } from "react"
import { useScroll, useTransform, motion, MotionValue } from "framer-motion"

const BLOBS = [
  { color: "rgba(129, 140, 248, 0.3)", size: 700, x: "10%", y: "5%", moveX: 40, moveY: -50 },
  { color: "rgba(232, 121, 249, 0.25)", size: 550, x: "75%", y: "30%", moveX: -45, moveY: 30 },
  { color: "rgba(34, 211, 238, 0.2)", size: 450, x: "40%", y: "65%", moveX: 25, moveY: -25 },
  { color: "rgba(129, 140, 248, 0.2)", size: 500, x: "85%", y: "80%", moveX: -20, moveY: 35 },
  { color: "rgba(232, 121, 249, 0.15)", size: 400, x: "25%", y: "50%", moveX: 30, moveY: -40 },
  { color: "rgba(34, 211, 238, 0.15)", size: 600, x: "60%", y: "15%", moveX: -30, moveY: 45 },
]

function Blob({ color, size, x, y, moveX, moveY, progress }: typeof BLOBS[number] & { progress: MotionValue<number> }) {
  const tx = useTransform(progress, [0, 1], [0, moveX])
  const ty = useTransform(progress, [0, 1], [0, moveY])

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background: `radial-gradient(circle at center, ${color}, transparent 70%)`,
        x: tx,
        y: ty,
        transform: "translate(-50%, -50%)",
      }}
    />
  )
}

function Stars() {
  const [stars, setStars] = useState<Array<{ left: string; top: string; size: number; opacity: number; duration: number; delay: number }>>([])

  useEffect(() => {
    setStars(
      Array.from({ length: 300 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 3,
      }))
    )
  }, [])

  return (
    <>
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 0.3, star.opacity],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  )
}

export default function NebulaBackground() {
  const { scrollYProgress } = useScroll()

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#050505]">
      {BLOBS.map((blob, i) => (
        <Blob key={i} {...blob} progress={scrollYProgress} />
      ))}
      <Stars />
    </div>
  )
}
