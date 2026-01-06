'use client'

import { useCalendar } from './CalendarContext'
import { EventItem } from './EventItem'
import {
    getWeekDays,
    getHoursOfDay,
    getEventsForDay,
    calculateEventPosition,
    positionEvents,
    setTimeOnDate,
    format,
    isToday,
} from '@/lib/calendar-utils'
import type { CalendarEvent } from '@/lib/calendar-types'

interface TimeGridProps {
    days: Date[]
    onSlotClick?: (start: Date, end: Date) => void
    onEventClick?: () => void
}

function TimeGrid({ days, onSlotClick, onEventClick }: TimeGridProps) {
    const { events, addEvent } = useCalendar()
    const hours = getHoursOfDay()

    const handleSlotClick = (day: Date, hour: number) => {
        const start = setTimeOnDate(day, hour)
        const end = setTimeOnDate(day, hour + 1)

        if (onSlotClick) {
            onSlotClick(start, end)
        } else {
            const title = window.prompt('New event title')
            if (title) {
                addEvent({ title, start, end, color: 'blue' })
            }
        }
    }

    const getEventsForDayPositioned = (day: Date): Array<CalendarEvent & { position: ReturnType<typeof calculateEventPosition> }> => {
        const dayEvents = getEventsForDay(events, day)
        return positionEvents(dayEvents)
    }

    return (
        <div className="flex h-full flex-col overflow-hidden">
            {/* Header with day names */}
            <div className="flex shrink-0 border-b border-[var(--border)]">
                {/* Time gutter spacer */}
                <div className="w-16 shrink-0 border-r border-[var(--border)]" />

                {/* Day headers */}
                {days.map(day => (
                    <div
                        key={day.toISOString()}
                        className={`
              flex-1 py-3 text-center border-r border-[var(--border)]
              ${isToday(day) ? 'bg-primary/5' : ''}
            `}
                    >
                        <div className="text-xs font-medium text-muted-foreground">
                            {format(day, 'EEE')}
                        </div>
                        <div className={`
              mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full text-lg font-bold
              ${isToday(day) ? 'bg-primary text-primary-foreground' : ''}
            `}>
                            {format(day, 'd')}
                        </div>
                    </div>
                ))}
            </div>

            {/* Time grid body */}
            <div className="flex flex-1 overflow-y-auto">
                {/* Time labels */}
                <div className="w-16 shrink-0 border-r border-[var(--border)]">
                    {hours.map(hour => (
                        <div
                            key={hour}
                            className="h-12 border-b border-[var(--border)] pr-2 text-right text-xs text-muted-foreground"
                        >
                            {format(setTimeOnDate(new Date(), hour), 'h a')}
                        </div>
                    ))}
                </div>

                {/* Day columns */}
                {days.map(day => {
                    const dayEvents = getEventsForDayPositioned(day)

                    return (
                        <div
                            key={day.toISOString()}
                            className={`
                relative flex-1 border-r border-[var(--border)]
                ${isToday(day) ? 'bg-primary/5' : ''}
              `}
                        >
                            {/* Hour slots */}
                            {hours.map(hour => (
                                <div
                                    key={hour}
                                    onClick={() => handleSlotClick(day, hour)}
                                    className="h-12 border-b border-[var(--border)] cursor-pointer hover:bg-accent/50 transition-colors"
                                />
                            ))}

                            {/* Events overlay */}
                            <div className="absolute inset-0 pointer-events-none">
                                {dayEvents.map(event => (
                                    <div
                                        key={event.id}
                                        className="absolute pointer-events-auto px-0.5"
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
                    )
                })}
            </div>
        </div>
    )
}

interface WeekViewProps {
    onSlotClick?: (start: Date, end: Date) => void
    onEventClick?: () => void
}

export function WeekView({ onSlotClick, onEventClick }: WeekViewProps) {
    const { currentDate } = useCalendar()
    const days = getWeekDays(currentDate)

    return <TimeGrid days={days} onSlotClick={onSlotClick} onEventClick={onEventClick} />
}
