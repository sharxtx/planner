'use client'

import { useCalendar } from './CalendarContext'
import { EventItem } from './EventItem'
import {
    sortEventsByTime,
    format,
    isSameDay,
    startOfDay,
    addDays,
} from '@/lib/calendar-utils'
import type { CalendarEvent } from '@/lib/calendar-types'

interface AgendaViewProps {
    daysToShow?: number
    onEventClick?: () => void
}

export function AgendaView({ daysToShow = 30, onEventClick }: AgendaViewProps) {
    const { currentDate, events } = useCalendar()

    // Get events for the next N days, grouped by date
    const eventsByDay: Map<string, CalendarEvent[]> = new Map()
    const sortedEvents = sortEventsByTime(events)

    for (let i = 0; i < daysToShow; i++) {
        const day = addDays(startOfDay(currentDate), i)
        const dayKey = format(day, 'yyyy-MM-dd')
        const dayEvents = sortedEvents.filter(event => isSameDay(event.start, day))

        if (dayEvents.length > 0) {
            eventsByDay.set(dayKey, dayEvents)
        }
    }

    if (eventsByDay.size === 0) {
        return (
            <div className="flex h-full items-center justify-center text-muted-foreground">
                <div className="text-center">
                    <div className="text-6xl mb-4">📅</div>
                    <div className="text-lg font-medium">No upcoming events</div>
                    <div className="text-sm">Click on the calendar to add events</div>
                </div>
            </div>
        )
    }

    return (
        <div className="h-full overflow-y-auto">
            <div className="divide-y divide-[var(--border)]">
                {Array.from(eventsByDay.entries()).map(([dayKey, dayEvents]) => {
                    const day = new Date(dayKey)

                    return (
                        <div key={dayKey} className="py-4">
                            {/* Day header */}
                            <div className="mb-3 flex items-center gap-3">
                                <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <div className="text-xs font-medium uppercase">
                                        {format(day, 'EEE')}
                                    </div>
                                    <div className="text-lg font-bold">
                                        {format(day, 'd')}
                                    </div>
                                </div>
                                <div className="text-lg font-semibold">
                                    {format(day, 'MMMM d, yyyy')}
                                </div>
                            </div>

                            {/* Events for this day */}
                            <div className="ml-15 space-y-2 pl-[60px]">
                                {dayEvents.map(event => (
                                    <EventItem
                                        key={event.id}
                                        event={event}
                                        showTime
                                        onClick={onEventClick}
                                    />
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
