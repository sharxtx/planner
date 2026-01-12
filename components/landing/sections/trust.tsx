'use client'

export default function Trust() {
    return (
        <section className="py-24 px-5 sm:px-12 bg-card/20 border-y border-border/10">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-[22px] font-medium text-foreground mb-12">
                    What Planner.ai won’t do
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="text-[17px] font-medium text-neutral-300">It won’t nag you.</div>
                    </div>
                    <div className="text-center">
                        <div className="text-[17px] font-medium text-neutral-300">It won’t shame unfinished tasks.</div>
                    </div>
                    <div className="text-center">
                        <div className="text-[17px] font-medium text-neutral-300">It won’t over-optimize.</div>
                    </div>
                </div>

                <p className="mt-12 text-[15px] text-muted-foreground/60 max-w-lg mx-auto leading-relaxed">
                    Technology should remove friction, not add guilt. We built a tool that respects your psychology as much as your schedule.
                </p>
            </div>
        </section>
    )
}
