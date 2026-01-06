'use client'

import { ChevronLeft, ChevronRight, CalendarDays } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCalendar } from './CalendarContext'
import { formatDateHeader } from '@/lib/calendar-utils'
import type { CalendarView } from '@/lib/calendar-types'

const VIEW_OPTIONS: { value: CalendarView; label: string }[] = [
    { value: 'month', label: 'Month' },
    { value: 'week', label: 'Week' },
    { value: 'day', label: 'Day' },
    { value: 'agenda', label: 'Agenda' },
]

export function CalendarHeader() {
    const {
        currentDate,
        view,
        setView,
        navigateToday,
        navigatePrevious,
        navigateNext,
    } = useCalendar()

    return (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Navigation Controls */}
            <div className="flex items-center gap-2">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={navigateToday}
                    className="rounded-xl font-semibold"
                >
                    Today
                </Button>

                <div className="flex items-center">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={navigatePrevious}
                        className="rounded-xl"
                    >
                        <ChevronLeft size={20} />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={navigateNext}
                        className="rounded-xl"
                    >
                        <ChevronRight size={20} />
                    </Button>
                </div>

                {/* Current Date Title */}
                <h2 className="ml-2 text-xl font-bold tracking-tight sm:text-2xl">
                    {formatDateHeader(currentDate, view)}
                </h2>
            </div>

            {/* View Switcher */}
            <div className="flex items-center gap-1 rounded-xl border border-[var(--border)] bg-[var(--card)] p-1">
                {VIEW_OPTIONS.map(option => (
                    <button
                        key={option.value}
                        onClick={() => setView(option.value)}
                        className={`
              rounded-lg px-3 py-1.5 text-sm font-medium transition-all
              ${view === option.value
                                ? 'bg-primary text-primary-foreground shadow-sm'
                                : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                            }
            `}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    )
}
