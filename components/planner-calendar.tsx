'use client'

import { PlusIcon } from '@radix-ui/react-icons'
import moment from 'moment'
import { useState, useCallback } from 'react'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)

interface CalendarEvent {
    title: string
    start: Date
    end: Date
    allDay?: boolean
}

const initialEvents: CalendarEvent[] = [
    {
        title: 'Meeting with Team',
        start: new Date(2026, 0, 5, 10, 0),
        end: new Date(2026, 0, 5, 12, 0),
    },
    {
        title: 'Lunch Break',
        start: new Date(2026, 0, 5, 13, 0),
        end: new Date(2026, 0, 5, 14, 0),
    },
    {
        title: 'Project Update',
        start: new Date(2026, 0, 6, 14, 0),
        end: new Date(2026, 0, 6, 15, 30),
    },
]

import { Button } from '@/components/ui/button'

export function PlannerCalendar() {
    const [events, setEvents] = useState<CalendarEvent[]>(initialEvents)

    const handleSelectSlot = useCallback(
        ({ start, end }: { start: Date; end: Date }) => {
            const title = window.prompt('New Event name')
            if (title) {
                setEvents((prev) => [...prev, { start, end, title }])
            }
        },
        [setEvents]
    )

    const handleSelectEvent = useCallback((event: CalendarEvent) => {
        window.alert(`Event: ${event.title}`)
    }, [])

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-[var(--foreground)]">Planner</h1>
                    <p className="mt-2 text-lg text-[var(--muted-foreground)]">Manage your schedule with precision and style.</p>
                </div>
                <Button size="lg" className="rounded-xl font-bold shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                    <PlusIcon className="h-5 w-5" />
                    New Task
                </Button>
            </div>

            <div className="h-[800px] w-full overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-2xl transition-all dark:bg-[var(--card)]/40">
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    selectable
                    onSelectSlot={handleSelectSlot}
                    onSelectEvent={handleSelectEvent}
                    defaultView={Views.MONTH}
                    className="h-full"
                    eventPropGetter={() => ({
                        className: 'rbc-event',
                    })}
                />
            </div>
        </div>
    )
}
