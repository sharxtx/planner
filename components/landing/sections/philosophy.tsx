'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

const EASE = [0.22, 1, 0.36, 1]

export default function Philosophy() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    // Parallax: Planner tasks move slightly, Grid stays fixed
    const yPlanner = useTransform(scrollYProgress, [0, 1], [0, -40])

    return (
        <section className="py-32 px-5 sm:px-12 border-t border-border/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* Left: Text */}
                <div>
                    <h2 className="text-[32px] font-medium tracking-tight leading-tight text-foreground mb-4">
                        Calendar-First Philosophy
                    </h2>
                    <p className="text-[17px] leading-[1.6] text-muted-foreground mb-8 max-w-md">
                        Planner.ai doesn’t replace your calendar. It works with it — planning directly around real events and real time.
                    </p>

                    <div className="space-y-4">
                        {['Existing meetings are respected', 'No double-booking', 'Updates stay in sync'].map((item) => (
                            <div key={item} className="flex items-center gap-3 text-[15px] text-secondary-foreground/60">
                                <div className="w-1.5 h-1.5 rounded-full bg-border" />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Layered Visual (Grid + Planner Blocks) */}
                <div ref={containerRef} className="relative h-[400px] w-full border border-border/20 rounded-xl overflow-hidden bg-card/10">

                    {/* Layer 1: Static Grid (Faint, fixed) */}
                    <div className="absolute inset-0 grid grid-cols-7 grid-rows-5 gap-px bg-transparent z-0 opacity-20 pointer-events-none">
                        {[...Array(35)].map((_, i) => (
                            <div key={i} className="bg-border/30" />
                        ))}
                    </div>

                    {/* Layer 2: Planner Timeline Blocks (Sharp, Moves) */}
                    <motion.div style={{ y: yPlanner }} className="absolute inset-0 z-10 p-8">
                        {/* Abstract Planner Blocks aligned to grid logic */}
                        <div className="relative h-full w-full">
                            {/* Meeting (Fixed Calendar Event) - Static/Ghosted */}
                            <div className="absolute top-[10%] left-[14%] w-[20%] h-[15%] bg-secondary/20 border border-border/20 rounded-sm" />

                            {/* Planner Task 1 (High Contrast) */}
                            <div className="absolute top-[30%] left-[14%] w-[25%] h-[20%] bg-planner-slate/20 border-l-2 border-planner-slate rounded-sm shadow-sm flex items-center px-3">
                                <div className="h-1.5 w-12 bg-planner-slate/40 rounded-full" />
                            </div>

                            {/* Planner Task 2 */}
                            <div className="absolute top-[55%] left-[14%] w-[25%] h-[10%] bg-planner-sand/20 border-l-2 border-planner-sand rounded-sm shadow-sm flex items-center px-3">
                                <div className="h-1.5 w-8 bg-planner-sand/60 rounded-full" />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
