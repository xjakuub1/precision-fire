import type { SVGProps } from "react"

interface LogoProps extends SVGProps<SVGSVGElement> {}

export default function Logo({ className, ...props }: LogoProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className} {...props}>
      {/* Scope outer circle */}
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="4" />

      {/* Scope inner circle */}
      <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="3" />

      {/* Scope crosshairs */}
      <line x1="50" y1="15" x2="50" y2="85" stroke="currentColor" strokeWidth="2" />
      <line x1="15" y1="50" x2="85" y2="50" stroke="currentColor" strokeWidth="2" />

      {/* Flames (stylized) */}
      <path d="M20,75 Q25,65 20,55 Q25,60 30,55 Q35,65 30,75 Z" fill="#FF4136" stroke="none" />
      <path d="M35,80 Q40,70 35,60 Q40,65 45,60 Q50,70 45,80 Z" fill="#FF4136" stroke="none" />
      <path d="M50,85 Q55,75 50,65 Q55,70 60,65 Q65,75 60,85 Z" fill="#FF4136" stroke="none" />
      <path d="M65,80 Q70,70 65,60 Q70,65 75,60 Q80,70 75,80 Z" fill="#FF4136" stroke="none" />

      {/* Center dot */}
      <circle cx="50" cy="50" r="5" fill="#FF4136" />
    </svg>
  )
}

