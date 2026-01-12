'use client'

import Image from 'next/image'

export default function Philosophy() {
    return (
        <section className="relative py-32 px-5 sm:px-12 overflow-hidden">
            {/* Visual Background: Abstract Blurred Grid */}
            <div className="absolute inset-0 z-0 opacity-40 select-none pointer-events-none mix-blend-screen">
                <Image
                    src="/images/abstract-grid.png"
                    alt=""
                    fill
                    className="object-cover blur-[2px]"
                />
                <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-[32px] font-medium tracking-tight leading-[1.15] text-foreground mb-6">
                        Your calendar is the <br /> source of truth.
                    </h2>
                    <p className="text-[17px] leading-[1.4] text-muted-foreground mb-8 max-w-md">
                        Planner.ai doesn’t replace your calendar. It works with it — planning directly around real events and real time.
                    </p>

                    <ul className="space-y-4">
                        {['Existing meetings are respected', 'No double-booking', 'Updates stay in sync'].map((item) => (
                            <li key={item} className="flex items-center gap-3 text-[15px] text-neutral-400">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Visual Overlay - Optional: Could be a clean timeline floating over the blurred grid */}
                <div className="hidden lg:block h-[400px] w-full rounded-xl border border-border/10 bg-card/10 backdrop-blur-sm" />
            </div>
        </section>
    )
}
