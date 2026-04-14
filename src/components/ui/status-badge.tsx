import * as React from "react"
import { cn } from "@/lib/utils"

export type StatusType = 'Active' | 'Inactive' | 'Connected' | 'Disconnected' | 'Ready' | 'NotReady' | 'SchedulingDisabled'

const STATUS_STYLE: Record<StatusType, string> = {
  Active:              'bg-emerald-50 text-emerald-700',
  Connected:           'bg-emerald-50 text-emerald-700',
  Ready:               'bg-emerald-50 text-emerald-700',
  Inactive:            'bg-gray-100 text-gray-500',
  Disconnected:        'bg-red-50 text-red-600',
  NotReady:            'bg-red-50 text-red-600',
  SchedulingDisabled:  'bg-amber-50 text-amber-600',
}

const DOT_STYLE: Record<StatusType, string> = {
  Active: 'bg-emerald-500', Connected: 'bg-emerald-500', Ready: 'bg-emerald-500',
  Inactive: 'bg-gray-400', Disconnected: 'bg-red-500', NotReady: 'bg-red-500', SchedulingDisabled: 'bg-amber-500',
}

export interface StatusBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  status: StatusType
}

function StatusBadge({ status, className, ...props }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        'flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full',
        STATUS_STYLE[status],
        className
      )}
      {...props}
    >
      <span className={cn('w-1.5 h-1.5 rounded-full', DOT_STYLE[status])} />
      {status}
    </span>
  )
}

export { StatusBadge }
