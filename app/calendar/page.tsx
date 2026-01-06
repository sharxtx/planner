'use client'

import { PlannerCalendar } from "@/components/planner-calendar";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function CalendarPage() {

    const { setTheme } = useTheme();

    return (
        <div className="flex min-h-screen flex-col items-center bg-[var(--background)] p-4 font-sans text-[var(--foreground)] sm:p-8">
            <div className="w-full max-w-7xl">
                <header className="mb-6 flex items-center justify-start">
                    <Link
                        href="/dashboard"
                        className="flex items-center gap-2 rounded-xl bg-card/50 px-4 py-2 text-sm font-bold shadow-sm backdrop-blur-md transition-all hover:bg-accent hover:text-primary active:scale-95"
                    >
                        <ArrowLeft size={18} />
                        Back to Dashboard
                    </Link>
                </header>

                <main>
                    <PlannerCalendar />
                </main>
            </div>
        </div>
    );
}
