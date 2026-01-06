'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    CalendarProvider,
    CalendarHeader,
    MonthView,
    WeekView,
    DayView,
    AgendaView,
    EventModal,
    useCalendar,
} from '@/components/calendar'

function CalendarContent() {
    const { view, selectedEvent, addEvent } = useCalendar()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [slotSelection, setSlotSelection] = useState<{ start: Date; end: Date } | null>(null)

    const handleAddTask = () => {
        setSlotSelection(null)
        setIsModalOpen(true)
    }

    const handleSlotClick = (start: Date, end: Date) => {
        setSlotSelection({ start, end })
        setIsModalOpen(true)
    }

    const handleEventClick = () => {
        setSlotSelection(null)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setSlotSelection(null)
    }

    return (
        <div className="flex h-full flex-col gap-6">
            {/* Top Bar */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Planner</h1>
                    <p className="mt-1 text-muted-foreground">Manage your schedule with precision and style.</p>
                </div>
                <Button
                    size="lg"
                    onClick={handleAddTask}
                    className="rounded-xl font-bold shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                    <Plus className="mr-1 h-5 w-5" />
                    New Event
                </Button>
            </div>

            {/* Calendar Header */}
            <CalendarHeader />

            {/* Calendar View Container */}
            <div className="flex-1 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-xl">
                {view === 'month' && (
                    <MonthView onDayClick={(date) => handleSlotClick(date, new Date(date.getTime() + 3600000))} onEventClick={handleEventClick} />
                )}
                {view === 'week' && (
                    <WeekView onSlotClick={handleSlotClick} onEventClick={handleEventClick} />
                )}
                {view === 'day' && (
                    <DayView onSlotClick={handleSlotClick} onEventClick={handleEventClick} />
                )}
                {view === 'agenda' && (
                    <AgendaView onEventClick={handleEventClick} />
                )}
            </div>

            {/* Event Modal */}
            <EventModal
                isOpen={isModalOpen || !!selectedEvent}
                onClose={handleCloseModal}
                defaultStart={slotSelection?.start}
                defaultEnd={slotSelection?.end}
            />
        </div>
    )
}

export function PlannerCalendar() {
    return (
        <CalendarProvider>
            <CalendarContent />
        </CalendarProvider>
    )
}
