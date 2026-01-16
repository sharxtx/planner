'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const EASE = [0.22, 1, 0.36, 1] as const

export default function Adaptation() {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, amount: 0.3 })

    return (
        <section ref={containerRef} className="py-32 px-6 sm:px-12 border-t border-border/10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* Left: Text */}
                <div className="flex flex-col gap-8">
                    <div>
                        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-medium tracking-tight leading-tight text-foreground mb-6">
                            Ready for <span className="font-playfair italic">reality</span>. <br />
                            The schedule adapts.
                        </h2>
                        <p className="text-lg text-secondary-foreground/80 leading-relaxed font-sans max-w-md">
                            Life doesn&apos;t follow a straight line, so we built a schedule that moves with you, not against you.
                        </p>
                    </div>

                    <div className="space-y-6 mt-4">
                        <div className="flex gap-5 group">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card shadow-xs text-sm font-medium transition-colors group-hover:border-foreground/50">
                                01
                            </div>
                            <div>
                                <h3 className="text-[17px] font-medium text-foreground">Conflict resolution</h3>
                                <p className="text-[15px] text-muted-foreground mt-1 leading-relaxed">
                                    Adding a last-minute meeting? We automatically find a new home for your displaced tasks.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-5 group">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card shadow-xs text-sm font-medium transition-colors group-hover:border-foreground/50">
                                02
                            </div>
                            <div>
                                <h3 className="text-[17px] font-medium text-foreground">Priority protection</h3>
                                <p className="text-[15px] text-muted-foreground mt-1 leading-relaxed">
                                    If the day runs out of hours, the lowest priority tasks gracefully slide to tomorrow.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Visual Timeline */}
                <div className="relative h-[500px] w-full border border-border/10 rounded-2xl overflow-hidden bg-muted/20 dark:bg-[#0F1115] shadow-2xl">

                    {/* Background Grid Pattern - Static */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:100%_100px] opacity-[0.03]" />

                    {/* Time Labels - Static */}
                    <div className="absolute left-6 top-16 bottom-16 w-8 flex flex-col justify-between text-[10px] font-mono text-muted-foreground/30 py-2">
                        {['2 PM', '3 PM', '4 PM', '5 PM'].map(time => (
                            <div key={time}>{time}</div>
                        ))}
                    </div>

                    {/* Timeline Track */}
                    <div className="absolute left-20 right-8 top-16 bottom-16">

                        {/* Node 1: Displacement (The Cause) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98, y: -20 }}
                            animate={isInView ? {
                                opacity: [0, 1, 1, 1, 0, 0],
                                y: [-20, 0, 0, 0, -20, -20],
                                scale: [0.98, 1, 1, 1, 0.98, 0.98]
                            } : {}}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: EASE,
                                times: [0, 0.1, 0.6, 0.8, 0.9, 1]
                            }}
                            className="absolute top-0 h-11 w-full rounded-sm bg-red-500/10 border-l-[3px] border-l-red-500 border border-red-500/20 p-4 flex items-center justify-between z-30 shadow-sm"
                        >
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-red-600 dark:text-red-400">Conflict: Sync Call</span>
                                <span className="w-1 h-1 rounded-full bg-red-500 animate-pulse" />
                            </div>
                            <span className="text-[10px] uppercase font-bold text-red-500/40 tracking-widest">Urgent</span>
                        </motion.div>

                        {/* Node 2: Displaced Task A */}
                        <motion.div
                            initial={{ y: 0 }}
                            animate={isInView ? {
                                y: [0, 56, 56, 56, 0, 0] // 44px + 12px gap
                            } : {}}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: EASE,
                                times: [0, 0.1, 0.6, 0.8, 0.9, 1]
                            }}
                            className="absolute top-0 h-11 w-full rounded-sm bg-card border border-border/40 p-4 flex items-center gap-3 shadow-xs z-20"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span className="text-sm font-medium text-foreground">Deep Work</span>
                        </motion.div>

                        {/* Node 3: Displaced Task B (Pushed off) */}
                        <motion.div
                            initial={{ y: 56, opacity: 1 }}
                            animate={isInView ? {
                                y: [56, 112, 112, 112, 56, 56],
                                opacity: [1, 1, 1, 0.3, 1, 1],
                                filter: ["none", "none", "none", "grayscale(100%)", "none", "none"]
                            } : {}}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: EASE,
                                times: [0, 0.1, 0.6, 0.8, 0.9, 1]
                            }}
                            className="absolute top-0 h-11 w-full rounded-sm bg-card border border-border/40 p-4 flex items-center gap-3 shadow-xs z-10"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                            <span className="text-sm font-medium text-foreground">Email Review</span>
                        </motion.div>

                        {/* Status HUD - Minimalist */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? {
                                opacity: [0, 0, 1, 1, 0, 0],
                                y: [10, 10, 0, 0, -10, -10]
                            } : {}}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: EASE,
                                times: [0, 0.15, 0.25, 0.6, 0.7, 1]
                            }}
                            className="absolute bottom-4 left-1/2 -translate-x-1/2"
                        >
                            <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-green-600 dark:text-green-400 uppercase tracking-widest bg-green-500/5 px-3 py-1.5 rounded-full border border-green-500/20">
                                <span className="w-1 h-1 rounded-full bg-green-500" />
                                Schedule Re-optimized
                            </div>
                        </motion.div>

                        {/* Tomorrow Hint - Minimalist */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? {
                                opacity: [0, 0, 0, 1, 0, 0],
                                y: [0, 0, 0, 0, 0, 0]
                            } : {}}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: EASE,
                                times: [0, 0.6, 0.65, 0.85, 0.95, 1]
                            }}
                            className="absolute top-[170px] left-0 right-0 text-center"
                        >
                            <span className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-widest font-bold italic">
                                Pushed to tomorrow
                            </span>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    )
}
