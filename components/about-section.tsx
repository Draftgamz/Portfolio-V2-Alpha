"use client"

import { AnimatedGroup } from "@/components/ui/animated-group"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Heart, Lightbulb, Rocket, Sparkles } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: "Passionate Coder",
      description: "I live and breathe code, constantly learning new technologies and best practices.",
      color: "text-primary",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "I love tackling complex challenges and finding elegant solutions to real-world problems.",
      color: "text-accent",
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description: "At 16, I've already mastered multiple programming languages and frameworks.",
      color: "text-secondary",
    },
    {
      icon: Heart,
      title: "User-Focused",
      description: "I believe in creating applications that users love and find genuinely helpful.",
      color: "text-pink-400",
    },
  ]

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 relative">
        <AnimatedGroup preset="blur-slide" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">Get to know me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm Draft, a 16-year-old developer with a passion for creating amazing digital experiences. Despite my young
            age, I bring dedication, creativity, and a fresh perspective to every project.
          </p>
        </AnimatedGroup>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <AnimatedGroup preset="blur-slide">
            <div className="glass-card p-8 space-y-6">
              <h3 className="text-2xl font-medium text-primary">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I started coding when I was 13, and it quickly became more than just a hobby—it became my passion.
                  What began with simple HTML and CSS has evolved into full-stack development with modern frameworks
                  like React, Next.js, and Node.js.
                </p>
                <p>
                  I believe that age is just a number when it comes to creating great software. My fresh perspective,
                  combined with dedication to learning and improving, allows me to bring unique solutions to the table.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  or brainstorming the next big idea that could change the world.
                </p>
              </div>
            </div>
          </AnimatedGroup>

          <AnimatedGroup preset="scale">
            <div className="relative">
              <div className="glass-card aspect-square p-12 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                <div className="text-center relative z-10">
                  <div className="relative mb-6">
                    <Code2 className="h-24 w-24 mx-auto text-primary float-animation" />
                    <div className="absolute inset-0 h-24 w-24 mx-auto bg-primary/20 rounded-full blur-xl" />
                  </div>
                  <p className="text-2xl font-medium mb-2">3+ Years</p>
                  <p className="text-muted-foreground">Coding Experience</p>
                </div>
              </div>
            </div>
          </AnimatedGroup>
        </div>

        <AnimatedGroup preset="blur-slide" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index} className="group relative overflow-hidden">
              <CardContent className="p-8 text-center relative z-10">
                <div className="relative mb-6">
                  <highlight.icon
                    className={`h-12 w-12 mx-auto ${highlight.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                  <div className="absolute inset-0 h-12 w-12 mx-auto bg-current opacity-20 rounded-full blur-lg group-hover:opacity-30 transition-opacity" />
                </div>
                <h4 className="font-medium mb-3 text-lg">{highlight.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  )
}
