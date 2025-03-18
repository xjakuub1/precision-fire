import { cn } from "@/lib/utils"

interface HUDElementsProps {
  className?: string
}

export default function HUDElements({ className }: HUDElementsProps) {
  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
      {/* HUD circles */}
      <div className="hud-element hud-rotate w-[300px] h-[300px] top-[-150px] right-[-150px] border-red-500/30"></div>
      <div className="hud-element hud-rotate-reverse w-[200px] h-[200px] top-[-100px] right-[-100px] border-red-500/20"></div>

      <div className="hud-element hud-rotate w-[400px] h-[400px] bottom-[-200px] left-[-200px] border-red-500/20"></div>
      <div className="hud-element hud-rotate-reverse w-[300px] h-[300px] bottom-[-150px] left-[-150px] border-red-500/30"></div>

      {/* Top right corner elements */}
      <div className="absolute top-4 right-4 flex flex-col items-end">
        <div className="text-xs text-red-500/70 font-mono mt-1">SYS.STATUS: OPERATIONAL</div>
      </div>

      {/* Bottom left corner elements */}
      <div className="absolute bottom-4 left-4">
        <div className="text-xs text-red-500/70 font-mono">PRECISION.FIRE // TACTICAL.SYSTEMS</div>
      </div>

      {/* Scanline effect */}
      <div className="scanline"></div>
    </div>
  )
}

