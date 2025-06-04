"use client"

import Link from "next/link"
import { Code2, Github, Linkedin, Mail, Heart, ArrowUp, Star, Coffee, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedGroup } from "@/components/ui/animated-group"
import { useEffect, useState } from "react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [isVisible, setIsVisible] = useState(false)

  // Handle scroll to top button visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-800/30 to-slate-900" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-orb w-48 h-48 top-20 -left-24 bg-gradient-to-br from-blue-500/15 to-purple-500/15" />
        <div className="floating-orb w-32 h-32 top-1/2 -right-16 bg-gradient-to-br from-emerald-500/15 to-cyan-500/15" />
        <div className="floating-orb w-40 h-40 bottom-20 left-1/3 bg-gradient-to-br from-pink-500/10 to-orange-500/10" />
      </div>

      {/* Pre-footer CTA */}
      <div className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <AnimatedGroup preset="blur-slide" className="card-premium p-12 text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Star className="h-6 w-6 text-yellow-400" />
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Let's Create Something Amazing
              </h3>
              <Star className="h-6 w-6 text-yellow-400" />
            </div>
            <p className="text-slate-300 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
              Whether you need a stunning website, a powerful web application, or just want to chat about the latest in
              tech, I'm here and ready to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" variant="default" className="group">
                <Link href="#contact">
                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold">Get In Touch</span>
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="group">
                <Link href="#projects">
                  <Sparkles className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold">View My Work</span>
                </Link>
              </Button>
            </div>
          </AnimatedGroup>
        </div>
      </div>

      {/* Main footer content */}
      <div className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand */}
            <AnimatedGroup preset="blur-slide" className="space-y-6">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <Code2 className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 w-12 h-12 rounded-full bg-blue-500/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Draft
                </span>
              </Link>
              <p className="text-slate-300 max-w-xs leading-relaxed">
                A passionate 16-year-old developer creating amazing digital experiences with modern web technologies.
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-400 animate-pulse" />
                <span>and</span>
                <Coffee className="h-4 w-4 text-amber-400" />
              </div>

              {/* Social links */}
              <div className="flex space-x-3 pt-2">
                <Button asChild size="icon" variant="glass" className="float-animation group">
                  <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="icon"
                  variant="glass"
                  className="float-animation group"
                  style={{ animationDelay: "0.5s" }}
                >
                  <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="icon"
                  variant="glass"
                  className="float-animation group"
                  style={{ animationDelay: "1s" }}
                >
                  <Link href="mailto:draft@example.com">
                    <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
              </div>
            </AnimatedGroup>

            {/* Quick Links */}
            <AnimatedGroup preset="blur-slide" className="space-y-6">
              <h4 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Quick Links
              </h4>
              <nav className="grid grid-cols-2 gap-4">
                {[
                  { name: "About", href: "#about", delay: 0 },
                  { name: "Projects", href: "#projects", delay: 0.1 },
                  { name: "Skills", href: "#skills", delay: 0.2 },
                  { name: "Contact", href: "#contact", delay: 0.3 },
                  { name: "Resume", href: "/resume.pdf", delay: 0.4 },
                  { name: "Blog", href: "#", delay: 0.5 },
                ].map((link, index) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-slate-300 hover:text-blue-300 transition-colors text-sm group flex items-center gap-2"
                    style={{ animationDelay: `${link.delay}s` }}
                  >
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full group-hover:scale-150 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                ))}
              </nav>

              {/* Status */}
              <div className="glass-card p-4 mt-8">
                <div className="flex items-center gap-2 mb-2">
                  <div className="status-indicator relative flex h-2 w-2">
                    <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </div>
                  <p className="text-xs text-slate-400">Currently available for work</p>
                </div>
                <p className="text-sm font-medium text-blue-300">Let's build something together!</p>
              </div>
            </AnimatedGroup>

            {/* Newsletter */}
            <AnimatedGroup preset="blur-slide" className="space-y-6">
              <h4 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                Stay Updated
              </h4>
              <p className="text-slate-300 text-sm">
                Subscribe to my newsletter for the latest updates on projects, tech insights, and more.
              </p>
              <form className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-full bg-white/5 border border-white/10 focus:border-blue-400/50 focus:outline-none text-white placeholder:text-slate-400"
                  />
                  <Button type="submit" size="sm" variant="default" className="absolute right-1.5 top-1.5 rounded-full">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-slate-400">No spam, just valuable content. Unsubscribe anytime.</p>
              </form>

              {/* Current status */}
              <div className="glass-card p-4 mt-4">
                <p className="text-xs text-slate-400 mb-2">Currently working on:</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  <p className="text-sm font-medium text-blue-300">AI-powered web applications</p>
                </div>
              </div>
            </AnimatedGroup>
          </div>

          {/* Bottom footer */}
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © {currentYear} Draft. All rights reserved. Built with Next.js, Tailwind CSS, and passion.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-slate-400 hover:text-blue-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-slate-400 hover:text-blue-300 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-6 bottom-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg transition-all duration-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <ArrowUp className="h-5 w-5 text-white" />
        <span className="sr-only">Scroll to top</span>
      </button>
    </footer>
  )
}
