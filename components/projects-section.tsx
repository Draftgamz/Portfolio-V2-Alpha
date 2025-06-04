"use client"

import { AnimatedGroup } from "@/components/ui/animated-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Code, Zap, Star, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing, and admin dashboard with real-time analytics.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "TypeScript", "Prisma", "Stripe", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
      status: "Live",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
      status: "Live",
      gradient: "from-emerald-500 to-cyan-500",
    },
    {
      title: "Weather Dashboard",
      description:
        "A beautiful weather application that provides detailed forecasts, interactive maps, and location-based weather alerts.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false,
      status: "Live",
      gradient: "from-pink-500 to-orange-500",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing my projects and skills, built with modern web technologies and best practices.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false,
      status: "Live",
      gradient: "from-violet-500 to-indigo-500",
    },
    {
      title: "Chat Application",
      description:
        "Real-time chat application with multiple rooms, file sharing, and emoji support. Built with modern web technologies.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false,
      status: "In Development",
      gradient: "from-blue-500 to-emerald-500",
    },
    {
      title: "Blog Platform",
      description:
        "A modern blog platform with markdown support, comment system, and SEO optimization for content creators.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false,
      status: "Coming Soon",
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-800/30 to-slate-900/50" />
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-emerald-600/10 via-cyan-600/10 to-blue-600/10" />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-orb w-40 h-40 top-32 -right-20 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20" />
        <div className="floating-orb w-56 h-56 bottom-32 -left-28 bg-gradient-to-br from-blue-500/15 to-purple-500/15" />
        <div className="floating-orb w-32 h-32 top-1/2 left-1/4 bg-gradient-to-br from-pink-500/20 to-orange-500/20" />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <AnimatedGroup preset="blur-slide" className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="glass-card px-6 py-3 hover:scale-105 transition-all duration-500 group">
              <div className="flex items-center gap-3">
                <Code className="h-4 w-4 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-semibold text-white text-sm">My work</span>
              </div>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-none">
            <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Featured
            </span>
            <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Here are some of my favorite projects that showcase my skills and passion for development.
          </p>
        </AnimatedGroup>

        {/* Featured Projects */}
        <AnimatedGroup preset="blur-slide" className="grid lg:grid-cols-2 gap-8 mb-20">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="card-premium group overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Status and feature badges */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <Badge
                    variant="secondary"
                    className={`glass text-xs font-semibold ${
                      project.status === "Live"
                        ? "text-emerald-400 border-emerald-400/30"
                        : project.status === "In Development"
                          ? "text-yellow-400 border-yellow-400/30"
                          : "text-blue-400 border-blue-400/30"
                    }`}
                  >
                    {project.status}
                  </Badge>
                  <div className="glass-card p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Star className="h-4 w-4 text-yellow-400" />
                  </div>
                </div>

                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-3 group-hover:text-blue-200 transition-colors text-white">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed text-slate-300 group-hover:text-slate-200 transition-colors">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="glass text-xs hover:bg-blue-500/20 hover:text-blue-200 transition-colors cursor-default"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button asChild size="sm" variant="outline" className="flex-1 group/btn">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      <span>Code</span>
                    </Link>
                  </Button>
                  <Button asChild size="sm" variant="default" className="flex-1 group/btn">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      <span>Live Demo</span>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </AnimatedGroup>

        {/* Other Projects */}
        <AnimatedGroup preset="blur-slide" className="mb-12">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-200 to-white bg-clip-text text-transparent">
              More Projects
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Additional projects that demonstrate my versatility and continuous learning journey.
            </p>
          </div>
        </AnimatedGroup>

        <AnimatedGroup preset="blur-slide" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <Card key={index} className="card-premium group hover:scale-105 transition-all duration-500">
              <div className="aspect-video relative overflow-hidden rounded-t-2xl">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <Badge
                    variant="secondary"
                    className={`glass text-xs font-semibold ${
                      project.status === "Live"
                        ? "text-emerald-400 border-emerald-400/30"
                        : project.status === "In Development"
                          ? "text-yellow-400 border-yellow-400/30"
                          : "text-blue-400 border-blue-400/30"
                    }`}
                  >
                    {project.status}
                  </Badge>
                </div>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-500`}
                />
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg group-hover:text-blue-200 transition-colors text-white">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed text-slate-300 group-hover:text-slate-200 transition-colors">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="glass text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="glass text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button asChild size="sm" variant="outline" className="flex-1 group/btn">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3 group-hover/btn:scale-110 transition-transform" />
                      <span>Code</span>
                    </Link>
                  </Button>
                  <Button asChild size="sm" variant="default" className="flex-1 group/btn">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3 group-hover/btn:scale-110 transition-transform" />
                      <span>Demo</span>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </AnimatedGroup>

        {/* Call to Action */}
        <AnimatedGroup preset="blur-slide" className="text-center mt-16">
          <div className="card-premium p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="h-6 w-6 text-emerald-400" />
              <h3 className="text-2xl md:text-3xl font-bold text-white">Have a project in mind?</h3>
              <Sparkles className="h-6 w-6 text-blue-400" />
            </div>
            <p className="text-slate-300 mb-8 text-lg leading-relaxed">
              I'm always excited to work on new and challenging projects. Let's bring your ideas to life!
            </p>
            <Button asChild size="lg" variant="default" className="group">
              <Link href="#contact">
                <Zap className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Let's Work Together</span>
              </Link>
            </Button>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  )
}
