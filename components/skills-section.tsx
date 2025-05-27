"use client"

import { AnimatedGroup } from "@/components/ui/animated-group"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Settings, Sparkles } from "lucide-react"

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
      color: "text-primary",
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
      color: "text-accent",
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
      color: "text-secondary",
    },
  ]

  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "CSS3",
    "HTML5",
    "PostgreSQL",
    "MongoDB",
    "Prisma",
    "Git",
    "GitHub",
    "Vercel",
    "Netlify",
    "Docker",
    "Figma",
    "Framer Motion",
    "Socket.io",
    "REST APIs",
    "GraphQL",
    "Jest",
    "Cypress",
  ]

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 relative">
        <AnimatedGroup preset="blur-slide" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">My expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </AnimatedGroup>

        {/* Skill Categories with Progress Bars */}
        <AnimatedGroup preset="blur-slide" className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group relative overflow-hidden">
              <CardHeader className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="relative">
                    <category.icon
                      className={`h-6 w-6 ${category.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                    <div className="absolute inset-0 bg-current opacity-20 rounded-full blur-md group-hover:opacity-30 transition-opacity" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <Progress value={skill.level} className="h-2 glass" />
                      <div
                        className="absolute top-0 left-0 h-2 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          ))}
        </AnimatedGroup>

        {/* Technology Tags */}
        <AnimatedGroup preset="blur-slide">
          <Card className="relative overflow-hidden">
            <CardHeader className="relative z-10">
              <CardTitle className="text-xl text-center">Technologies I Work With</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="flex flex-wrap gap-3 justify-center">
                {technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="glass px-4 py-2 text-sm hover:bg-primary/20 hover:text-primary hover:scale-105 transition-all duration-200 cursor-default group"
                  >
                    <span className="relative z-10">{tech}</span>
                  </Badge>
                ))}
              </div>
            </CardContent>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-50" />
          </Card>
        </AnimatedGroup>
      </div>
    </section>
  )
}
