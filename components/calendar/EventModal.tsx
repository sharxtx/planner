'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useCalendar } from './CalendarContext'
import { EVENT_COLORS, type EventColor, type CalendarEvent } from '@/lib/calendar-types'
import { format } from '@/lib/calendar-utils'

interface EventModalProps {
    isOpen: boolean
    onClose: () => void
    defaultStart?: Date
    defaultEnd?: Date
}

export function EventModal({ isOpen, onClose, defaultStart, defaultEnd }: EventModalProps) {
    const { selectedEvent, addEvent, updateEvent, deleteEvent, selectEvent } = useCalendar()

    const isEditing = !!selectedEvent

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [startDate, setStartDate] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endDate, setEndDate] = useState('')
    const [endTime, setEndTime] = useState('')
    const [color, setColor] = useState<EventColor>('blue')
    const [isSubmitting, setIsSubmitting] = useState(false)

    // Reset form when modal opens
    useEffect(() => {
        if (isOpen) {
            if (selectedEvent) {
                // Editing existing event
                setTitle(selectedEvent.title)
                setDescription(selectedEvent.description || '')
                setStartDate(format(selectedEvent.start, 'yyyy-MM-dd'))
                setStartTime(format(selectedEvent.start, 'HH:mm'))
                setEndDate(format(selectedEvent.end, 'yyyy-MM-dd'))
                setEndTime(format(selectedEvent.end, 'HH:mm'))
                setColor(selectedEvent.color || 'blue')
            } else {
                // Creating new event
                const start = defaultStart || new Date()
                const end = defaultEnd || new Date(start.getTime() + 3600000)

                setTitle('')
                setDescription('')
                setStartDate(format(start, 'yyyy-MM-dd'))
                setStartTime(format(start, 'HH:mm'))
                setEndDate(format(end, 'yyyy-MM-dd'))
                setEndTime(format(end, 'HH:mm'))
                setColor('blue')
            }
        }
    }, [isOpen, selectedEvent, defaultStart, defaultEnd])

    const handleClose = () => {
        selectEvent(null)
        onClose()
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!title.trim()) return

        setIsSubmitting(true)

        try {
            const start = new Date(`${startDate}T${startTime}`)
            const end = new Date(`${endDate}T${endTime}`)

            if (isEditing && selectedEvent) {
                await updateEvent({
                    id: selectedEvent.id,
                    title: title.trim(),
                    description: description.trim() || undefined,
                    start,
                    end,
                    color,
                })
            } else {
                await addEvent({
                    title: title.trim(),
                    description: description.trim() || undefined,
                    start,
                    end,
                    color,
                })
            }

            handleClose()
        } catch (error) {
            console.error('Failed to save event:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleDelete = async () => {
        if (!selectedEvent) return

        if (window.confirm('Are you sure you want to delete this event?')) {
            await deleteEvent(selectedEvent.id)
            handleClose()
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                        onClick={handleClose}
                    />

                    {/* Modal Panel */}
                    <motion.div
                        initial={{ x: '100%', opacity: 0.5 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: '100%', opacity: 0.5 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 z-50 h-full w-full max-w-md overflow-y-auto bg-[var(--card)] p-6 shadow-2xl"
                    >
                        {/* Header */}
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-xl font-bold">
                                {isEditing ? 'Edit Event' : 'New Event'}
                            </h2>
                            <Button variant="ghost" size="icon" onClick={handleClose} className="rounded-xl">
                                <X size={20} />
                            </Button>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Title */}
                            <div className="space-y-2">
                                <Label>Event Title</Label>
                                <Input
                                    type="text"
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                    placeholder="Add title"
                                    autoFocus
                                    required
                                    className="rounded-xl border-[var(--border)] bg-transparent focus-visible:ring-primary"
                                />
                            </div>

                            {/* Description */}
                            <div className="space-y-2">
                                <Label>Description</Label>
                                <Textarea
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                    placeholder="Add description (optional)"
                                    rows={3}
                                    className="rounded-xl border-[var(--border)] bg-transparent resize-none focus-visible:ring-primary"
                                />
                            </div>

                            {/* Start Date/Time */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <Label>Start Date</Label>
                                    <Input
                                        type="date"
                                        value={startDate}
                                        onChange={e => setStartDate(e.target.value)}
                                        required
                                        className="rounded-xl border-[var(--border)] bg-transparent focus-visible:ring-primary"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Start Time</Label>
                                    <Input
                                        type="time"
                                        value={startTime}
                                        onChange={e => setStartTime(e.target.value)}
                                        required
                                        className="rounded-xl border-[var(--border)] bg-transparent focus-visible:ring-primary"
                                    />
                                </div>
                            </div>

                            {/* End Date/Time */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <Label>End Date</Label>
                                    <Input
                                        type="date"
                                        value={endDate}
                                        onChange={e => setEndDate(e.target.value)}
                                        required
                                        className="rounded-xl border-[var(--border)] bg-transparent focus-visible:ring-primary"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>End Time</Label>
                                    <Input
                                        type="time"
                                        value={endTime}
                                        onChange={e => setEndTime(e.target.value)}
                                        required
                                        className="rounded-xl border-[var(--border)] bg-transparent focus-visible:ring-primary"
                                    />
                                </div>
                            </div>

                            {/* Color Picker */}
                            <div className="space-y-2">
                                <Label>Color</Label>
                                <div className="flex gap-2">
                                    {(Object.keys(EVENT_COLORS) as EventColor[]).map(colorKey => (
                                        <button
                                            key={colorKey}
                                            type="button"
                                            onClick={() => setColor(colorKey)}
                                            className={`
                        h-8 w-8 rounded-full transition-all
                        ${color === colorKey ? 'ring-2 ring-offset-2 ring-primary scale-110' : 'hover:scale-105'}
                      `}
                                            style={{ backgroundColor: EVENT_COLORS[colorKey].bg }}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-3 pt-4">
                                {isEditing && (
                                    <Button
                                        type="button"
                                        variant="destructive"
                                        onClick={handleDelete}
                                        className="rounded-xl"
                                    >
                                        Delete
                                    </Button>
                                )}
                                <div className="flex-1" />
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={handleClose}
                                    className="rounded-xl"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    disabled={isSubmitting || !title.trim()}
                                    className="rounded-xl font-semibold"
                                >
                                    {isSubmitting ? 'Saving...' : isEditing ? 'Save Changes' : 'Create Event'}
                                </Button>
                            </div>
                        </form>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
