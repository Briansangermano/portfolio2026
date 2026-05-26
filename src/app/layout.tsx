import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import NebulaBackground from "@/components/effects/NebulaBackground"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Brian Sangermano | Software Engineer",
  description:
    "Portfolio of Brian Sangermano — Software Engineer with 6+ years of experience building high-performance web applications with React, TypeScript, and Next.js.",
  openGraph: {
    title: "Brian Sangermano | Software Engineer",
    description:
      "Portfolio of Brian Sangermano — Software Engineer with 6+ years of experience building high-performance web applications.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full font-sans text-white">
        <NebulaBackground />
        <div className="grain" />
        {children}
      </body>
    </html>
  )
}
