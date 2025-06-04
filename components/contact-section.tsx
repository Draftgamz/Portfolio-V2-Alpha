"use client"

import type React from "react"
import { useState } from "react"
import { AnimatedGroup } from "@/components/ui/animated-group"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone, Send, Sparkles, MessageCircle, Coffee, Clock, Star } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    })

    setIsSubmitting(false)

    // Reset form
    const form = e.target as HTMLFormElement
    form.reset()
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "draft@example.com",
      href: "mailto:draft@example.com",
      gradient: "from-blue-500 to-purple-500",
      description: "Best way to reach me",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      gradient: "from-emerald-500 to-cyan-500",
      description: "Available during business hours",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Available Worldwide",
      href: null,
      gradient: "from-pink-500 to-orange-500",
      description: "Remote work ready",
    },
  ]

  const features = [
    {
      icon: Clock,
      title: "Quick Response",
      description: "I typically respond within 24 hours",
    },
    {
      icon: Coffee,
      title: "Free Consultation",
      description: "Let's discuss your project over coffee (virtual or real!)",
    },
    {
      icon: Star,
      title: "Quality Focused",
      description: "Committed to delivering exceptional results",
    },
  ]

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-800/30 to-slate-900/50" />
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-600/10 via-purple-600/10 to-pink-600/10" />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-orb w-48 h-48 top-32 -left-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
        <div className="floating-orb w-64 h-64 bottom-32 -right-32 bg-gradient-to-br from-emerald-500/15 to-cyan-500/15" />
        <div className="floating-orb w-36 h-36 top-1/2 right-1/4 bg-gradient-to-br from-pink-500/20 to-orange-500/20" />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <AnimatedGroup preset="blur-slide" className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="glass-card px-6 py-3 hover:scale-105 transition-all duration-500 group">
              <div className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-semibold text-white text-sm">Let's connect</span>
              </div>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-none">
            <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Get In
            </span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
            technology.
          </p>
        </AnimatedGroup>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <AnimatedGroup preset="blur-slide">
            <div className="space-y-8">
              {/* Main Contact Card */}
              <Card className="card-premium">
                <CardContent className="p-10 relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <Sparkles className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                      Let's Connect
                    </h3>
                  </div>

                  <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                    Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear
                    from you. Feel free to reach out through any of the channels below.
                  </p>

                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="group">
                        <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300">
                          <div
                            className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r ${info.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                          >
                            <info.icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-white text-lg">{info.title}</p>
                            {info.href ? (
                              <a
                                href={info.href}
                                className="text-slate-300 hover:text-blue-300 transition-colors duration-200 text-base"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-slate-300 text-base">{info.value}</p>
                            )}
                            <p className="text-slate-400 text-sm">{info.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-50 rounded-2xl" />
              </Card>

              {/* Features Grid */}
              <div className="grid md:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <Card key={index} className="card-premium group hover:scale-105 transition-all duration-500">
                    <CardContent className="p-6 text-center relative z-10">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-semibold mb-2 text-white group-hover:text-blue-200 transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors">
                        {feature.description}
                      </p>
                    </CardContent>
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  </Card>
                ))}
              </div>
            </div>
          </AnimatedGroup>

          {/* Contact Form */}
          <AnimatedGroup preset="blur-slide">
            <Card className="card-premium">
              <CardHeader className="relative z-10 pb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 flex items-center justify-center">
                    <Send className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-bold text-white">Send Me a Message</CardTitle>
                </div>
              </CardHeader>

              <CardContent className="relative z-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-semibold text-white">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        className="glass border-white/20 focus:border-blue-400/50 transition-colors bg-white/5 text-white placeholder:text-slate-400"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-semibold text-white">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        className="glass border-white/20 focus:border-blue-400/50 transition-colors bg-white/5 text-white placeholder:text-slate-400"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold text-white">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="glass border-white/20 focus:border-blue-400/50 transition-colors bg-white/5 text-white placeholder:text-slate-400"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-semibold text-white">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      className="glass border-white/20 focus:border-blue-400/50 transition-colors bg-white/5 text-white placeholder:text-slate-400"
                      placeholder="Let's work together!"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-semibold text-white">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell me about your project or just say hello!"
                      className="glass border-white/20 focus:border-blue-400/50 transition-colors resize-none bg-white/5 text-white placeholder:text-slate-400"
                    />
                  </div>

                  <Button type="submit" variant="default" size="xl" className="w-full group" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span className="font-semibold">Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                        <span className="font-semibold">Send Message</span>
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/5 to-orange-600/5 opacity-50 rounded-2xl" />
            </Card>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  )
}
