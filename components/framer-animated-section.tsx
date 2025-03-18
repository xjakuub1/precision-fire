"use client"

import { type ReactNode, useRef } from "react"
import { motion, useInView, type Variant } from "framer-motion"
import { cn } from "@/lib/utils"

interface FramerAnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  duration?: number
  once?: boolean
  amount?: number
}

export default function FramerAnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.5,
  once = true,
  amount = 0.3,
}: FramerAnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount })

  const getDirectionVariants = () => {
    const variants: Record<string, Variant> = {}

    switch (direction) {
      case "up":
        variants.hidden = { opacity: 0, y: 50 }
        variants.visible = { opacity: 1, y: 0 }
        break
      case "down":
        variants.hidden = { opacity: 0, y: -50 }
        variants.visible = { opacity: 1, y: 0 }
        break
      case "left":
        variants.hidden = { opacity: 0, x: 50 }
        variants.visible = { opacity: 1, x: 0 }
        break
      case "right":
        variants.hidden = { opacity: 0, x: -50 }
        variants.visible = { opacity: 1, x: 0 }
        break
      default:
        variants.hidden = { opacity: 0, y: 50 }
        variants.visible = { opacity: 1, y: 0 }
    }

    return variants
  }

  const variants = getDirectionVariants()

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

