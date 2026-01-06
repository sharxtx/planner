'use client'

import { useCalendar } from './CalendarContext'
import { EventItem } from './EventItem'
import {
    getHoursOfDay,
    getEventsForDay,
    calculateEventPosition,
    positionEvents,
    setTimeOnDate,
    format,
} from '@/lib/calendar-utils'

interface DayViewProps {
    onSlotClick?: (start: Date, end: Date) => void
    onEventClick?: () => void
}

export function DayView({ onSlotClick, onEventClick }: DayViewProps) {
    const { currentDate, events, addEvent } = useCalendar()
    const hours = getHoursOfDay()
    const dayEvents = positionEvents(getEventsForDay(events, currentDate))

    const handleSlotClick = (hour: number) => {
        const start = setTimeOnDate(currentDate, hour)
        const end = setTimeOnDate(currentDate, hour + 1)

        if (onSlotClick) {
            onSlotClick(start, end)
        } else {
            const title = window.prompt('New event title')
            if (title) {
                addEvent({ title, start, end, color: 'blue' })
            }
        }
    }

    return (
        <div className="flex h-full flex-col overflow-hidden">
            {/* Header */}
            <div className="flex shrink-0 border-b border-[var(--border)]">
                <div className="w-16 shrink-0 border-r border-[var(--border)]" />
                <div className="flex-1 py-4 text-center">
                    <div className="text-sm font-medium text-muted-foreground">
                        {format(currentDate, 'EEEE')}
                    </div>
                    <div className="mt-1 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                        {format(currentDate, 'd')}
                    </div>
                </div>
            </div>

            {/* Time grid */}
            <div className="flex flex-1 overflow-y-auto">
                {/* Time labels */}
                <div className="w-16 shrink-0 border-r border-[var(--border)]">
                    {hours.map(hour => (
                        <div
                            key={hour}
                            className="h-16 border-b border-[var(--border)] pr-2 text-right text-xs text-muted-foreground"
                        >
                            {format(setTimeOnDate(new Date(), hour), 'h a')}
                        </div>
                    ))}
                </div>

                {/* Day column */}
                <div className="relative flex-1">
                    {/* Hour slots */}
                    {hours.map(hour => (
                        <div
                            key={hour}
                            onClick={() => handleSlotClick(hour)}
                            className="h-16 border-b border-[var(--border)] cursor-pointer hover:bg-accent/50 transition-colors"
                        />
                    ))}

                    {/* Events overlay */}
                    <div className="absolute inset-0 pointer-events-none">
                        {dayEvents.map(event => (
                            <div
                                key={event.id}
                                className="absolute pointer-events-auto px-1"
                                style={{
                                    top: `${event.position.top}%`,
                                    height: `${event.position.height}%`,
                                    left: `${event.position.left}%`,
                                    width: `${event.position.width}%`,
                                }}
                            >
                                <EventItem
                                    event={event}
                                    showTime
                                    className="h-full"
                                    onClick={onEventClick}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
