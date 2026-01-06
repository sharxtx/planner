'use client'

import { useCalendar } from './CalendarContext'
import { EventItem } from './EventItem'
import {
    getMonthMatrix,
    getEventsForDay,
    isSameMonth,
    isToday,
    format,
} from '@/lib/calendar-utils'

const WEEKDAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MAX_VISIBLE_EVENTS = 3

interface MonthViewProps {
    onDayClick?: (date: Date) => void
    onEventClick?: () => void
}

export function MonthView({ onDayClick, onEventClick }: MonthViewProps) {
    const { currentDate, events, addEvent } = useCalendar()
    const weeks = getMonthMatrix(currentDate)

    const handleDayClick = (day: Date) => {
        if (onDayClick) {
            onDayClick(day)
        } else {
            // Default: prompt for new event
            const title = window.prompt('New event title')
            if (title) {
                const start = new Date(day)
                start.setHours(9, 0, 0, 0)
                const end = new Date(day)
                end.setHours(10, 0, 0, 0)
                addEvent({
                    title,
                    start,
                    end,
                    color: 'blue',
                })
            }
        }
    }

    return (
        <div className="flex h-full flex-col">
            {/* Weekday Headers */}
            <div className="grid grid-cols-7 border-b border-[var(--border)]">
                {WEEKDAY_NAMES.map(day => (
                    <div
                        key={day}
                        className="py-3 text-center text-sm font-semibold text-muted-foreground"
                    >
                        {day}
                    </div>
                ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid flex-1 grid-cols-7 grid-rows-[repeat(auto-fill,minmax(120px,1fr))]">
                {weeks.map((week, weekIndex) =>
                    week.map((day, dayIndex) => {
                        const dayEvents = getEventsForDay(events, day)
                        const isCurrentMonth = isSameMonth(day, currentDate)
                        const isTodayDate = isToday(day)
                        const hasMoreEvents = dayEvents.length > MAX_VISIBLE_EVENTS

                        return (
                            <div
                                key={`${weekIndex}-${dayIndex}`}
                                onClick={() => handleDayClick(day)}
                                className={`
                  group relative min-h-[120px] border-b border-r border-[var(--border)] p-2 
                  transition-colors cursor-pointer hover:bg-accent/50
                  ${!isCurrentMonth ? 'bg-muted/30' : ''}
                `}
                            >
                                {/* Day Number */}
                                <div
                                    className={`
                    mb-1 flex h-7 w-7 items-center justify-center rounded-full text-sm font-medium
                    ${isTodayDate
                                            ? 'bg-primary text-primary-foreground'
                                            : isCurrentMonth
                                                ? 'text-foreground'
                                                : 'text-muted-foreground'
                                        }
                  `}
                                >
                                    {format(day, 'd')}
                                </div>

                                {/* Events */}
                                <div className="flex flex-col gap-1">
                                    {dayEvents.slice(0, MAX_VISIBLE_EVENTS).map(event => (
                                        <EventItem
                                            key={event.id}
                                            event={event}
                                            compact
                                            onClick={onEventClick}
                                        />
                                    ))}
                                    {hasMoreEvents && (
                                        <button className="text-left text-xs font-semibold text-primary hover:underline">
                                            +{dayEvents.length - MAX_VISIBLE_EVENTS} more
                                        </button>
                                    )}
                                </div>
                            </div>
                        )
                    })
                )}
            </div>
        </div>
    )
}
