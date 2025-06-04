"use client"

import { AnimatedGroup } from "@/components/ui/animated-group"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Heart, Lightbulb, Rocket, Sparkles, Star, Coffee, Zap } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: "Passionate Coder",
      description: "I live and breathe code, constantly learning new technologies and best practices.",
      color: "from-blue-500 to-purple-500",
      iconColor: "text-blue-400",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "I love tackling complex challenges and finding elegant solutions to real-world problems.",
      color: "from-emerald-500 to-cyan-500",
      iconColor: "text-emerald-400",
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description: "At 16, I've already mastered multiple programming languages and frameworks.",
      color: "from-pink-500 to-orange-500",
      iconColor: "text-pink-400",
    },
    {
      icon: Heart,
      title: "User-Focused",
      description: "I believe in creating applications that users love and find genuinely helpful.",
      color: "from-violet-500 to-indigo-500",
      iconColor: "text-violet-400",
    },
  ]

  const stats = [
    { number: "3+", label: "Years Coding", icon: Code2 },
    { number: "15+", label: "Projects Built", icon: Rocket },
    { number: "8+", label: "Technologies", icon: Zap },
    { number: "100%", label: "Passion", icon: Heart },
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-800/30 to-slate-900/50" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-orb w-48 h-48 top-20 -left-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
        <div className="floating-orb w-32 h-32 top-1/2 -right-16 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20" />
        <div className="floating-orb w-64 h-64 bottom-20 left-1/3 bg-gradient-to-br from-pink-500/15 to-orange-500/15" />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <AnimatedGroup preset="blur-slide" className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="glass-card px-6 py-3 hover:scale-105 transition-all duration-500 group">
              <div className="flex items-center gap-3">
                <Sparkles className="h-4 w-4 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-semibold text-white text-sm">Get to know me</span>
              </div>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-none">
            <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              About
            </span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            I'm Draft, a 16-year-old developer with a passion for creating amazing digital experiences. Despite my young
            age, I bring dedication, creativity, and a fresh perspective to every project.
          </p>
        </AnimatedGroup>

        {/* Stats Section */}
        <AnimatedGroup preset="blur-slide" className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="card-premium p-6 text-center group hover:scale-105 transition-all duration-500">
              <div className="relative mb-4">
                <stat.icon className="h-8 w-8 mx-auto text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 h-8 w-8 mx-auto bg-blue-400/20 rounded-full blur-lg group-hover:bg-blue-400/30 transition-all duration-300" />
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </AnimatedGroup>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Journey Card */}
          <AnimatedGroup preset="blur-slide">
            <div className="card-premium p-10 space-y-8 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  My Journey
                </h3>
              </div>

              <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
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

              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2 text-emerald-400">
                  <Coffee className="h-5 w-5" />
                  <span className="text-sm font-medium">Fueled by coffee & curiosity</span>
                </div>
              </div>
            </div>
          </AnimatedGroup>

          {/* Experience Showcase */}
          <AnimatedGroup preset="scale">
            <div className="relative">
              <div className="card-premium aspect-square p-12 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20" />

                {/* Floating icons */}
                <div className="absolute top-8 left-8 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center float-animation">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <div
                  className="absolute top-8 right-8 w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center float-animation"
                  style={{ animationDelay: "1s" }}
                >
                  <Rocket className="h-5 w-5 text-white" />
                </div>
                <div
                  className="absolute bottom-8 left-8 w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 flex items-center justify-center float-animation"
                  style={{ animationDelay: "2s" }}
                >
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <div
                  className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 flex items-center justify-center float-animation"
                  style={{ animationDelay: "0.5s" }}
                >
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>

                <div className="text-center relative z-10">
                  <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                    3+
                  </div>
                  <p className="text-2xl font-medium text-white mb-2">Years of</p>
                  <p className="text-xl text-slate-300">Coding Experience</p>
                </div>
              </div>
            </div>
          </AnimatedGroup>
        </div>

        {/* Highlights Grid */}
        <AnimatedGroup preset="blur-slide" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index} className="card-premium group hover:scale-105 transition-all duration-500">
              <CardContent className="p-8 text-center relative z-10">
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${highlight.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <highlight.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute inset-0 w-16 h-16 mx-auto bg-current opacity-20 rounded-full blur-xl group-hover:opacity-30 transition-opacity" />
                </div>
                <h4 className="font-bold mb-4 text-xl text-white group-hover:text-blue-200 transition-colors">
                  {highlight.title}
                </h4>
                <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">
                  {highlight.description}
                </p>
              </CardContent>
              <div
                className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
              />
            </Card>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  )
}
