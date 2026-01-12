'use client'

import { motion } from 'motion/react'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

const EASE = [0.22, 1, 0.36, 1]

export default function HowItWorks() {
    return (
        <section className="py-32 px-5 sm:px-12 border-t border-border/10">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-xl mb-24">
                    <h2 className="text-[32px] font-medium tracking-tight leading-[1.25] text-foreground mb-4">
                        Tell it what you need to do.<br />Planner.ai handles the rest.
                    </h2>
                </div>

                {/* 3-Column Layout: Stacked on mobile, Horizontal on desktop */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">

                    {/* PANEL 1: INPUT */}
                    <div className="flex flex-col gap-6">
                        <div className="h-[200px] w-full border border-border/20 rounded-xl relative overflow-hidden flex items-center justify-center p-6 bg-transparent">
                            {/* Visual: Single multiline input, thinning border, no fill */}
                            <div className="w-full max-w-[240px]">
                                <TypewriterInput />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-[17px] font-medium text-foreground mb-2">Write your tasks naturally.</h3>
                            <p className="text-[15px] leading-relaxed text-secondary-foreground/60">
                                “Finish report”, “Gym in the evening”, “Client call after lunch”.
                            </p>
                        </div>
                    </div>

                    {/* PANEL 2: REASONING */}
                    <div className="flex flex-col gap-6">
                        <div className="h-[200px] w-full border border-border/20 rounded-xl relative overflow-hidden flex items-center justify-center p-6 bg-transparent">
                            {/* Visual: Text tasks sliding into timeline skeleton */}
                            <div className="relative w-[180px] flex flex-col gap-2">
                                <ReasoningTask text="Client call" delay={0.2} />
                                <ReasoningTask text="Finish report" delay={0.4} width="100%" />
                                <ReasoningTask text="Gym" delay={0.6} width="80%" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-[17px] font-medium text-foreground mb-2">Planner.ai considers your day.</h3>
                            <p className="text-[15px] leading-relaxed text-secondary-foreground/60">
                                It slots tasks into specific time blocks, respecting existing events and constraints.
                            </p>
                        </div>
                    </div>

                    {/* PANEL 3: SYNC */}
                    <div className="flex flex-col gap-6">
                        <div className="h-[200px] w-full border border-border/20 rounded-xl relative overflow-hidden flex items-center justify-center p-6 bg-transparent">
                            {/* Visual: Timeline morphs into grid */}
                            <SyncVisual />
                        </div>
                        <div>
                            <h3 className="text-[17px] font-medium text-foreground mb-2">Syncs to Google Calendar.</h3>
                            <p className="text-[15px] leading-relaxed text-secondary-foreground/60">
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
            if (i <= phrase.length) {
                setText(phrase.slice(0, i))
                i++
            } else {
                clearInterval(interval) // Stop halfway/at end, don't loop
            }
        }, 100)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="font-mono text-sm text-muted-foreground relative border-b border-border/20 pb-2">
            {text}<span className="animate-pulse">|</span>
        </div>
    )
}

function ReasoningTask({ text, delay, width = "100%" }: { text: string, delay: number, width?: string }) {
    return (
        <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay, ease: EASE }}
            className="h-8 rounded-sm bg-secondary/30 flex items-center px-3 border border-border/10"
            style={{ width }}
        >
            <span className="text-[10px] text-muted-foreground">{text}</span>
        </motion.div>
    )
}

function SyncVisual() {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Background Grid (Faint) */}
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-px opacity-30">
                {[...Array(16)].map((_, i) => <div key={i} className="bg-border/20" />)}
            </div>

            {/* Timeline Block Compressing -> Morphing */}
            <motion.div
                initial={{ width: "80%", height: 30, opacity: 0 }}
                whileInView={{ width: "40%", height: 60, opacity: 1, backgroundColor: "var(--planner-blue)" }}
                transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
                className="relative z-10 rounded-sm bg-secondary flex items-center justify-center"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-white text-xs font-medium"
                >
                    ✓
                </motion.div>
            </motion.div>
        </div>
    )
}
