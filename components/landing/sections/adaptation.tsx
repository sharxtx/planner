'use client'

import { motion } from 'motion/react'

const EASE = [0.22, 1, 0.36, 1] as const

export default function Adaptation() {
    return (
        <section className="py-32 px-5 sm:px-12 border-t border-border/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* Text Side */}
                <div>
                    <h2 className="text-[32px] font-medium tracking-tight leading-tight text-foreground mb-4">
                        Ready for Reality <br /> The schedule adapts.
                    </h2>
                    <div className="space-y-8 mt-12">
                        <div className="flex gap-4">
                            <div className="text-border font-mono text-sm pt-1">01</div>
                            <div>
                                <h3 className="text-[15px] font-medium text-foreground">Edit a task duration</h3>
                                <p className="text-sm text-muted-foreground mt-1"><span className="text-muted-foreground/40">›</span> Expanding a task automatically pushes the schedule.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-border font-mono text-sm pt-1">02</div>
                            <div>
                                <h3 className="text-[15px] font-medium text-foreground">Priority protection</h3>
                                <p className="text-sm text-muted-foreground mt-1">Lower priority tasks slide to tomorrow.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Visual Side - Cause -> Effect Motion */}
                <div className="relative h-[400px] bg-transparent rounded-2xl p-8 border border-border/20 overflow-hidden">
                    <div className="relative h-full w-full flex flex-col gap-3 max-w-[300px] mx-auto">

                        {/* Task 1 (Expanding) */}
                        <motion.div
                            initial={{ height: 60 }}
                            whileInView={{ height: 140 }}
                            transition={{ duration: 1.2, delay: 0.5, ease: EASE as any, repeat: Infinity, repeatDelay: 3 }}
                            className="w-full bg-planner-blue/10 border-l-2 border-planner-blue rounded-sm p-4 overflow-hidden relative"
                        >
                            <div className="h-2 w-24 bg-planner-blue/30 rounded-full mb-2" />
                            <div className="h-1.5 w-16 bg-planner-blue/20 rounded-full" />
                        </motion.div>

                        {/* Task 2 (Sliding Down) */}
                        <motion.div
                            initial={{ y: 0 }}
                            whileInView={{ y: 80 }}
                            transition={{ duration: 1.2, delay: 0.5, ease: EASE as any, repeat: Infinity, repeatDelay: 3 }}
                            className="h-16 w-full bg-planner-sand/10 border-l-2 border-planner-sand rounded-sm p-3"
                        >
                            <div className="h-1.5 w-12 bg-planner-sand/40 rounded-full" />
                        </motion.div>

                        {/* Task 3 (Fading Out/Exiting) */}
                        <motion.div
                            initial={{ opacity: 1, y: 0 }}
                            whileInView={{ opacity: 0, y: 80 }}
                            transition={{ duration: 0.8, delay: 0.6, ease: EASE as any, repeat: Infinity, repeatDelay: 3 }}
                            className="h-16 w-full bg-secondary/40 border-l-2 border-border rounded-sm p-3 opacity-60"
                        >
                            <div className="h-1.5 w-12 bg-secondary-foreground/20 rounded-full" />
                        </motion.div>

                    </div>
                </div>

            </div>
        </section>
    )
}
