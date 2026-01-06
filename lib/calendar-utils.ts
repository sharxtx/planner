// Calendar date utilities using date-fns

import {
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    format,
    addMonths,
    addWeeks,
    addDays,
    subMonths,
    subWeeks,
    subDays,
    isSameDay,
    isSameMonth,
    isToday,
    getHours,
    getMinutes,
    setHours,
    setMinutes,
    differenceInMinutes,
    startOfDay,
    endOfDay,
    parseISO,
} from 'date-fns'
import type { CalendarEvent, CalendarView, EventPosition } from './calendar-types'

/**
 * Get all days in a month formatted as a 2D grid (weeks x days)
 */
export function getMonthMatrix(date: Date): Date[][] {
    const start = startOfWeek(startOfMonth(date))
    const end = endOfWeek(endOfMonth(date))

    const days = eachDayOfInterval({ start, end })
    const weeks: Date[][] = []

    for (let i = 0; i < days.length; i += 7) {
        weeks.push(days.slice(i, i + 7))
    }

    return weeks
}

/**
 * Get all days in a week
 */
export function getWeekDays(date: Date): Date[] {
    const start = startOfWeek(date)
    const end = endOfWeek(date)
    return eachDayOfInterval({ start, end })
}

/**
 * Get hours of the day for time grid (0-23)
 */
export function getHoursOfDay(): number[] {
    return Array.from({ length: 24 }, (_, i) => i)
}

/**
 * Format time for display (e.g., "9:00 AM")
 */
export function formatTime(date: Date): string {
    return format(date, 'h:mm a')
}

/**
 * Format date for header display
 */
export function formatDateHeader(date: Date, view: CalendarView): string {
    switch (view) {
        case 'month':
            return format(date, 'MMMM yyyy')
        case 'week':
            return format(date, "'Week of' MMM d, yyyy")
        case 'day':
            return format(date, 'EEEE, MMMM d, yyyy')
        case 'agenda':
            return format(date, 'MMMM yyyy')
        default:
            return format(date, 'MMMM yyyy')
    }
}

/**
 * Navigate to next period based on view
 */
export function getNextDate(date: Date, view: CalendarView): Date {
    switch (view) {
        case 'month':
            return addMonths(date, 1)
        case 'week':
            return addWeeks(date, 1)
        case 'day':
            return addDays(date, 1)
        case 'agenda':
            return addMonths(date, 1)
        default:
            return addMonths(date, 1)
    }
}

/**
 * Navigate to previous period based on view
 */
export function getPreviousDate(date: Date, view: CalendarView): Date {
    switch (view) {
        case 'month':
            return subMonths(date, 1)
        case 'week':
            return subWeeks(date, 1)
        case 'day':
            return subDays(date, 1)
        case 'agenda':
            return subMonths(date, 1)
        default:
            return subMonths(date, 1)
    }
}

/**
 * Get events for a specific day
 */
export function getEventsForDay(events: CalendarEvent[], day: Date): CalendarEvent[] {
    return events.filter(event => isSameDay(event.start, day))
}

/**
 * Get events for a date range
 */
export function getEventsInRange(events: CalendarEvent[], start: Date, end: Date): CalendarEvent[] {
    return events.filter(event => {
        const eventStart = event.start
        const eventEnd = event.end
        return (eventStart >= start && eventStart <= end) ||
            (eventEnd >= start && eventEnd <= end) ||
            (eventStart <= start && eventEnd >= end)
    })
}

/**
 * Calculate event position for week/day view
 * Returns top and height as percentages of the day
 */
export function calculateEventPosition(event: CalendarEvent): EventPosition {
    const dayStart = startOfDay(event.start)
    const startMinutes = differenceInMinutes(event.start, dayStart)
    const endMinutes = differenceInMinutes(event.end, dayStart)

    const totalMinutesInDay = 24 * 60
    const top = (startMinutes / totalMinutesInDay) * 100
    const height = ((endMinutes - startMinutes) / totalMinutesInDay) * 100

    return {
        top,
        height: Math.max(height, 2), // Minimum 2% height for visibility
        left: 0,
        width: 100,
    }
}

/**
 * Create a date at a specific hour on a given day
 */
export function setTimeOnDate(date: Date, hour: number, minute: number = 0): Date {
    return setMinutes(setHours(date, hour), minute)
}

/**
 * Generate a unique ID for events
 */
export function generateEventId(): string {
    return `evt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Sort events by start time
 */
export function sortEventsByTime(events: CalendarEvent[]): CalendarEvent[] {
    return [...events].sort((a, b) => a.start.getTime() - b.start.getTime())
}

/**
 * Check if an event spans multiple days
 */
export function isMultiDayEvent(event: CalendarEvent): boolean {
    return !isSameDay(event.start, event.end)
}

// Re-export commonly used date-fns functions
export {
    isSameDay,
    isSameMonth,
    isToday,
    startOfDay,
    endOfDay,
    startOfWeek,
    endOfWeek,
    addDays,
    format,
    parseISO,
    getHours,
    getMinutes,
}
