'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { Calendar, Zap, MessageSquare, ArrowRight, BarChart3 } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function FeaturesSection() {
    return (
        <section className="relative py-32 bg-muted/5">
            <div className="mx-auto max-w-7xl px-6 sm:px-12">
                <div className="mb-20 max-w-3xl">
                    <h2 className="text-3xl font-medium tracking-tight sm:text-5xl text-balance">
                        Features built for <span className="text-muted-foreground">flow state.</span>
                    </h2>
                    <p className="mt-6 text-xl text-muted-foreground text-pretty">
                        Everything you need to focus on deep work, while we handle the logistics.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-6 h-auto md:h-[800px]">

                    {/* Main Feature - Google Calendar Sync (Large) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="md:col-span-4 md:row-span-2 relative group overflow-hidden rounded-3xl border border-border bg-card shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                        <div className="p-8 md:p-12 h-full flex flex-col">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                                    <Calendar className="size-6" />
                                </div>
                                <h3 className="text-2xl font-medium">Two-way Sync</h3>
                            </div>
                            <p className="text-muted-foreground text-lg mb-8 max-w-md">
                                We integrate directly with Google Calendar. Meetings from your calendar block time in Planner, and tasks from Planner show up in your calendar.
                            </p>

                            {/* Visual Container */}
                            <div className="relative flex-1 w-full rounded-t-2xl overflow-hidden border-t border-l border-r border-border shadow-2xl mt-auto">
                                <Image
                                    src="/images/calendar-preview.png"
                                    alt="Calendar Sync"
                                    fill
                                    className="object-cover object-top hover:scale-[1.02] transition-transform duration-700 ease-out"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Feature 2 - AI Scheduling (Medium) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-3xl border border-border bg-card shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                        <div className="p-8 h-full flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                                        <Zap className="size-6" />
                                    </div>
                                    <h3 className="text-xl font-medium">Energy Aware</h3>
                                </div>
                                <p className="text-muted-foreground">
                                    Schedule demanding tasks when you're sharpest.
                                </p>
                            </div>
                            <div className="mt-6 flex gap-2">
                                <div className="h-2 flex-1 rounded-full bg-chart-1/20 overflow-hidden">
                                    <motion.div
                                        className="h-full bg-chart-1"
                                        initial={{ width: "0%" }}
                                        whileInView={{ width: "80%" }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                    />
                                </div>
                                <div className="h-2 flex-1 rounded-full bg-chart-2/20 overflow-hidden">
                                    <motion.div
                                        className="h-full bg-chart-2"
                                        initial={{ width: "0%" }}
                                        whileInView={{ width: "40%" }}
                                        transition={{ duration: 1, delay: 0.7 }}
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Feature 3 - Quick Input (Medium) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-3xl border border-border bg-card shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                        <div className="p-8 h-full flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-green-500/10 text-green-500">
                                        <MessageSquare className="size-6" />
                                    </div>
                                    <h3 className="text-xl font-medium">Natural Language</h3>
                                </div>
                                <p className="text-muted-foreground">
                                    "Call mom at 5pm" — just type and go.
                                </p>
                            </div>

                            <div className="mt-4 p-3 rounded-lg bg-muted text-sm font-mono text-muted-foreground border border-border">
                                <span className="text-primary animate-pulse">|</span> write documentation tomorrow
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
