'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

export default function Philosophy() {
    const containerRef = useRef<HTMLDivElement>(null)
    const visualRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(visualRef, { once: true, amount: 0.3 })

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    // Parallax: Planner tasks move slightly, Grid stays fixed
    const yPlanner = useTransform(scrollYProgress, [0, 1], [0, -40])
    const yContent = useTransform(scrollYProgress, [0, 1], [0, -20])

    return (
        <section ref={containerRef} className="py-32 px-6 sm:px-12 border-t border-border/10 bg-background/50">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* Left: Text */}
                <motion.div
                    style={{ y: yContent }}
                    className="flex flex-col gap-8 order-2 lg:order-1"
                >
                    <div>
                        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-medium tracking-tight leading-tight text-foreground mb-6">
                            <span className="inline-block">It doesn&apos;t replace your calendar.</span>
                            <span className="block text-muted-foreground opacity-70">
                                It <span className="font-playfair italic text-foreground">completes</span> it.
                            </span>
                        </h2>

                        <p className="text-lg text-secondary-foreground/80 leading-relaxed font-sans max-w-md">
                            Planner.ai reads your existing events and constraints. It slots tasks into the gaps, ensuring you never double-book yourself.
                        </p>
                    </div>

                    <div className="space-y-5">
                        {[
                            { title: 'Respects existing meetings', desc: 'Syncs with Google Calendar & Outlook' },
                            { title: 'Zero double-booking', desc: 'Tasks only go where you have time' },
                            { title: 'Live Two-way Sync', desc: 'Changes reflect instantly everywhere' }
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                                className="flex items-start gap-4 group"
                            >
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-planner-sand shrink-0 group-hover:scale-125 transition-transform" />
                                <div>
                                    <div className="text-[15px] font-medium text-foreground">{item.title}</div>
                                    <div className="text-[14px] text-muted-foreground/60">{item.desc}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right: Layered Visual (Grid + Planner Blocks) */}
                <div ref={visualRef} className="relative h-[500px] w-full border border-border/10 rounded-2xl overflow-hidden bg-muted/20 dark:bg-[#0F1115] lg:order-2 shadow-2xl">

                    {/* Background Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:100%_100px] opacity-[0.03]" />

                    {/* Time Labels */}
                    <div className="absolute left-6 top-8 bottom-8 w-8 flex flex-col justify-between text-[10px] font-mono text-muted-foreground/30 py-2">
                        {['9 AM', '11 AM', '1 PM', '3 PM', '5 PM'].map(time => (
                            <div key={time}>{time}</div>
                        ))}
                    </div>

                    {/* Timeline Container */}
                    <div className="absolute left-20 right-8 top-8 bottom-8 text-sm font-medium tracking-tight">
                        {/* Static Event: 'Team Sync' */}
                        <div className="absolute top-[5%] h-11 w-full rounded-sm bg-card border border-border/40 p-4 transition-colors hover:border-border/60 flex items-center gap-3 group shadow-sm text-card-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-(--cal-strategy) shrink-0" />
                            <span>Product Strategy</span>
                            <span className="ml-auto text-xs font-mono text-muted-foreground/50 font-normal">10 AM</span>
                        </div>

                        {/* Static Event: 'Lunch' */}
                        <div className="absolute top-[45%] h-11 w-full rounded-sm bg-card border border-border/40 p-4 flex items-center gap-3 transition-colors hover:border-border/60 group shadow-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-(--cal-lunch) shrink-0" />
                            <span>Lunch Break</span>
                            <span className="ml-auto text-xs font-mono text-muted-foreground/50 font-normal">1 PM</span>
                        </div>

                        {/* Animated Planner Insertions */}
                        <motion.div
                            style={{ y: yPlanner }}
                            className="absolute inset-0"
                        >
                            {/* Task 1: Fits in gap */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                className="absolute top-[22%] h-12 w-[95%] left-[5%] rounded-sm bg-(--cal-deep)/10 border border-(--cal-deep)/20 border-l-[3px] border-l-(--cal-deep) p-4 shadow-sm backdrop-blur-xs flex items-center justify-between group"
                            >
                                <span className="text-(--cal-deep) brightness-75 dark:brightness-100 font-medium">Deep Work: Core Features</span>
                                <span className="text-[10px] uppercase tracking-widest font-bold text-(--cal-deep)/50 brightness-75 dark:brightness-100">Auto</span>
                            </motion.div>

                            {/* Task 2: Fits in gap */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                                transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                className="absolute top-[60%] h-12 w-[95%] left-[5%] rounded-sm bg-(--cal-review)/10 border border-(--cal-review)/20 border-l-[3px] border-l-(--cal-review) p-4 shadow-sm backdrop-blur-xs flex items-center justify-between group"
                            >
                                <span className="text-(--cal-review) brightness-75 dark:brightness-100 font-medium">Review PRs</span>
                                <span className="text-[10px] uppercase tracking-widest font-bold text-(--cal-review)/50 brightness-75 dark:brightness-100">Flex</span>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
