"use client"

import type React from "react"
import { useState } from "react"
import { AnimatedGroup } from "@/components/ui/animated-group"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone, Send, Sparkles, MessageCircle } from "lucide-react"
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
      color: "text-primary",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      color: "text-accent",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Available Worldwide",
      href: null,
      color: "text-secondary",
    },
  ]

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 relative">
        <AnimatedGroup preset="blur-slide" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <MessageCircle className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">Let's connect</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium mb-6 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
            technology.
          </p>
        </AnimatedGroup>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <AnimatedGroup preset="blur-slide">
            <div className="space-y-8">
              <Card className="relative overflow-hidden">
                <CardContent className="p-8 relative z-10">
                  <h3 className="text-2xl font-medium mb-6 text-primary">Let's Connect</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear
                    from you. Feel free to reach out through any of the channels below.
                  </p>

                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-center gap-4 group">
                        <div className="flex-shrink-0 w-12 h-12 glass rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                          <info.icon className={`h-5 w-5 ${info.color}`} />
                        </div>
                        <div>
                          <p className="font-medium">{info.title}</p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-muted-foreground hover:text-primary transition-colors duration-200"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-50" />
              </Card>

              <Card className="relative overflow-hidden">
                <CardContent className="p-8 relative z-10">
                  <h4 className="font-medium mb-4 text-accent">Why Work With Me?</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      Fresh perspective and innovative solutions
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      Dedicated to delivering high-quality work
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      Quick learner and adaptable to new technologies
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      Passionate about creating user-friendly experiences
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      Reliable communication and project updates
                    </li>
                  </ul>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-50" />
              </Card>
            </div>
          </AnimatedGroup>

          {/* Contact Form */}
          <AnimatedGroup preset="blur-slide">
            <Card className="relative overflow-hidden">
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-accent" />
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-medium">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        className="glass border-white/20 focus:border-primary/50 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        className="glass border-white/20 focus:border-primary/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="glass border-white/20 focus:border-primary/50 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      className="glass border-white/20 focus:border-primary/50 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell me about your project or just say hello!"
                      className="glass border-white/20 focus:border-primary/50 transition-colors resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full group relative overflow-hidden" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-50" />
            </Card>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  )
}
