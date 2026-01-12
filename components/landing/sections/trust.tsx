'use client'

export default function Trust() {
    return (
        <section className="py-24 px-5 sm:px-12 border-t border-border/10">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-[22px] font-medium tracking-tight text-foreground">
                        What Planner.ai won’t do
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    <div className="flex flex-col items-center text-center gap-4">
                        <div className="w-8 h-px bg-border" />
                        <div className="text-[17px] font-medium text-foreground">It won’t nag you.</div>
                    </div>
                    <div className="flex flex-col items-center text-center gap-4">
                        <div className="w-8 h-px bg-border" />
                        <div className="text-[17px] font-medium text-foreground">It won’t shame unfinished tasks.</div>
                    </div>
                    <div className="flex flex-col items-center text-center gap-4">
                        <div className="w-8 h-px bg-border" />
                        <div className="text-[17px] font-medium text-foreground">It won’t over-optimize.</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
