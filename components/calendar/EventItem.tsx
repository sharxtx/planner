'use client'

import { motion } from 'framer-motion'

import { useCalendar } from './CalendarContext'
import { EVENT_COLORS } from '@/lib/calendar-types'
import type { CalendarEvent } from '@/lib/calendar-types'
import { formatTime } from '@/lib/calendar-utils'

import { cn } from '@/lib/utils'

interface EventItemProps {
    event: CalendarEvent
    compact?: boolean
    showTime?: boolean
    className?: string
    onClick?: () => void
}

export function EventItem({ event, compact = false, showTime = false, className, onClick }: EventItemProps) {
    const { selectEvent } = useCalendar()
    const colorConfig = EVENT_COLORS[event.color || 'blue']

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation()
        selectEvent(event)
        onClick?.()
    }

    if (compact) {
        return (
            <motion.button
                whileHover={{ scale: 1.02, filter: 'brightness(1.1)' }}
                whileTap={{ scale: 0.98 }}
                onClick={handleClick}
                className={cn(
                    "w-full text-left truncate rounded px-1.5 py-0.5 text-xs font-medium cursor-pointer",
                    className
                )}
                style={{ backgroundColor: colorConfig.bg, color: colorConfig.text }}
            >
                {event.title}
            </motion.button>
        )
    }

    return (
        <motion.button
            whileHover={{ scale: 1.02, filter: 'brightness(1.1)', zIndex: 10 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleClick}
            className={cn(
                "flex w-full flex-col items-start justify-start overflow-hidden rounded-md px-2 py-1 text-left shadow-sm cursor-pointer",
                className
            )}
            style={{ backgroundColor: colorConfig.bg, color: colorConfig.text }}
        >
            <div className="w-full text-xs font-semibold leading-tight">
                {event.title}
            </div>
            {showTime && (
                <div className="mt-0.5 w-full truncate text-[10px] uppercase opacity-90">
                    {formatTime(event.start)} - {formatTime(event.end)}
                </div>
            )}
        </motion.button>
    )
}
