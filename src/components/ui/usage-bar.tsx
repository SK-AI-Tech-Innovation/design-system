import * as React from "react"
import { cn } from "@/lib/utils"

export interface UsageBarProps extends React.HTMLAttributes<HTMLDivElement> {
  used: number
  total: number
  color?: string
}

function UsageBar({ used, total, color = 'bg-primary', className, ...props }: UsageBarProps) {
  const pct = total > 0 ? Math.min(100, Math.round((used / total) * 100)) : 0
  const barColor = pct >= 90 ? 'bg-red-500' : pct >= 70 ? 'bg-amber-500' : color

  return (
    <div className={cn("flex items-center gap-2", className)} {...props}>
      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={cn("h-full rounded-full transition-all", barColor)}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-[11px] text-gray-500 w-8 text-right">{pct}%</span>
    </div>
  )
}

export { UsageBar }
