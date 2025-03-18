import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface FuturisticCardProps {
  children: ReactNode
  className?: string
  glowEffect?: boolean
  techPattern?: boolean
}

export default function FuturisticCard({
  children,
  className,
  glowEffect = false,
  techPattern = false,
}: FuturisticCardProps) {
  return (
    <div
      className={cn(
        "futuristic-card rounded-md overflow-hidden relative",
        glowEffect && "glow-border",
        techPattern && "tech-pattern-subtle",
        className,
      )}
    >
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-red-500"></div>
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-red-500"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-red-500"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-red-500"></div>

      {children}
    </div>
  )
}

