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
          {/* Simple static background */}
          <div className="fixed inset-0 bg-gradient-to-br from-slate-900 to-slate-800 pointer-events-none" />

          <Navigation />
          <main className="relative z-10">{children}</main>
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  )
}
