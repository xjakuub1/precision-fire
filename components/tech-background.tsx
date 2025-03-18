"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface TechBackgroundProps {
  className?: string
  density?: number
  speed?: number
  color?: string
}

interface Particle {
  id: number
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export default function TechBackground({
  className,
  density = 50,
  speed = 1,
  color = "rgba(255, 59, 48, 0.5)",
}: TechBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationFrameRef = useRef<number>()
  const lastParticleId = useRef<number>(0)

  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  })

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Initialize canvas and context
  useEffect(() => {
    if (!canvasRef.current) return

    canvasRef.current.width = dimensions.width
    canvasRef.current.height = dimensions.height
    
    const context = canvasRef.current.getContext("2d")
    if (!context) return
    
    ctxRef.current = context
  }, [dimensions])

  // Create a new particle with unique ID
  const createParticle = (canvas: HTMLCanvasElement): Particle => {
    lastParticleId.current += 1
    return {
      id: lastParticleId.current,
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * speed,
      speedY: (Math.random() - 0.5) * speed,
      opacity: Math.random() * 0.5 + 0.5
    }
  }

  // Initialize particles
  useEffect(() => {
    if (!canvasRef.current) return

    // Reset particle ID counter when recreating particles
    lastParticleId.current = 0
    
    const newParticles: Particle[] = []
    for (let i = 0; i < density; i++) {
      newParticles.push(createParticle(canvasRef.current))
    }
    particlesRef.current = newParticles

    // Cleanup function to reset particle ID counter
    return () => {
      particlesRef.current = []
      lastParticleId.current = 0
    }
  }, [density, speed])

  // Animation loop
  useEffect(() => {
    if (!ctxRef.current || !canvasRef.current || particlesRef.current.length === 0) return

    const ctx = ctxRef.current
    const canvas = canvasRef.current

    const connect = () => {
      const maxDistance = 150
      const particles = particlesRef.current

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 
              Math.min(particles[i].opacity, particles[j].opacity)

            ctx.beginPath()
            ctx.strokeStyle = color
            ctx.globalAlpha = opacity
            ctx.lineWidth = 1
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
      ctx.globalAlpha = 1
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current = particlesRef.current.map(particle => {
        let newX = particle.x + particle.speedX
        let newY = particle.y + particle.speedY

        // Improved boundary handling
        if (newX < 0) {
          newX = canvas.width
          particle.opacity = Math.random() * 0.5 + 0.5
        } else if (newX > canvas.width) {
          newX = 0
          particle.opacity = Math.random() * 0.5 + 0.5
        }

        if (newY < 0) {
          newY = canvas.height
          particle.opacity = Math.random() * 0.5 + 0.5
        } else if (newY > canvas.height) {
          newY = 0
          particle.opacity = Math.random() * 0.5 + 0.5
        }

        return { ...particle, x: newX, y: newY }
      })

      // Draw particles
      particlesRef.current.forEach(particle => {
        ctx.fillStyle = color
        ctx.globalAlpha = particle.opacity
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })

      connect()
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [color])

  return <canvas ref={canvasRef} className={cn("absolute inset-0 -z-10", className)} />
}

