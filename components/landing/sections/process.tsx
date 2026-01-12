'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

const steps = [
    {
        id: 1,
        title1: 'Dump your',
        title2: 'brain.',
        description: "Don't worry about when. Just tell us what you need to do, how long it takes, and any deadline constraints.",
        image: '/images/task-input.png',
        align: 'right', // image on right
    },
    {
        id: 2,
        title1: 'AI builds',
        title2: 'the plan.',
        description: "Our engine slots tasks into the perfect gaps in your schedule, respecting your energy levels and existing meetings.",
        icon: Sparkles, // Code-based visual for AI step
        align: 'left', // visual on left
    },
    {
        id: 3,
        title1: 'Execute',
        title2: 'with flow.',
        description: "Wake up to a realistic plan. No decision fatigue, just clear next steps.",
        image: '/images/calendar-preview.png',
        align: 'right',
    },
]

export default function ProcessSection() {
    return (
        <section className="relative py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 sm:px-12">
                <div className="flex flex-col gap-24 lg:gap-32 relative">
                    {/* Vertical connecting line */}
                    <div className="absolute left-[50%] top-0 bottom-0 w-px bg-linear-to-b from-transparent via-border to-transparent hidden lg:block" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className={cn(
                                "flex flex-col gap-8 lg:gap-16 items-center",
                                step.align === 'left' ? "lg:flex-row-reverse" : "lg:flex-row"
                            )}
                        >
                            {/* Text Side */}
                            <div className={cn(
                                "flex-1 flex flex-col justify-center",
                                step.align === 'left' ? "lg:items-start lg:text-left" : "lg:items-end lg:text-right"
                            )}>
                                <div className="relative z-10 p-8 rounded-2xl bg-background/50 backdrop-blur-sm border border-transparent hover:border-border/50 transition-colors duration-500">
                                    <span className="flex items-center justify-center size-12 rounded-full bg-primary/10 text-primary font-mono text-lg font-bold mb-6">
                                        0{step.id}
                                    </span>
                                    <h3 className="text-4xl sm:text-5xl font-medium tracking-tight text-foreground mb-4">
                                        {step.title1} <span className="text-muted-foreground">{step.title2}</span>
                                    </h3>
                                    <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>

                            {/* Visual Side */}
                            <div className="flex-1 w-full flex justify-center lg:justify-center relative group">
                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                <div className={cn(
                                    "relative w-full max-w-xl aspect-4/3 rounded-2xl overflow-hidden border border-border/50 bg-card/50 shadow-2xl",
                                    "transform transition-transform duration-700 hover:scale-[1.02] hover:-rotate-1"
                                )}>
                                    {step.image ? (
                                        <Image
                                            src={step.image}
                                            alt={`${step.title1} ${step.title2}`}
                                            fill
                                            className="object-cover object-top"
                                        />
                                    ) : (
                                        /* AI Visualization Placeholder */
                                        <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-background to-muted/20">
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-primary/40 blur-2xl animate-pulse" />
                                                {step.icon && <step.icon className="size-24 text-primary relative z-10 drop-shadow-[0_0_15px_rgba(var(--primary),0.5)]" />}
                                            </div>
                                        </div>
                                    )}

                                    {/* Glass overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-background/20 to-transparent pointer-events-none" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
