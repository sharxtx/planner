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
                <button className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 transition-all hover:scale-[1.02] hover:bg-indigo-700 active:scale-[0.98] dark:bg-indigo-500/90 dark:hover:bg-indigo-500">
                    <PlusIcon className="h-5 w-5" />
                    New Task
                </button>
            </div>

            <div className="h-[800px] w-full overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-2xl transition-all dark:bg-zinc-900/40">
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
                        style: {
                            backgroundColor: 'var(--primary)',
                            color: 'var(--primary-foreground)',
                            border: 'none',
                            borderRadius: '8px',
                            padding: '4px 8px',
                            fontSize: '0.75rem',
                            fontWeight: '600',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        },
                    })}
                />
            </div>
        </div>
    )
}
