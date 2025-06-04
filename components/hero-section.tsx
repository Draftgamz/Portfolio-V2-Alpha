"use client"
import Link from "next/link"
import { ArrowRight, Download, Github, Linkedin, Sparkles, Zap, Star, Code2, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedGroup } from "@/components/ui/animated-group"
import { ScrollIndicator } from "@/components/scroll-indicator"

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 30,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
      },
    },
  },
}

export function HeroSection() {
  return (
    <main className="relative min-h-screen flex items-center overflow-hidden">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

        {/* Animated mesh gradient overlay */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse" />
          <div
            className="absolute top-1/4 right-0 w-3/4 h-3/4 bg-gradient-to-bl from-emerald-500/15 via-cyan-500/15 to-blue-500/15 animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-20 left-20 w-32 h-32 border border-white/20 rotate-45 animate-spin"
            style={{ animationDuration: "20s" }}
          />
          <div
            className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rotate-12 animate-spin"
            style={{ animationDuration: "15s", animationDirection: "reverse" }}
          />
          <div
            className="absolute top-1/2 left-10 w-16 h-16 border border-white/20 rotate-45 animate-spin"
            style={{ animationDuration: "25s" }}
          />
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Enhanced floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-orb w-64 h-64 top-10 -left-32 bg-gradient-to-br from-blue-500/30 to-purple-500/30" />
        <div className="floating-orb w-48 h-48 top-1/3 -right-24 bg-gradient-to-br from-emerald-500/30 to-cyan-500/30" />
        <div className="floating-orb w-80 h-80 bottom-10 left-1/4 bg-gradient-to-br from-pink-500/20 to-orange-500/20" />
        <div className="floating-orb w-32 h-32 top-1/4 right-1/3 bg-gradient-to-br from-violet-500/30 to-indigo-500/30" />
      </div>

      <section className="relative pt-20 sm:pt-32 pb-16 sm:pb-24 w-full z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <AnimatedGroup variants={transitionVariants}>
              {/* Enhanced status badge */}
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="relative">
                  <div className="glass-card px-6 py-3 hover:scale-105 transition-all duration-500 group cursor-default">
                    <div className="flex items-center gap-3">
                      <div className="status-indicator relative flex h-3 w-3">
                        <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-lg shadow-emerald-500/50"></span>
                      </div>
                      <Sparkles className="h-4 w-4 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
                      <span className="font-semibold text-white text-sm">Available for opportunities</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main title with enhanced styling */}
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 blur-3xl -z-10 animate-pulse" />
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none mb-6">
                  <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                    Hi, I'm
                  </span>
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                    Draft
                  </span>
                </h1>
              </div>

              {/* Enhanced subtitle */}
              <div className="relative mb-8">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium max-w-4xl mx-auto leading-relaxed">
                  <span className="bg-gradient-to-r from-slate-200 via-white to-slate-200 bg-clip-text text-transparent">
                    A Passionate
                  </span>
                  <span className="mx-3 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-bold">
                    Developer
                  </span>
                  <span className="bg-gradient-to-r from-slate-200 via-white to-slate-200 bg-clip-text text-transparent">
                    Who Loves to Code
                  </span>
                </p>
              </div>

              {/* Enhanced description cards */}
              <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
                <div className="card-premium p-6 group hover:scale-105 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <Code2 className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-white">16 Years Old</h3>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Young developer with fresh perspectives and innovative solutions
                  </p>
                </div>

                <div className="card-premium p-6 group hover:scale-105 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center">
                      <Star className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-white">3+ Years Experience</h3>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Dedicated to mastering modern web technologies and best practices
                  </p>
                </div>

                <div className="card-premium p-6 group hover:scale-105 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 flex items-center justify-center">
                      <Coffee className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-white">Full-Stack Ready</h3>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Building beautiful, functional applications from front to back
                  </p>
                </div>
              </div>
            </AnimatedGroup>

            {/* Enhanced action buttons */}
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.15,
                      delayChildren: 0.8,
                    },
                  },
                },
                ...transitionVariants,
              }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 px-4"
            >
              <Button asChild size="xl" variant="default" className="w-full sm:w-auto min-w-[220px] group">
                <Link href="#projects">
                  <Zap className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-semibold">Explore My Work</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 duration-300" />
                </Link>
              </Button>

              <Button asChild size="xl" variant="secondary" className="w-full sm:w-auto min-w-[220px] group">
                <Link href="#contact">
                  <span className="font-semibold">Let's Connect</span>
                  <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50" />
                </Link>
              </Button>
            </AnimatedGroup>

            {/* Enhanced social section */}
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 1.2,
                    },
                  },
                },
                ...transitionVariants,
              }}
              className="space-y-6"
            >
              <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-slate-400" />
                <span>Connect with me</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-slate-400" />
              </div>

              <div className="flex items-center justify-center gap-6">
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
                  variant="outline"
                  className="float-animation group px-6 py-3"
                  style={{ animationDelay: "1s" }}
                >
                  <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-semibold ml-2">Download Resume</span>
                  </Link>
                </Button>
              </div>
            </AnimatedGroup>
          </div>
        </div>

        {/* Scroll indicator */}
        <ScrollIndicator />
      </section>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </main>
  )
}
