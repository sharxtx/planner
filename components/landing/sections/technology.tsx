'use client'

import AISchedulingNode from "./ai-scheduling-node"

export default function Technology() {
    return (
        <section className="py-24 px-5 flex items-center sm:px-12 border-t border-border/10">
            {/* <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-[22px] font-medium tracking-tight text-foreground mb-4">
                    Built with AI. Designed for humans.
                </h2>
                <p className="text-[17px] leading-[1.6] text-muted-foreground text-balance">
                    Planner.ai uses intelligent scheduling models to reason about time and constraints — so you don’t have to.
                </p>
            </div> */}
            <div className="flex-1">
                <AISchedulingNode />
            </div>
        </section>
    )
}
