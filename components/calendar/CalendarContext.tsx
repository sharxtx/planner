'use client'

import React, { createContext, useContext, useState, useCallback, useMemo } from 'react'
import type {
    CalendarEvent,
    CalendarView,
    CalendarState,
    CalendarActions,
    CalendarContextType,
    CreateEventInput,
    UpdateEventInput,
} from '@/lib/calendar-types'
import { generateEventId, getNextDate, getPreviousDate } from '@/lib/calendar-utils'

// Sample events for initial display
const sampleEvents: CalendarEvent[] = [
    {
        id: 'sample-1',
        title: 'Team Standup',
        start: new Date(2026, 0, 6, 9, 0),
        end: new Date(2026, 0, 6, 9, 30),
        provider: 'local',
        color: 'blue',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 'sample-2',
        title: 'Product Review',
        start: new Date(2026, 0, 6, 14, 0),
        end: new Date(2026, 0, 6, 15, 30),
        provider: 'local',
        color: 'purple',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 'sample-3',
        title: 'Lunch with Client',
        start: new Date(2026, 0, 7, 12, 0),
        end: new Date(2026, 0, 7, 13, 0),
        provider: 'local',
        color: 'green',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
]

const CalendarContext = createContext<CalendarContextType | null>(null)

interface CalendarProviderProps {
    children: React.ReactNode
    initialEvents?: CalendarEvent[]
    initialDate?: Date
    initialView?: CalendarView
}

export function CalendarProvider({
    children,
    initialEvents = sampleEvents,
    initialDate = new Date(),
    initialView = 'month',
}: CalendarProviderProps) {
    const [currentDate, setCurrentDate] = useState<Date>(initialDate)
    const [view, setView] = useState<CalendarView>(initialView)
    const [events, setEvents] = useState<CalendarEvent[]>(initialEvents)
    const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    // Navigation
    const navigateToday = useCallback(() => {
        setCurrentDate(new Date())
    }, [])

    const navigatePrevious = useCallback(() => {
        setCurrentDate(prev => getPreviousDate(prev, view))
    }, [view])

    const navigateNext = useCallback(() => {
        setCurrentDate(prev => getNextDate(prev, view))
    }, [view])

    // CRUD Operations
    const addEvent = useCallback(async (input: CreateEventInput): Promise<CalendarEvent> => {
        const newEvent: CalendarEvent = {
            ...input,
            id: generateEventId(),
            provider: input.provider || 'local',
            createdAt: new Date(),
            updatedAt: new Date(),
        }

        setEvents(prev => [...prev, newEvent])
        return newEvent
    }, [])

    const updateEvent = useCallback(async (input: UpdateEventInput): Promise<CalendarEvent> => {
        let updatedEvent: CalendarEvent | null = null

        setEvents(prev => prev.map(event => {
            if (event.id === input.id) {
                updatedEvent = {
                    ...event,
                    ...input,
                    updatedAt: new Date(),
                }
                return updatedEvent
            }
            return event
        }))

        if (!updatedEvent) {
            throw new Error(`Event with id ${input.id} not found`)
        }

        // Update selected event if it's the one being edited
        if (selectedEvent?.id === input.id) {
            setSelectedEvent(updatedEvent)
        }

        return updatedEvent
    }, [selectedEvent])

    const deleteEvent = useCallback(async (id: string): Promise<void> => {
        setEvents(prev => prev.filter(event => event.id !== id))

        if (selectedEvent?.id === id) {
            setSelectedEvent(null)
        }
    }, [selectedEvent])

    const selectEvent = useCallback((event: CalendarEvent | null) => {
        setSelectedEvent(event)
    }, [])

    // Memoized context value
    const value = useMemo<CalendarContextType>(() => ({
        // State
        currentDate,
        view,
        events,
        selectedEvent,
        isLoading,
        error,
        // Actions
        setDate: setCurrentDate,
        setView,
        addEvent,
        updateEvent,
        deleteEvent,
        selectEvent,
        navigateToday,
        navigatePrevious,
        navigateNext,
    }), [
        currentDate,
        view,
        events,
        selectedEvent,
        isLoading,
        error,
        addEvent,
        updateEvent,
        deleteEvent,
        selectEvent,
        navigateToday,
        navigatePrevious,
        navigateNext,
    ])

    return (
        <CalendarContext.Provider value={value}>
            {children}
        </CalendarContext.Provider>
    )
}

/**
 * Hook to access calendar context
 */
export function useCalendar(): CalendarContextType {
    const context = useContext(CalendarContext)

    if (!context) {
        throw new Error('useCalendar must be used within a CalendarProvider')
    }

    return context
}
