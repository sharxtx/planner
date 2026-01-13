import { motion } from 'framer-motion'

export default function Timeline() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative hidden lg:block"
        >
            <div className="relative h-[520px] w-[340px]">
                {/* Time Labels - Left Column */}
                <div className="absolute left-0 top-0 h-full w-[72px]">
                    {[
                        { time: '6:00 AM', top: '0%' },
                        { time: '9:00 AM', top: '20%' },
                        { time: '12:00 PM', top: '40%' },
                        { time: '3:00 PM', top: '60%' },
                        { time: '6:00 PM', top: '80%' },
                        { time: '9:00 PM', top: '100%' },
                    ].map((marker, i) => (
                        <span
                            key={i}
                            className="absolute right-0 text-xs font-medium text-muted-foreground/50 font-mono"
                            style={{ top: marker.top }}
                        >
                            {marker.time}
                        </span>
                    ))}
                </div>

                {/* Horizontal Grid Lines - rendered before events to stay behind */}
                <div className="absolute left-[84px] top-2 -z-10 h-full w-full pointer-events-none">
                    {[
                        { top: '0%' },
                        { top: '20%' },
                        { top: '40%' },
                        { top: '60%' },
                        { top: '80%' },
                        { top: '100%' },
                    ].map((line, i) => (
                        <div
                            key={i}
                            className="absolute left-0 h-px w-[420px] bg-linear-to-r from-border/80 to-transparent"
                            style={{ top: line.top }}
                        />
                    ))}
                </div>

                {/* Vertical Timeline Line */}
                <div className="absolute left-[84px] top-0 h-full w-px bg-border/50" />

                {/* Events - Right of timeline */}
                <div className="absolute left-[100px] z-10 top-0 h-full w-[220px]">

                    {/* Small accent block - top */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="absolute top-[0%] left-[8px] h-[20px] w-[40px] z-2 rounded-sm bg-chart-5/60"
                    />

                    {/* Deep Work - with depth layer */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7, duration: 0.4 }}
                        className="absolute top-[5%] left-[24px] h-[36px] w-[140px] z-2 rounded-sm bg-chart-1/40"
                    />
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.4 }}
                        className="absolute top-[8%] left-[80px] flex h-[44px] w-[180px] items-center rounded-sm bg-chart-1 px-4 shadow-lg z-10"
                    >
                        <span className="text-sm font-medium text-primary-foreground">Deep Work</span>
                    </motion.div>

                    {/* Stand-up - with depth layer */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.95 }}
                        className="absolute top-[22%] left-[32px] h-[28px] w-[160px] z-2 rounded-sm bg-chart-2/50"
                    />
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.0, duration: 0.4 }}
                        className="absolute top-[25%] left-[120px] flex h-[40px] w-[140px] items-center justify-center rounded-sm bg-chart-2 px-4 shadow-lg z-10"
                    >
                        <span className="text-sm font-medium text-foreground">Stand-up</span>
                    </motion.div>

                    {/* Filler bar */}
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ delay: 1.1, duration: 0.3 }}
                        style={{ transformOrigin: 'left' }}
                        className="absolute top-[38%] left-[80px] h-[18px] w-[180px] z-2 rounded-sm bg-chart-5/50"
                    />

                    {/* Lunch - clean, no overlap */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.4 }}
                        className="absolute top-[44%] left-[60px] flex h-[40px] w-[160px] items-center justify-center rounded-sm bg-chart-3 px-4 shadow-lg"
                    >
                        <span className="text-sm font-semibold text-background">Lunch</span>
                    </motion.div>

                    {/* Code Review - with depth layer */}
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: '200px' }}
                        transition={{ delay: 1.3, duration: 0.4 }}
                        className="absolute top-[58%] left-[180px] h-[24px] z-2 rounded-sm bg-chart-5/40"
                    />
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.4, duration: 0.4 }}
                        className="absolute top-[62%] left-[100px] flex h-[44px] w-[170px] items-center rounded-sm bg-chart-1 px-4 shadow-lg z-10"
                    >
                        <span className="text-sm font-medium text-primary-foreground">Code Review</span>
                    </motion.div>

                    {/* Deploy & Monitor - with depth layer */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5 }}
                        className="absolute top-[78%] left-[30px] h-[32px] w-[180px] z-2 rounded-sm bg-chart-4/40"
                    />
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.6, duration: 0.4 }}
                        className="absolute top-[82%] left-[150px] flex h-[44px] w-[190px] items-center rounded-sm bg-chart-4 px-4 shadow-lg z-10"
                    >
                        <span className="text-sm font-medium text-primary-foreground">Deploy & Monitor</span>
                    </motion.div>

                    {/* Small accent block - bottom */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.8 }}
                        className="absolute top-[94%] left-[8px] h-[18px] w-[36px] z-2 rounded-sm bg-chart-5/50"
                    />

                </div>
            </div>
        </motion.div>
    );
}
