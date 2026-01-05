import { PlannerCalendar } from "@/components/planner-calendar";
import Link from "next/link";

export default function CalendarPage() {
    return (
        <div className="flex min-h-screen flex-col items-center bg-[var(--background)] p-4 font-sans text-[var(--foreground)] sm:p-8">
            <div className="w-full max-w-7xl">
                <header className="mb-6 flex items-center justify-start">
                    <Link
                        href="/"
                        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-[var(--accent)] hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12" />
                            <polyline points="12 19 5 12 12 5" />
                        </svg>
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
