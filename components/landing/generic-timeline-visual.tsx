'use client'

import { motion, AnimatePresence } from 'framer-motion'

export default function GenericTimelineVisual({
    activeStep = 0,
    showPlanningTask = false
}: {
    activeStep?: number,
    showPlanningTask?: boolean
}) {
    return (
        <div className="relative h-[520px] w-full max-w-[400px] font-sans">
            {/* Horizontal Grid Lines */}
            <div className="absolute left-[84px] top-0 h-full w-full pointer-events-none opacity-20">
                {[10, 40, 70, 100].map((top, i) => (
                    <div
                        key={i}
                        className="absolute left-0 w-full h-px bg-linear-to-r from-border/40 via-border/10 to-transparent"
                        style={{ top: `${top}%` }}
                    />
                ))}
            </div>

            {/* Time Labels */}
            <div className="absolute left-0 top-0 h-full w-[72px]">
                {[
                    { time: '9:00 AM', top: '10%' },
                    { time: '12:00 PM', top: '40%' },
                    { time: '3:00 PM', top: '70%' },
                    { time: '6:00 PM', top: '100%' },
                ].map((marker, i) => (
                    <span
                        key={i}
                        className="absolute right-0 text-xs font-medium text-muted-foreground/40 font-mono"
                        style={{ top: marker.top }}
                    >
                        {marker.time}
                    </span>
                ))}
            </div>

            {/* Vertical Timeline Line */}
            <div className="absolute left-[84px] top-0 h-full w-px bg-border/20" />

            {/* Events Container */}
            <div className="absolute left-[100px] z-10 top-0 h-full right-0">

                {/* 1. Morning Walk (Stable) */}
                <div className="relative h-full w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="absolute top-[15%] left-0 h-11 w-[90%] flex items-center rounded-sm bg-[#1A2333] border border-white/5 shadow-2xl z-10"
                    >
                        <span className="text-sm text-[#94A3B8] ml-4">Morning Walk</span>
                    </motion.div>

                    {/* 2. Leet Code (Stable) */}
                    <div className="absolute top-[40%] left-0 w-full h-11">
                        <div className="absolute top-0 left-0 flex h-full w-[80%] items-center rounded-sm bg-[#BCA47D] shadow-xl z-10">
                            <span className="text-sm text-slate-900 tracking-tight ml-4">Leet Code</span>
                        </div>
                    </div>

                    {/* 3. The New Task (Side Project) */}
                    <AnimatePresence>
                        {showPlanningTask && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20
                                }}
                                className="absolute top-[68%] left-0 w-full h-13 flex items-center rounded-sm bg-[#D97738] shadow-2xl border border-white/10 z-30"
                            >
                                <span className="text-sm text-white ml-4">Side Project</span>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* 4. Gym Session (Displaces Down) */}
                    <motion.div
                        animate={{ y: showPlanningTask ? 85 : 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 25
                        }}
                        className="absolute top-[70%] left-0 flex h-12 w-[85%] items-center rounded-sm bg-[#334155] shadow-lg z-10"
                    >
                        <span className="text-sm text-slate-300 ml-4">Gym Session</span>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
