import Link from "next/link"
import { Code2, Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16 relative">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Code2 className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <div className="absolute inset-0 h-8 w-8 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="text-xl font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Draft
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              A passionate 16-year-old developer creating amazing digital experiences with modern web technologies.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 animate-pulse" />
              <span>and lots of coffee</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-medium text-primary">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              {[
                { name: "About", href: "#about" },
                { name: "Projects", href: "#projects" },
                { name: "Skills", href: "#skills" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm group flex items-center gap-2"
                >
                  <div className="w-1 h-1 bg-primary rounded-full group-hover:scale-150 transition-transform" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h4 className="font-medium text-accent">Connect</h4>
            <div className="flex space-x-3">
              <Button asChild size="icon" variant="glass" className="group">
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button asChild size="icon" variant="glass" className="group">
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button asChild size="icon" variant="glass" className="group">
                <Link href="mailto:draft@example.com">
                  <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
            <div className="glass-card p-4">
              <p className="text-xs text-muted-foreground mb-2">Currently listening to:</p>
              <p className="text-sm font-medium text-primary">Lo-fi Hip Hop Radio 🎵</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Draft. Built with Next.js, Tailwind CSS, and a lot of passion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
