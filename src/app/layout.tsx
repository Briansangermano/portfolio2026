import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
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
      <body className="min-h-full bg-[#0a0a0a] font-sans text-white">
        <div className="grain" />
        {children}
      </body>
    </html>
  )
}
