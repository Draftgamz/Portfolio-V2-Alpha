"use client"

import React from "react"
import Link from "next/link"
import { Menu, X, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const menuItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header>
      <nav data-state={menuState && "active"} className="fixed z-50 w-full px-4 group">
        <div className={cn("mx-auto mt-4 max-w-6xl transition-all duration-300", isScrolled ? "max-w-4xl" : "")}>
          <div className="frosted-nav rounded-2xl px-6 py-4 border border-white/20">
            <div className="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0">
              <div className="flex w-full justify-between lg:w-auto">
                <Link href="/" aria-label="home" className="flex items-center space-x-3 group">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <Code2 className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute inset-0 w-10 h-10 bg-blue-500/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Draft
                  </span>
                </Link>

                <Button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState ? "Close Menu" : "Open Menu"}
                  variant="ghost"
                  size="icon"
                  className="lg:hidden hover:bg-white/10"
                >
                  <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                  <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                </Button>
              </div>

              <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                <ul className="flex gap-2 text-sm">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="nav-link text-slate-300 hover:text-white block duration-200 relative group px-4 py-2 rounded-full hover:bg-white/10 transition-all"
                      >
                        <span className="relative z-10">{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="frosted-card group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 p-6 shadow-2xl md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
                <div className="lg:hidden">
                  <ul className="space-y-6 text-base">
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="text-slate-300 hover:text-white block duration-200 px-4 py-2 rounded-full hover:bg-white/10 transition-all"
                          onClick={() => setMenuState(false)}
                        >
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                  <Button asChild variant="nav-cta" size="sm">
                    <Link href="#contact">
                      <span>Get In Touch</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
