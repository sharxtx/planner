'use client'

import { motion } from 'motion/react'

export default function Adaptation() {
    return (
        <section className="py-32 px-5 sm:px-12 border-t border-border/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* Text Side */}
                <div>
                    <h2 className="text-[32px] font-medium tracking-tight leading-[1.15] text-foreground mb-6">
                        Plans change. <br /> The schedule adapts.
                    </h2>
                    <div className="space-y-8 mt-12">
                        <div className="flex gap-4">
                            <div className="text-muted-foreground/40 font-mono text-sm">01</div>
                            <div>
                                <h3 className="text-[15px] font-medium text-foreground">Edit a task duration</h3>
                                <p className="text-sm text-muted-foreground mt-1">Dragging a task longer pushes everything else down.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-muted-foreground/40 font-mono text-sm">02</div>
                            <div>
                                <h3 className="text-[15px] font-medium text-foreground">Add a new task mid-day</h3>
                                <p className="text-sm text-muted-foreground mt-1">Planner.ai reshuffles to find the next best slot.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-muted-foreground/40 font-mono text-sm">03</div>
                            <div>
                                <h3 className="text-[15px] font-medium text-foreground">Priority protection</h3>
                                <p className="text-sm text-muted-foreground mt-1">Important work stays put; lower priority tasks slide to tomorrow.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Visual Side - Abstract "Snap" Motion */}
                <div className="relative h-[400px] bg-card/30 rounded-2xl p-8 overflow-hidden border border-border/10">
                    <div className="relative h-full w-full flex flex-col gap-3">
                        {/* Event 1 - Fixed */}
                        <div className="h-16 w-full bg-secondary/30 rounded-md border border-border/5" />

                        {/* Event 2 - Expanding */}
                        <motion.div
                            initial={{ height: 60 }}
                            whileInView={{ height: 120 }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
                            className="w-full bg-primary/10 rounded-md border border-primary/20 relative z-10"
                        />

                        {/* Event 3 - Shifting */}
                        <motion.div
                            className="h-20 w-full bg-secondary/30 rounded-md border border-border/5 opacity-50"
                        />
                        <motion.div
                            className="h-24 w-full bg-secondary/30 rounded-md border border-border/5 opacity-30"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}
