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
                <div ref={visualRef} className="relative h-[500px] w-full border border-border/10 rounded-2xl overflow-hidden bg-[#0F1115] lg:order-2 shadow-2xl">

                    {/* Background Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:100%_100px]" />

                    {/* Time Labels */}
                    <div className="absolute left-6 top-8 bottom-8 w-8 flex flex-col justify-between text-[10px] font-mono text-muted-foreground/30 py-2">
                        {['9 AM', '11 AM', '1 PM', '3 PM', '5 PM'].map(time => (
                            <div key={time}>{time}</div>
                        ))}
                    </div>

                    {/* Timeline Container */}
                    <div className="absolute left-20 right-8 top-8 bottom-8">
                        {/* Static Event: 'Team Sync' */}
                        <div className="absolute top-[5%] h-[15%] w-full rounded-lg bg-white/5 border border-white/10 p-4 transition-colors hover:bg-white/10 flex flex-col justify-center gap-1 group">
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                                <span className="text-sm font-medium text-white/90 group-hover:text-white">Product Strategy</span>
                            </div>
                            <span className="text-xs text-white/40 pl-3.5">10:00 AM • Zoom</span>
                        </div>

                        {/* Static Event: 'Lunch' */}
                        <div className="absolute top-[45%] h-[10%] w-full rounded-lg bg-white/5 border border-white/10 p-4 flex items-center transition-colors hover:bg-white/10 gap-3 group">
                            <div className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                            <span className="text-sm font-medium text-white/90 group-hover:text-white">Lunch Break</span>
                        </div>

                        {/* Animated Planner Insertions */}
                        <motion.div
                            style={{ y: yPlanner }}
                            className="absolute inset-0"
                        >
                            {/* Task 1: Fits in gap */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                className="absolute top-[24%] h-[18%] w-[95%] left-[5%] rounded-lg bg-[#3B82F6]/10 border-l-[3px] border-[#3B82F6] p-4 shadow-lg backdrop-blur-xs flex flex-col justify-center gap-1"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-[#3B82F6]">Deep Work: Core Features</span>
                                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#3B82F6]/60">Auto-Scheduled</span>
                                </div>
                                <span className="text-xs text-[#3B82F6]/60">High Priority Task</span>
                            </motion.div>

                            {/* Task 2: Fits in gap */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                                transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                className="absolute top-[60%] h-[25%] w-[95%] left-[5%] rounded-lg bg-[#D97706]/10 border-l-[3px] border-[#D97706] p-4 shadow-lg backdrop-blur-xs flex flex-col justify-center gap-1"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-[#D97706]">Review PRs & Documentation</span>
                                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#D97706]/60">Flexible</span>
                                </div>
                                <span className="text-xs text-[#D97706]/60">3 Pending Review</span>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
