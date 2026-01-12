'use client'

import { motion } from 'motion/react'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

export default function HowItWorks() {
    return (
        <section className="py-32 px-5 sm:px-12 border-t border-border/10">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-xl mb-24">
                    <h2 className="text-[32px] font-medium tracking-tight leading-[1.15] text-foreground mb-4">
                        Tell it what you need to do.<br />Planner.ai handles the rest.
                    </h2>
                </div>

                {/* 3-Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">

                    {/* Step 1: Input */}
                    <div className="flex flex-col gap-8">
                        <div className="h-[200px] w-full bg-card/50 border border-border/20 rounded-xl relative overflow-hidden flex items-center justify-center p-6">
                            {/* Input Visual */}
                            <div className="w-full max-w-[240px] border-b border-primary/20 pb-2">
                                <TypewriterInput />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-[17px] font-medium text-foreground mb-2">Write your tasks naturally.</h3>
                            <p className="text-[15px] leading-relaxed text-muted-foreground">
                                “Finish report”, “Gym in the evening”, “Client call after lunch”.
                            </p>
                        </div>
                    </div>

                    {/* Step 2: Planning */}
                    <div className="flex flex-col gap-8">
                        <div className="h-[200px] w-full bg-card/50 border border-border/20 rounded-xl relative overflow-hidden flex items-center justify-center p-6">
                            {/* Timeline Visual - Abstract Blocks */}
                            <div className="flex flex-col gap-2 w-[180px]">
                                <TimelineBlock width="100%" color="bg-primary/20" delay={0} />
                                <TimelineBlock width="70%" color="bg-secondary" delay={0.2} />
                                <TimelineBlock width="90%" color="bg-secondary" delay={0.4} />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-[17px] font-medium text-foreground mb-2">Planner.ai considers your day.</h3>
                            <p className="text-[15px] leading-relaxed text-muted-foreground">
                                It slots tasks into specific time blocks, respecting existing events and constraints.
                            </p>
                        </div>
                    </div>

                    {/* Step 3: Sync */}
                    <div className="flex flex-col gap-8">
                        <div className="h-[200px] w-full bg-card/50 border border-border/20 rounded-xl relative overflow-hidden flex items-center justify-center p-6">
                            {/* Grid Visual */}
                            <div className="relative w-full h-full opacity-60">
                                {/* Abstract Grid Lines */}
                                <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-px bg-transparent">
                                    {[...Array(16)].map((_, i) => (
                                        <div key={i} className="bg-border/5" />
                                    ))}
                                </div>
                                {/* Synced Block */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    className="absolute top-[25%] left-[25%] col-span-2 row-span-1 w-[50%] h-[25%] bg-primary/20 rounded-sm border border-primary/10"
                                />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-[17px] font-medium text-foreground mb-2">Syncs to Google Calendar.</h3>
                            <p className="text-[15px] leading-relaxed text-muted-foreground">
                                The plan slides seamlessly into your actual schedule as a real event.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

function TypewriterInput() {
    const [text, setText] = useState("")
    const phrase = "Finish report by 5"

    useEffect(() => {
        let i = 0
        const interval = setInterval(() => {
            setText(phrase.slice(0, i))
            i++
            if (i > phrase.length) {
                i = 0
                // subtle pause could be added here but keeping simple loop
            }
        }, 150)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="font-mono text-sm text-muted-foreground relative">
            {text}<span className="animate-pulse">|</span>
        </div>
    )
}

function TimelineBlock({ width, color, delay }: { width: string, color: string, delay: number }) {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            className={cn("h-8 rounded-md", color)}
            style={{ width }}
        />
    )
}
