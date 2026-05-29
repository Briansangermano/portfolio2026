"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface SplashScreenProps {
  onFinish: () => void
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const [exiting, setExiting] = useState(false)
  const [done, setDone] = useState(false)
  const onFinishRef = useRef(onFinish)
  onFinishRef.current = onFinish

  useEffect(() => {
    document.body.style.overflow = "hidden"

    const t1 = setTimeout(() => setExiting(true), 1800)
    const t2 = setTimeout(() => {
      document.body.style.overflow = ""
      setDone(true)
      onFinishRef.current()
    }, 2800)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      document.body.style.overflow = ""
    }
  }, [])

  if (done) return null

  const curtainEase: [number, number, number, number] = [0.76, 0, 0.24, 1]

  return (
    <>
      {/* Curtains — behind BS content, start sliding when exiting begins */}
      <motion.div
        className="fixed inset-y-0 left-0 z-[10001] bg-[#050505]"
        style={{ width: "50vw" }}
        animate={{ x: exiting ? "-100%" : "0%" }}
        transition={{
          duration: 0.5,
          ease: curtainEase,
          delay: exiting ? 0.1 : 0,
        }}
      />
      <motion.div
        className="fixed inset-y-0 right-0 z-[10001] bg-[#050505]"
        style={{ width: "50vw" }}
        animate={{ x: exiting ? "100%" : "0%" }}
        transition={{
          duration: 0.5,
          ease: curtainEase,
          delay: exiting ? 0.15 : 0,
        }}
      />

      {/* BS content — above curtains, fades to reveal them sliding */}
      <motion.div
        className="fixed inset-0 z-[10002] flex flex-col items-center justify-center bg-[#050505]"
        animate={{ opacity: exiting ? 0 : 1 }}
        transition={{ duration: 0.4, ease: curtainEase }}
      >
        {/* Glow */}
        <div
          className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full blur-3xl pointer-events-none animate-pulse"
          style={{
            opacity: 0.3,
            background:
              "radial-gradient(circle, rgba(129,140,248,0.3) 0%, rgba(232,121,249,0.15) 40%, transparent 70%)",
          }}
        />

        {/* BS text */}
        <h1
          className="relative text-[8rem] sm:text-[10rem] md:text-[14rem] font-black tracking-tighter leading-none"
          style={{
            background: "linear-gradient(135deg, #818cf8, #a78bfa, #e879f9)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          BS
        </h1>

        {/* Underline */}
        <div
          className="h-[3px] rounded-full mt-5"
          style={{
            width: "clamp(100px, 25vw, 240px)",
            background: "linear-gradient(90deg, #818cf8, #a78bfa, #e879f9)",
          }}
        />
      </motion.div>
    </>
  )
}
