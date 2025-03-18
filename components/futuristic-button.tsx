"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface FuturisticButtonProps {
  children: ReactNode
  className?: string
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  onClick?: () => void
  disabled?: boolean
  type?: "button" | "submit" | "reset"
}

export default function FuturisticButton({
  children,
  className,
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
  type = "button",
}: FuturisticButtonProps) {
  const baseStyles =
    "relative overflow-hidden font-medium transition-all duration-300 text-futuristic inline-flex items-center justify-center"

  const variantStyles = {
    primary: "bg-red-600 hover:bg-red-700 text-white border border-red-500",
    secondary: "bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700",
    outline: "bg-transparent hover:bg-red-600/10 text-red-500 border border-red-500",
  }

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  }

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"

  return (
    <button
      type={type}
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], disabledStyles, "btn-futuristic", className)}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="relative z-10 flex items-center">{children}</span>
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-700"></span>
    </button>
  )
}

