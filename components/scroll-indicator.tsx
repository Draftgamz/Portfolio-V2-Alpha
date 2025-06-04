"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface ScrollIndicatorProps {
  text?: string
  className?: string
}

export function ScrollIndicator({ text = "Scroll to explore", className }: ScrollIndicatorProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={cn(
        "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-500",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none",
        className,
      )}
    >
      <span className="text-xs font-medium text-slate-400">{text}</span>
      <div className="w-px h-8 bg-gradient-to-b from-slate-400 to-transparent" />
      <ChevronDown className="h-4 w-4 text-slate-400 animate-bounce" />
    </div>
  )
}
