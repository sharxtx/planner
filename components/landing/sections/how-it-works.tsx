'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import GenericTimelineVisual from '../generic-timeline-visual'

const EASE = [0.22, 1, 0.36, 1] as const

export default function HowItWorks() {
    const [typedText, setTypedText] = useState("")
    const [isComplete, setIsComplete] = useState(false)
    const [isPlanning, setIsPlanning] = useState(false)
    const targetText = "side project before gym"

    // Simplified and robust typing effect
    useEffect(() => {
        if (isComplete) return

        const interval = setInterval(() => {
            setTypedText((prev) => {
                if (prev.length < targetText.length) {
                    return targetText.slice(0, prev.length + 1)
                }

                // Typing finished
                clearInterval(interval)
                setIsComplete(true)

                // Trigger scheduling after a brief pause
                setTimeout(() => setIsPlanning(true), 500)

                // Reset everything after 8 seconds
                setTimeout(() => {
                    setIsPlanning(false)
                    setIsComplete(false)
                    setTypedText("")
                }, 8000)

                return prev
            })
        }, 80) // Slightly faster typing for better UX

        return () => clearInterval(interval)
    }, [isComplete])

    return (
        <section className="py-32 px-6 sm:px-12 border-t border-border/10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* LEFT: Editorial Content & Input */}
                <div className="flex flex-col gap-12">
                    <div className="space-y-6">
                        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-sans font-medium tracking-tight leading-tight text-foreground">
                            <span className="inline-block md:whitespace-nowrap">Tell it what you need to do.</span>
                            <span className="block text-muted-foreground opacity-70 md:whitespace-nowrap">
                                Planner.ai handles the <span className="font-playfair italic">rest</span>.
                            </span>
                        </h2>

                        <p className="max-w-md text-lg text-secondary-foreground/80 leading-relaxed font-sans">
                            Write tasks naturally. It reasons about your constraints and slots them into your day—automatically.
                        </p>
                    </div>

                    {/* The Input Simulation */}
                    <div className="w-full max-w-md">
                        <div className="text-[13px] font-medium text-muted-foreground/60 mb-4 uppercase tracking-wider">Input</div>
                        <div className="relative h-[80px] flex items-center p-8 rounded-2xl border border-border/10 bg-[#0F1115] shadow-inner ring-1 ring-white/5">
                            <div className="font-mono text-sm sm:text-[17px] flex items-center">
                                <span className="text-muted-foreground/40 mr-4">›</span>
                                <span className="text-foreground">{typedText}</span>
                                {!isComplete && (
                                    <motion.div
                                        animate={{ opacity: [1, 0, 1] }}
                                        transition={{ repeat: Infinity, duration: 0.8 }}
                                        className="w-[10px] h-5 bg-planner-sand ml-1"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT: The 'Calendar' Output */}
                <div className="relative flex items-center justify-center lg:justify-end">
                    <div className="w-full max-w-[400px]">
                        <GenericTimelineVisual showPlanningTask={isPlanning} />
                    </div>

                    {/* Sync Indicator */}
                    <AnimatePresence>
                        {typedText.length > 5 && (
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="absolute -left-12 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4"
                            >
                                <div className="w-px h-16 bg-linear-to-b from-transparent via-planner-sand/20 to-transparent" />
                                <div className="text-[10px] font-mono text-planner-sand uppercase tracking-[0.2em] transform -rotate-90 origin-center whitespace-nowrap">
                                    {isPlanning ? "Scheduled" : "Reasoning..."}
                                </div>
                                <div className="w-px h-16 bg-linear-to-b from-planner-sand/20 via-planner-sand/20 to-transparent" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>
        </section>
    )
}
