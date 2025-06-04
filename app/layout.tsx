import type React from "react"
import type { Metadata } from "next"
import { Comfortaa } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-comfortaa",
  display: "swap",
  fallback: ["system-ui", "arial"],
})

export const metadata: Metadata = {
  title: "Draft - Full Stack Developer Portfolio",
  description:
    "Portfolio of Draft, a passionate 16-year-old developer who loves to code. Showcasing projects, skills, and experience in web development.",
  keywords: "developer, portfolio, web development, React, Next.js, TypeScript",
  authors: [{ name: "Draft" }],
  openGraph: {
    title: "Draft - Full Stack Developer Portfolio",
    description: "Portfolio of Draft, a passionate 16-year-old developer who loves to code.",
    type: "website",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${comfortaa.variable} font-comfortaa antialiased`}>
        <div className="min-h-screen bg-background relative overflow-x-hidden">
          {/* Enhanced unified background */}
          <div className="fixed inset-0 bg-gradient-to-br from-slate-900 to-slate-800 pointer-events-none" />

          {/* Global floating orbs for consistent feel */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="floating-orb w-96 h-96 -top-48 -left-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
            <div className="floating-orb w-80 h-80 top-1/3 -right-40 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20" />
            <div className="floating-orb w-64 h-64 bottom-1/4 left-1/4 bg-gradient-to-br from-pink-500/15 to-orange-500/15" />
            <div className="floating-orb w-48 h-48 bottom-0 right-1/3 bg-gradient-to-br from-violet-500/20 to-indigo-500/20" />
          </div>

          {/* Global particles for consistent feel */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 3}s`,
                }}
              />
            ))}
          </div>

          <Navigation />
          <main className="relative z-10">{children}</main>
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  )
}
