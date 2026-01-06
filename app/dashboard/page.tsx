import { Button } from "@/components/ui/button";
import { CalendarIcon, LayoutDashboard } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
    return (
        <div className="flex min-h-screen flex-col bg-[var(--background)] font-sans text-[var(--foreground)]">
            {/* Sidebar/Navigation Placeholder */}
            <nav className="border-b border-[var(--border)] bg-[var(--card)]/50 backdrop-blur-xl">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                            <LayoutDashboard size={20} />
                        </div>
                        <span className="text-xl font-bold tracking-tight">Planner.ai</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="h-8 w-8 rounded-full bg-muted"></div>
                    </div>
                </div>
            </nav>

            <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-8">
                    {/* Welcome Section */}
                    <div>
                        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                            Welcome back, User
                        </h1>
                        <p className="mt-2 text-lg text-muted-foreground">
                            Here's what's happening with your projects today.
                        </p>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="group relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-8 shadow-2xl transition-all hover:scale-[1.02] dark:bg-zinc-900/40">
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                <CalendarIcon size={24} />
                            </div>
                            <h3 className="mb-2 text-xl font-bold">Your Calendar</h3>
                            <p className="mb-8 text-muted-foreground">
                                Manage your schedule, track deadlines, and stay organized.
                            </p>
                            <Link href="/calendar">
                                <Button size="lg" className="w-full rounded-xl font-bold font-semibold shadow-lg shadow-primary/20 transition-all hover:shadow-primary/30">
                                    Open Calendar
                                </Button>
                            </Link>
                        </div>

                        {/* Placeholder Cards for premium look */}
                        <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-8 shadow-xl opacity-60 grayscale dark:bg-zinc-900/40">
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
                                <LayoutDashboard size={24} />
                            </div>
                            <h3 className="mb-2 text-xl font-bold">Tasks (Coming Soon)</h3>
                            <p className="text-muted-foreground">
                                Sync your calendar with task management tools.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
