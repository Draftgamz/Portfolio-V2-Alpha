"use client"
import Link from "next/link"
import { ArrowRight, Download, Github, Linkedin, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedGroup } from "@/components/ui/animated-group"

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

export function HeroSection() {
  return (
    <main className="overflow-hidden relative min-h-screen flex items-center">
      {/* Subtle static background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 w-full">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
            <AnimatedGroup variants={transitionVariants}>
              <div className="inline-flex items-center gap-3 glass-card px-6 py-3 text-sm mb-8 glow-on-hover">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <Sparkles className="h-4 w-4 text-accent" />
                <span className="font-medium text-foreground">Available for new opportunities</span>
              </div>

              <div className="relative mb-8">
                <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-center text-white mb-6">
                  Hi, I'm Draft
                </h1>
              </div>

              <p className="mt-6 max-w-4xl mx-auto text-balance text-xl md:text-2xl lg:text-3xl text-gray-300 font-light">
                A Passionate Developer Who Loves to Code
              </p>

              <div className="glass-card mx-auto mt-8 max-w-3xl p-6">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  At 16, I'm already building amazing web applications with modern technologies. I love creating
                  beautiful, functional, and user-friendly digital experiences that make a difference.
                </p>
              </div>
            </AnimatedGroup>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 1,
                    },
                  },
                },
                ...transitionVariants,
              }}
              className="mt-12 flex flex-col items-center justify-center gap-4 md:flex-row"
            >
              <Button asChild size="lg" className="group">
                <Link href="#projects">
                  <span className="relative z-10">View My Work</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline" className="group">
                <Link href="#contact">
                  <span>Get In Touch</span>
                </Link>
              </Button>
            </AnimatedGroup>

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
              className="mt-16 flex items-center justify-center gap-6"
            >
              <Button asChild size="icon" variant="glass" className="group float-animation">
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>

              <Button
                asChild
                size="icon"
                variant="glass"
                className="group float-animation"
                style={{ animationDelay: "0.5s" }}
              >
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>

              <Button asChild variant="glass" className="group float-animation" style={{ animationDelay: "1s" }}>
                <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                  <span>Resume</span>
                </Link>
              </Button>
            </AnimatedGroup>
          </div>
        </div>
      </section>
    </main>
  )
}
