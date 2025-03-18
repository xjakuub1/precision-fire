"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface Target {
  id: string
  x: number
  y: number
  size: number
  state: "active" | "hit" | "falling" | "removed"
  rotation: number
}

export default function AnimatedTargetsBackground({ className }: { className?: string }) {
  const [targets, setTargets] = useState<Target[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number>()
  const lastShotTimeRef = useRef<number>(0)
  const viewportSizeRef = useRef({ width: 0, height: 0 })
  const idCounterRef = useRef(0)
  const activeTargetsRef = useRef<Set<string>>(new Set())
  const isInitializedRef = useRef(false)
  const timeoutsRef = useRef<Map<string, NodeJS.Timeout>>(new Map())

  // Generate a unique ID for each target
  const generateUniqueId = () => {
    idCounterRef.current += 1
    return `target-${Date.now()}-${idCounterRef.current}`
  }

  // Cleanup function to clear all timeouts
  const clearAllTimeouts = () => {
    timeoutsRef.current.forEach((timeout) => {
      clearTimeout(timeout)
    })
    timeoutsRef.current.clear()
  }

  // Initialize targets
  useEffect(() => {
    if (isInitializedRef.current) return
    isInitializedRef.current = true

    // Get initial viewport size
    if (containerRef.current) {
      viewportSizeRef.current = {
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight,
      }
    } else {
      viewportSizeRef.current = {
        width: window.innerWidth,
        height: window.innerHeight,
      }
    }

    // Create initial targets with spacing
    const initialTargets: Target[] = []
    for (let i = 0; i < 8; i++) {
      const newTarget = createTargetWithSpacing(initialTargets)
      initialTargets.push(newTarget)
      activeTargetsRef.current.add(newTarget.id)
    }

    setTargets(initialTargets)

    // Handle window resize
    const handleResize = () => {
      if (containerRef.current) {
        viewportSizeRef.current = {
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        }
      } else {
        viewportSizeRef.current = {
          width: window.innerWidth,
          height: window.innerHeight,
        }
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      window.removeEventListener("resize", handleResize)
      clearAllTimeouts()
      isInitializedRef.current = false
    }
  }, [])

  // Animation loop
  useEffect(() => {
    const animate = (time: number) => {
      // Shoot a random target every 1-3 seconds
      if (time - lastShotTimeRef.current > Math.random() * 2000 + 1000) {
        shootRandomTarget()
        lastShotTimeRef.current = time
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  // Check if a target would overlap with existing targets
  const wouldOverlap = (newTarget: Target, existingTargets: Target[]): boolean => {
    // Calculate minimum distance between targets (sum of radii + buffer)
    const minDistanceBuffer = 30 // pixels, increased buffer to prevent targets from being too close

    for (const target of existingTargets) {
      // Calculate distance between centers (in pixels)
      const dx = ((newTarget.x - target.x) / 100) * viewportSizeRef.current.width
      const dy = ((newTarget.y - target.y) / 100) * viewportSizeRef.current.height
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
  const createTargetWithSpacing = (existingTargets: Target[]): Target => {
    let attempts = 0
    let newTarget: Target

    do {
      // Adjust the size range to be more consistent
      const size = Math.random() * 15 + 35 // 35-50px size range
      const id = generateUniqueId()

      newTarget = {
        id,
        // Ensure targets are within the visible area with margins
        x: Math.random() * 70 + 15, // percentage across screen (15-85%)
        y: Math.random() * 60 + 20, // percentage down screen (20-80%)
        size,
        state: "active",
        rotation: Math.random() * 10 - 5, // slight random rotation
      }

      attempts++
      // If we've tried too many times, increase the spacing between attempts
      if (attempts > 30) {
        // Adjust the position more drastically to find a free spot
        newTarget.x = attempts % 2 === 0 ? Math.random() * 30 + 10 : Math.random() * 30 + 60
        newTarget.y = attempts % 3 === 0 ? Math.random() * 30 + 10 : Math.random() * 30 + 60
      }
    } while (wouldOverlap(newTarget, existingTargets) && attempts < 100)

    // If we still couldn't find a spot, place it in a corner with a smaller size
    if (attempts >= 100) {
      const corners = [
        { x: 10, y: 10 },
        { x: 90, y: 10 },
        { x: 10, y: 90 },
        { x: 90, y: 90 },
      ]
      const corner = corners[Math.floor(Math.random() * corners.length)]
      newTarget.x = corner.x
      newTarget.y = corner.y
      newTarget.size = 30 // Smaller size
    }

    return newTarget
  }

  const shootRandomTarget = () => {
    setTargets((currentTargets) => {
      // Find active targets
      const activeTargets = currentTargets.filter((t) => t.state === "active")

      if (activeTargets.length === 0) return currentTargets

      // Select a random active target
      const targetIndex = Math.floor(Math.random() * activeTargets.length)
      const targetId = activeTargets[targetIndex].id

      // Update the target state to "hit"
      const updatedTargets = currentTargets.map((target) =>
        target.id === targetId ? { ...target, state: "hit" } : target,
      )

      // Schedule the target to start falling
      const fallingTimeout = setTimeout(() => {
        setTargets((current) =>
          current.map((target) => (target.id === targetId ? { ...target, state: "falling" } : target)),
        )

        // Schedule the target to be removed and replaced
        const removalTimeout = setTimeout(() => {
          setTargets((current) => {
            // Remove the target from active targets set
            activeTargetsRef.current.delete(targetId)

            // Remove the target
            const filtered = current.filter((t) => t.id !== targetId)

            // Add a new target with proper spacing
            const newTarget = createTargetWithSpacing(filtered)

            // Add the new target to active targets set
            activeTargetsRef.current.add(newTarget.id)

            return [...filtered, newTarget]
          })

          // Remove the timeout reference
          timeoutsRef.current.delete(`removal-${targetId}`)
        }, 1500) // Time to fall before being removed

        // Store the timeout reference
        timeoutsRef.current.set(`removal-${targetId}`, removalTimeout)

        // Remove the timeout reference
        timeoutsRef.current.delete(`falling-${targetId}`)
      }, 300) // Time to show hit state before falling

      // Store the timeout reference
      timeoutsRef.current.set(`falling-${targetId}`, fallingTimeout)

      return updatedTargets
    })
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

      {targets.map((target) => (
        <div
          key={target.id}
          className={cn(
            "absolute rounded-full transition-transform",
            target.state === "active" && "border-4 border-white",
            target.state === "hit" && "border-4 border-red-600 animate-pulse",
            target.state === "falling" && "border-4 border-red-600",
          )}
          style={{
            left: `${target.x}%`,
            top: `${target.y}%`,
            width: `${target.size}px`,
            height: `${target.size}px`,
            transform:
              target.state === "falling"
                ? `rotate(${target.rotation}deg) translateY(100vh)`
                : `rotate(${target.rotation}deg)`,
            transition:
              target.state === "falling" ? "transform 1.5s cubic-bezier(0.5, 0, 1, 1)" : "transform 0.3s ease",
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
          {target.state === "hit" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-full w-full animate-ping rounded-full bg-red-600 opacity-50"></div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

