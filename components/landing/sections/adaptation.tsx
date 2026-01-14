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

                {/* Text Side */}
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

                {/* Visual Side - Simplified Conflict Resolution */}
                <div className="relative h-[500px] w-full bg-muted/20 dark:bg-[#0F1115] rounded-2xl border border-border/10 shadow-2xl overflow-hidden flex flex-col items-center justify-center">

                    {/* Background Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:100%_100px] opacity-[0.03]" />

                    {/* Simulation Track */}
                    <div className="relative w-full max-w-[320px] flex flex-col gap-3">

                        {/* Time Markers */}
                        <div className="absolute -left-12 top-0 bottom-0 flex flex-col justify-between py-1 text-[10px] font-mono text-muted-foreground/30 h-full">
                            <div>2 PM</div>
                            <div>3 PM</div>
                            <div>4 PM</div>
                        </div>

                        {/* Static Header Node (Pre-Resolution state) */}
                        <motion.div
                            animate={isInView ? { scale: [1, 1.02, 1], opacity: [1, 0.5, 1] } : {}}
                            transition={{ duration: 1, delay: 2, repeat: Infinity, repeatDelay: 3 }}
                            className="absolute -top-12 left-0 right-0 text-center"
                        >
                            <span className="text-[10px] font-mono uppercase tracking-widest text-red-500 font-bold">Conflict Detected</span>
                        </motion.div>

                        {/* Node 1: Incoming Emergency Task */}
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
                            className="h-11 w-full rounded-sm bg-red-500/10 border border-red-500/30 border-l-[3px] border-l-red-500 p-4 flex items-center justify-between shadow-sm z-30"
                        >
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-red-600 dark:text-red-400">Emergency Fix</span>
                                <span className="w-1 h-1 rounded-full bg-red-500 animate-pulse" />
                            </div>
                            <span className="text-[10px] font-mono font-bold text-red-500/40 uppercase tracking-widest">New</span>
                        </motion.div>

                        {/* Node 2: Displaced Task 1 */}
                        <motion.div
                            initial={{ y: 0 }}
                            animate={isInView ? { y: 0 } : {}} // Already in place via flex
                            transition={{ duration: 0.8, delay: 1, ease: EASE }}
                            className="h-11 w-full rounded-sm bg-card border border-border/40 p-4 flex items-center gap-3 shadow-sm z-20"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span className="text-sm font-medium text-foreground">Code Review</span>
                            <span className="ml-auto text-xs font-mono text-muted-foreground/50 font-normal">Pushing...</span>
                        </motion.div>

                        {/* Node 3: Displaced Task 2 */}
                        <motion.div
                            initial={{ y: 0 }}
                            animate={isInView ? { y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 1.1, ease: EASE }}
                            className="h-11 w-full rounded-sm bg-card border border-border/40 p-4 flex items-center gap-3 shadow-sm z-10"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                            <span className="text-sm font-medium text-foreground">Weekly Wrap</span>
                        </motion.div>

                        {/* Resolution Toast */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 50 } : {}}
                            transition={{ duration: 0.8, delay: 1.5, ease: EASE }}
                            className="absolute -bottom-16 left-0 right-0 text-center"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                                <span className="w-1 h-1 rounded-full bg-green-500" />
                                <span className="text-[10px] font-mono text-green-600 dark:text-green-400 uppercase tracking-widest font-bold">Solved automatically</span>
                            </div>
                        </motion.div>

                    </div>
                </div>

            </div>
        </section>
    )
}

