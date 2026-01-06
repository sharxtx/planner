'use client'

import { useCalendar } from './CalendarContext'
import { EVENT_COLORS } from '@/lib/calendar-types'
import type { CalendarEvent } from '@/lib/calendar-types'
import { formatTime } from '@/lib/calendar-utils'

interface EventItemProps {
    event: CalendarEvent
    compact?: boolean
    showTime?: boolean
    onClick?: () => void
}

export function EventItem({ event, compact = false, showTime = false, onClick }: EventItemProps) {
    const { selectEvent } = useCalendar()
    const colorConfig = EVENT_COLORS[event.color || 'blue']

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation()
        selectEvent(event)
        onClick?.()
    }

    if (compact) {
        return (
            <button
                onClick={handleClick}
                className="w-full text-left truncate rounded px-1.5 py-0.5 text-xs font-medium transition-all hover:brightness-110"
                style={{ backgroundColor: colorConfig.bg, color: colorConfig.text }}
            >
                {event.title}
            </button>
        )
    }

    return (
        <button
            onClick={handleClick}
            className="w-full text-left rounded-lg px-3 py-2 text-sm font-medium transition-all hover:brightness-110 hover:shadow-md"
            style={{ backgroundColor: colorConfig.bg, color: colorConfig.text }}
        >
            <div className="font-semibold truncate">{event.title}</div>
            {showTime && (
                <div className="text-xs opacity-80">
                    {formatTime(event.start)} - {formatTime(event.end)}
                </div>
            )}
        </button>
    )
}
