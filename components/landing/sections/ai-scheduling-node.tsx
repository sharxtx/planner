import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Configuration for Responsive Layouts ---
const events = [
    {
        id: 1,
        label: 'Meeting',
        color: 'var(--tag-meeting)',
        desktop: { x: -170, y: -80 },
        mobile: { x: -60, y: -130 }
    },
    {
        id: 2,
        label: 'Deep Work',
        color: 'var(--tag-deep-work)',
        desktop: { x: 190, y: 0 },
        mobile: { x: 60, y: -65 }
    },
    {
        id: 3,
        label: 'Personal Time',
        color: 'var(--tag-personal)',
        desktop: { x: 210, y: -110 },
        mobile: { x: -60, y: 0 }
    },
    {
        id: 4,
        label: 'Meal Time',
        color: 'var(--tag-meal)',
        desktop: { x: -170, y: 90 },
        mobile: { x: 60, y: 65 }
    },
    {
        id: 5,
        label: 'Gym',
        color: 'var(--tag-gym)',
        desktop: { x: 130, y: 140 },
        mobile: { x: 0, y: 130 }
    },
];

const TracingLine = ({ x, y, color, id, scale }: { x: number, y: number, color: string, id: number, scale: number }) => {
    const tx = x * scale;
    const ty = y * scale;

    // Start coordinates (Center of the hub)
    const startX = 0;
    const startY = 0;

    const path = `M ${startX} ${startY} C ${tx * 0.4} ${startY}, ${tx * 0.4} ${ty}, ${tx} ${ty}`;

    return (
        <g>
            {/* Primary Solid Line */}
            <motion.path
                d={path}
                stroke={color}
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.5, delay: 0.5 + id * 0.1, ease: "easeInOut" }}
                viewport={{ once: true }}
            />

            {/* Terminal Dot (At the event node) */}
            <motion.circle
                cx={tx}
                cy={ty}
                r="4"
                fill={color}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 1.5 + id * 0.1, type: "spring" }}
                viewport={{ once: true }}
            />
        </g>
    );
};

const AISchedulingNode = () => {
    const [scale, setScale] = useState(1);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setScale(0.9); // Use larger scale for mobile distinct layout
                setIsMobile(true);
            } else if (width < 1024) {
                setScale(0.8);
                setIsMobile(false);
            } else {
                setScale(1);
                setIsMobile(false);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="relative w-full py-12 lg:py-24 bg-background overflow-hidden border-y border-border/40">
            <div className="container mx-auto px-4 lg:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-0">

                {/* Left Content */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground mb-6 leading-tight">
                            Built with AI. <br />
                            <span className="text-muted-foreground italic font-normal">Designed for humans.</span>
                        </h2>
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                            Planner.ai uses intelligent scheduling models to reason about time and constraints — so you don’t have to.
                        </p>
                    </motion.div>
                </div>

                {/* Right Animated Section */}
                <div className="w-full lg:w-1/2 h-[450px] lg:h-[600px] relative flex items-center justify-center">

                    <svg className="absolute top-1/2 left-1/2 w-1 h-1 pointer-events-none overflow-visible">
                        <g>
                            <AnimatePresence>
                                {!isMobile && events.map((event) => {
                                    const { x, y } = isMobile ? event.mobile : event.desktop;
                                    return (
                                        <TracingLine
                                            key={`line-${event.id}`}
                                            x={x}
                                            y={y}
                                            color={event.color}
                                            id={event.id}
                                            scale={scale}
                                        />
                                    );
                                })}
                            </AnimatePresence>
                        </g>
                    </svg>

                    {/* Central Node */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        <div
                            className="relative flex items-center justify-center"
                            style={{ transform: `scale(${scale})` }}
                        >
                            <div className="w-24 h-24 relative flex items-center justify-center">
                                <motion.div
                                    className="absolute inset-0 m-auto w-20 h-20 rounded-full border border-(--node-center)"
                                    animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.1, 0.2] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                />
                                <motion.div
                                    className="absolute inset-0 m-auto w-12 h-12 rounded-full border border-(--node-center)"
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                />
                                <div className="w-8 h-8 rounded-full bg-(--node-center)/10 backdrop-blur-sm border border-(--node-center)/50 flex items-center justify-center relative z-20">
                                    <motion.div
                                        className="w-3 h-3 rounded-full bg-(--node-center) shadow-[0_0_15px_2px_var(--node-center)]"
                                        animate={{ opacity: [0.8, 1, 0.8], scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Labels */}
                    {events.map((event) => {
                        const { x, y } = isMobile ? event.mobile : event.desktop;
                        const isLeft = x < 0;
                        const isCenter = x === 0;

                        return (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{
                                    opacity: 1,
                                    scale: 1,
                                    x: x * scale,
                                    y: y * scale
                                }}
                                transition={{ delay: 1.2 + event.id * 0.1, type: "spring" }}
                                viewport={{ once: true }}
                                className="absolute top-1/2 left-1/2 z-20 w-0 h-0 flex items-center justify-center"
                            >
                                <div
                                    className={`absolute top-1/2 -translate-y-1/2 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm rounded-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] text-white font-semibold whitespace-nowrap flex items-center gap-2`}
                                    style={{
                                        backgroundColor: event.color,
                                        left: isCenter
                                            ? '-50%' // Center align relative to dot (moved by transform)
                                            : isLeft ? 'auto' : '16px',
                                        right: isCenter
                                            ? 'auto'
                                            : isLeft ? '16px' : 'auto',
                                        transform: isCenter ? 'translateX(-50%) translateY(24px)' : 'none' // Push centered label (Gym) down
                                    }}
                                >
                                    {event.label}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AISchedulingNode;
