"use client"

import { useRef, useEffect, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  threshold?: number
  duration?: number
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  threshold = 0.1,
  duration = 0.5,
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              section.style.opacity = "1"
              section.style.transform = "translate(0, 0)"
            }, delay * 1000)
            observer.unobserve(section)
          }
        })
      },
      { threshold },
    )

    observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [delay, threshold])

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return "translate(0, 50px)"
      case "down":
        return "translate(0, -50px)"
      case "left":
        return "translate(50px, 0)"
      case "right":
        return "translate(-50px, 0)"
      default:
        return "translate(0, 50px)"
    }
  }

  return (
    <div
      ref={sectionRef}
      className={cn(className)}
      style={{
        opacity: 0,
        transform: getInitialTransform(),
        transition: `opacity ${duration}s ease-out, transform ${duration}s ease-out`,
      }}
    >
      {children}
    </div>
  )
}

