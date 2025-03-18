"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface Target {
  id: number
  x: number
  y: number
  size: number
  rotation: number
}

export default function FramerAnimatedTargets({ className }: { className?: string }) {
  const [targets, setTargets] = useState<Target[]>([])
  const [hitTargets, setHitTargets] = useState<number[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<NodeJS.Timeout>()

  // Initialize targets
  useEffect(() => {
    // Clear any existing targets first
    setTargets([])

    // Create initial targets with spacing
    const initialTargets: Target[] = []
    for (let i = 0; i < 8; i++) {
      const newTarget = createTargetWithSpacing(i, initialTargets)
      initialTargets.push(newTarget)
    }

    setTargets(initialTargets)

    // Start shooting targets
    startShootingTargets()

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [])

  // Check if a target would overlap with existing targets
  const wouldOverlap = (newTarget: Target, existingTargets: Target[]): boolean => {
    // Calculate minimum distance between targets (sum of radii + buffer)
    const minDistanceBuffer = 20 // pixels, converted to percentage of viewport

    for (const target of existingTargets) {
      // Calculate distance between centers
      const dx = ((newTarget.x - target.x) * window.innerWidth) / 100
      const dy = ((newTarget.y - target.y) * window.innerHeight) / 100
      const distance = Math.sqrt(dx * dx + dy * dy)

      // Calculate minimum required distance (sum of radii + buffer)
      const minDistance = newTarget.size / 2 + target.size / 2 + minDistanceBuffer

      if (distance < minDistance) {
        return true
      }
    }

    return false
  }

  // Create a target with proper spacing
  const createTargetWithSpacing = (id: number, existingTargets: Target[]): Target => {
    let attempts = 0
    let newTarget: Target

    do {
      newTarget = {
        id,
        x: Math.random() * 80 + 10, // percentage across screen (with margin)
        y: Math.random() * 60 + 20, // percentage down screen (avoid very top and bottom)
        size: Math.random() * 20 + 40, // size in pixels (smaller range)
        rotation: Math.random() * 10 - 5, // slight random rotation
      }

      attempts++
    } while (wouldOverlap(newTarget, existingTargets) && attempts < 50)

    return newTarget
  }

  const startShootingTargets = () => {
    const shootRandomTarget = () => {
      // Find targets that haven't been hit
      const availableTargets = targets.filter((t) => !hitTargets.includes(t.id))

      if (availableTargets.length > 0) {
        // Select a random target
        const targetIndex = Math.floor(Math.random() * availableTargets.length)
        const targetId = availableTargets[targetIndex].id

        // Mark target as hit
        setHitTargets((prev) => [...prev, targetId])

        // Remove target and add a new one after animation completes
        setTimeout(() => {
          setTargets((prev) => {
            const filtered = prev.filter((t) => t.id !== targetId)
            const newTarget = createTargetWithSpacing(Date.now(), filtered)
            return [...filtered, newTarget]
          })

          setHitTargets((prev) => prev.filter((id) => id !== targetId))
        }, 2000)
      }

      // Schedule next shot
      const nextShotDelay = Math.random() * 2000 + 1000 // 1-3 seconds
      timerRef.current = setTimeout(shootRandomTarget, nextShotDelay)
    }

    // Start the process
    timerRef.current = setTimeout(shootRandomTarget, 1000)
  }

  return (
    <div ref={containerRef} className={cn("absolute inset-0 overflow-hidden z-0", className)}>
      {/* Background pattern */}
      <div className="absolute inset-0 bg-zinc-900 bg-opacity-90"></div>

      {/* Grid lines for shooting range effect */}
      <div className="absolute inset-0 flex flex-col justify-between opacity-20">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={`h-${i}`} className="w-full h-px bg-white"></div>
        ))}
      </div>
      <div className="absolute inset-0 flex flex-row justify-between opacity-20">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={`v-${i}`} className="h-full w-px bg-white"></div>
        ))}
      </div>

      <AnimatePresence>
        {targets.map((target) => {
          const isHit = hitTargets.includes(target.id)

          return (
            <motion.div
              key={target.id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: isHit ? [0, 0] : 0,
                y: isHit ? [0, window.innerHeight] : 0,
                rotate: isHit ? [target.rotation, target.rotation + (Math.random() > 0.5 ? 45 : -45)] : target.rotation,
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
                x: { duration: 1.5, ease: "easeIn" },
                y: { duration: 1.5, ease: "easeIn" },
                rotate: { duration: 1.5, ease: "easeIn" },
              }}
              className={cn("absolute rounded-full border-4", isHit ? "border-red-600" : "border-white")}
              style={{
                left: `${target.x}%`,
                top: `${target.y}%`,
                width: `${target.size}px`,
                height: `${target.size}px`,
                zIndex: 5,
              }}
            >
              {/* Target rings */}
              <div className="absolute inset-2 rounded-full border-2 border-white"></div>
              <div className="absolute inset-4 rounded-full border-2 border-white"></div>
              <div className="absolute inset-6 rounded-full border-2 border-white"></div>

              {/* Bullseye */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-1/5 w-1/5 rounded-full bg-red-600"></div>
              </div>

              {/* Hit effect */}
              {isHit && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1.5, 0.8] }}
                  transition={{ duration: 0.5, times: [0, 0.3, 1] }}
                >
                  <div className="h-full w-full rounded-full bg-red-600"></div>
                </motion.div>
              )}
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}

