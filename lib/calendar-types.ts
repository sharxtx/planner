// Calendar Types - Extensible for multi-provider sync

/**
 * Event colors for the calendar
 */
export const EVENT_COLORS = {
    blue: { bg: 'oklch(0.6 0.15 250)', text: 'white' },
    green: { bg: 'oklch(0.6 0.15 145)', text: 'white' },
    red: { bg: 'oklch(0.6 0.15 25)', text: 'white' },
    purple: { bg: 'oklch(0.6 0.15 300)', text: 'white' },
    orange: { bg: 'oklch(0.65 0.15 55)', text: 'white' },
    teal: { bg: 'oklch(0.6 0.12 195)', text: 'white' },
} as const

export type EventColor = keyof typeof EVENT_COLORS

/**
 * Supported calendar providers
 */
export type CalendarProvider = 'local' | 'google' | 'outlook' | 'apple'

/**
 * Recurrence rule for repeating events (future use)
 */
export interface RecurrenceRule {
    frequency: 'daily' | 'weekly' | 'monthly' | 'yearly'
    interval: number
    until?: Date
    count?: number
    daysOfWeek?: number[] // 0-6 for weekly recurrence
}

/**
 * Core calendar event interface
 * Designed for multi-provider sync compatibility
 */
export interface CalendarEvent {
    id: string
    title: string
    description?: string
    start: Date
    end: Date
    allDay?: boolean
    color?: EventColor
    location?: string
    // Integration support
    provider: CalendarProvider
    externalId?: string  // ID from external provider (e.g., Google Calendar ID)
    synced?: boolean
    lastSyncedAt?: Date
    // Recurrence (future)
    recurrence?: RecurrenceRule
    // Metadata
    createdAt: Date
    updatedAt: Date
}

/**
 * Input for creating a new event (id and timestamps auto-generated)
 */
export type CreateEventInput = Omit<CalendarEvent, 'id' | 'createdAt' | 'updatedAt' | 'provider'> & {
    provider?: CalendarProvider
}

/**
 * Input for updating an event
 */
export type UpdateEventInput = Partial<Omit<CalendarEvent, 'id' | 'createdAt'>> & {
    id: string
}

/**
 * Calendar view types
 */
export type CalendarView = 'month' | 'week' | 'day' | 'agenda'

/**
 * Provider interface for extensible integrations
 * Implement this interface to add new calendar provider support
 */
export interface EventProvider {
    id: CalendarProvider
    name: string
    connected: boolean

    // CRUD operations
    getEvents(start: Date, end: Date): Promise<CalendarEvent[]>
    createEvent(event: CreateEventInput): Promise<CalendarEvent>
    updateEvent(event: UpdateEventInput): Promise<CalendarEvent>
    deleteEvent(id: string): Promise<void>

    // Sync operations (optional)
    sync?(): Promise<void>
    disconnect?(): Promise<void>
}

/**
 * Calendar state interface
 */
export interface CalendarState {
    currentDate: Date
    view: CalendarView
    events: CalendarEvent[]
    selectedEvent: CalendarEvent | null
    isLoading: boolean
    error: string | null
}

/**
 * Calendar context actions
 */
export interface CalendarActions {
    setDate: (date: Date) => void
    setView: (view: CalendarView) => void
    addEvent: (event: CreateEventInput) => Promise<CalendarEvent>
    updateEvent: (event: UpdateEventInput) => Promise<CalendarEvent>
    deleteEvent: (id: string) => Promise<void>
    selectEvent: (event: CalendarEvent | null) => void
    navigateToday: () => void
    navigatePrevious: () => void
    navigateNext: () => void
}

/**
 * Combined calendar context type
 */
export interface CalendarContextType extends CalendarState, CalendarActions { }

/**
 * Time slot for drag selection
 */
export interface TimeSlot {
    start: Date
    end: Date
}

/**
 * Event position for week/day views
 */
export interface EventPosition {
    top: number      // percentage
    height: number   // percentage
    left: number     // percentage (for overlapping events)
    width: number    // percentage
}
