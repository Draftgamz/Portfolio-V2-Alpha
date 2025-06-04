"use client"

import { AnimatedGroup } from "@/components/ui/animated-group"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Settings, Sparkles, Star, Zap, Rocket } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: [
        { name: "React/Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
      ],
      gradient: "from-blue-500 to-purple-500",
      iconColor: "text-blue-400",
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 75 },
        { name: "PostgreSQL", level: 70 },
        { name: "MongoDB", level: 75 },
        { name: "REST APIs", level: 85 },
      ],
      gradient: "from-emerald-500 to-cyan-500",
      iconColor: "text-emerald-400",
    },
    {
      title: "Tools & Technologies",
      icon: Settings,
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Vercel/Netlify", level: 85 },
        { name: "Docker", level: 60 },
        { name: "Figma", level: 70 },
        { name: "VS Code", level: 95 },
      ],
      gradient: "from-pink-500 to-orange-500",
      iconColor: "text-pink-400",
    },
  ]

  const technologies = [
    { name: "React", category: "Frontend", color: "blue" },
    { name: "Next.js", category: "Framework", color: "purple" },
    { name: "TypeScript", category: "Language", color: "blue" },
    { name: "JavaScript", category: "Language", color: "yellow" },
    { name: "Node.js", category: "Backend", color: "green" },
    { name: "Express.js", category: "Backend", color: "green" },
    { name: "Tailwind CSS", category: "Styling", color: "cyan" },
    { name: "CSS3", category: "Styling", color: "blue" },
    { name: "HTML5", category: "Markup", color: "orange" },
    { name: "PostgreSQL", category: "Database", color: "blue" },
    { name: "MongoDB", category: "Database", color: "green" },
    { name: "Prisma", category: "ORM", color: "purple" },
    { name: "Git", category: "Version Control", color: "orange" },
    { name: "GitHub", category: "Platform", color: "gray" },
    { name: "Vercel", category: "Deployment", color: "black" },
    { name: "Netlify", category: "Deployment", color: "teal" },
    { name: "Docker", category: "DevOps", color: "blue" },
    { name: "Figma", category: "Design", color: "purple" },
    { name: "Framer Motion", category: "Animation", color: "pink" },
    { name: "Socket.io", category: "Real-time", color: "green" },
    { name: "REST APIs", category: "API", color: "blue" },
    { name: "GraphQL", category: "API", color: "pink" },
    { name: "Jest", category: "Testing", color: "red" },
    { name: "Cypress", category: "Testing", color: "green" },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      purple: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      green: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      yellow: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
      cyan: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
      orange: "bg-orange-500/20 text-orange-300 border-orange-500/30",
      pink: "bg-pink-500/20 text-pink-300 border-pink-500/30",
      red: "bg-red-500/20 text-red-300 border-red-500/30",
      teal: "bg-teal-500/20 text-teal-300 border-teal-500/30",
      gray: "bg-gray-500/20 text-gray-300 border-gray-500/30",
      black: "bg-slate-500/20 text-slate-300 border-slate-500/30",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-800/30 to-slate-900/50" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-purple-600/10 via-pink-600/10 to-orange-600/10" />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-orb w-52 h-52 top-20 -left-26 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
        <div className="floating-orb w-36 h-36 top-1/2 -right-18 bg-gradient-to-br from-blue-500/20 to-cyan-500/20" />
        <div className="floating-orb w-44 h-44 bottom-20 left-1/4 bg-gradient-to-br from-emerald-500/15 to-teal-500/15" />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <AnimatedGroup preset="blur-slide" className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="glass-card px-6 py-3 hover:scale-105 transition-all duration-500 group">
              <div className="flex items-center gap-3">
                <Sparkles className="h-4 w-4 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-semibold text-white text-sm">My expertise</span>
              </div>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-none">
            <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Skills &
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </AnimatedGroup>

        {/* Skill Categories with Progress Bars */}
        <AnimatedGroup preset="blur-slide" className="grid lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-premium group hover:scale-105 transition-all duration-500">
              <CardHeader className="relative z-10 pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-r ${category.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-blue-200 transition-colors">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-6 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-white">{skill.name}</span>
                      <span className="text-slate-300 font-medium">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <div className="h-3 bg-slate-800/50 rounded-full overflow-hidden backdrop-blur-sm">
                        <div
                          className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out relative`}
                          style={{ width: `${skill.level}%` }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
              />
            </Card>
          ))}
        </AnimatedGroup>

        {/* Technology Cloud */}
        <AnimatedGroup preset="blur-slide">
          <Card className="card-premium">
            <CardHeader className="relative z-10 text-center pb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Star className="h-6 w-6 text-yellow-400" />
                <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Technology Stack
                </CardTitle>
                <Star className="h-6 w-6 text-yellow-400" />
              </div>
              <p className="text-slate-300 text-lg">A comprehensive overview of all the technologies I work with</p>
            </CardHeader>

            <CardContent className="relative z-10">
              <div className="flex flex-wrap gap-3 justify-center">
                {technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className={`px-4 py-2 text-sm font-medium hover:scale-105 transition-all duration-200 cursor-default group border ${getColorClasses(tech.color)}`}
                  >
                    <span className="relative z-10">{tech.name}</span>
                    <div className="absolute inset-0 bg-white/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Badge>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/10">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    24+
                  </div>
                  <div className="text-slate-400 text-sm">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    3+
                  </div>
                  <div className="text-slate-400 text-sm">Years Learning</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent mb-2">
                    15+
                  </div>
                  <div className="text-slate-400 text-sm">Projects Built</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                    100%
                  </div>
                  <div className="text-slate-400 text-sm">Passion</div>
                </div>
              </div>
            </CardContent>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5 opacity-50 rounded-2xl" />
          </Card>
        </AnimatedGroup>

        {/* Learning Journey */}
        <AnimatedGroup preset="blur-slide" className="mt-16">
          <div className="card-premium p-12 text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Rocket className="h-8 w-8 text-blue-400" />
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Always Learning
              </h3>
              <Zap className="h-8 w-8 text-emerald-400" />
            </div>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, tools, and best
              practices to stay at the forefront of web development. My curiosity drives me to experiment with
              cutting-edge technologies and implement them in real-world projects.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span>Currently exploring: AI/ML integration</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span>Next up: Web3 technologies</span>
              </div>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  )
}
