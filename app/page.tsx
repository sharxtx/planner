'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import PlannerLogo from '@/components/ui/planner-logo';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden font-sans text-foreground">
      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-12">
        <div className="flex items-center gap-2">
          <PlannerLogo />
        </div>
        <Link href="/dashboard">
          <Button variant="ghost" className="rounded-full font-medium text-muted-foreground hover:text-foreground hover:bg-accent">
            Log in
          </Button>
        </Link>
      </nav>

      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-6 py-12 sm:px-12 lg:py-0">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">

          {/* Left Column: Text Content */}
          <div className="flex flex-col items-center text-center gap-8 lg:items-start lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-serif font-medium leading-[1.1] tracking-[-0.02em] sm:text-6xl lg:text-7xl text-white"
            >
              Stop deciding what to do next.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-xl text-lg text-muted-foreground sm:text-xl font-normal leading-relaxed tracking-[-0.01em]"
            >
              Planner.ai takes your tasks, constraints, and energy — and builds a schedule that actually fits your day.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Link href="/dashboard">
                <Button size="lg" className="h-12 rounded-xl bg-[#4F7CFF] px-8 text-base font-medium text-white shadow-[0_1px_2px_rgba(0,0,0,0.4),0_8px_24px_rgba(0,0,0,0.35)] hover:bg-[#3F6AF0] border-none">
                  Plan my day
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="h-12 rounded-xl border-[#2A2E38] bg-transparent px-8 text-base font-medium text-[#E6E7EB] hover:bg-white/5 shadow-none">
                See how it works
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Timeline Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            {/* Timeline Container */}
            <div className="relative h-[520px] w-[340px]">
              {/* Time Labels - Left Column */}
              <div className="absolute left-0 top-0 h-full w-[72px]">
                {[
                  { time: '6:00 AM', top: '0%' },
                  { time: '9:00 AM', top: '20%' },
                  { time: '12:00 PM', top: '40%' },
                  { time: '3:00 PM', top: '60%' },
                  { time: '6:00 PM', top: '80%' },
                ].map((marker, i) => (
                  <span
                    key={i}
                    className="absolute right-0 text-xs font-medium text-muted-foreground"
                    style={{ top: marker.top }}
                  >
                    {marker.time}
                  </span>
                ))}
              </div>

              {/* Vertical Timeline Line */}
              <div className="absolute left-[84px] top-0 h-full w-px bg-border/30" />

              {/* Events - Right of timeline */}
              <div className="absolute left-[100px] top-0 h-full w-[220px]">

                {/* Small accent block - top */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute top-[0%] left-[8px] h-[20px] w-[40px] rounded bg-chart-5/60"
                />

                {/* Deep Work - with depth layer */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                  className="absolute top-[5%] left-[24px] h-[36px] w-[140px] rounded-lg bg-chart-1/40"
                />
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                  className="absolute top-[8%] left-[80px] flex h-[44px] w-[180px] items-center rounded-lg bg-chart-1 px-4 shadow-lg z-10"
                >
                  <span className="text-sm font-medium text-primary-foreground">Deep Work</span>
                </motion.div>

                {/* Stand-up - with depth layer */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.95 }}
                  className="absolute top-[22%] left-[32px] h-[28px] w-[160px] rounded-lg bg-chart-2/50"
                />
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0, duration: 0.4 }}
                  className="absolute top-[25%] left-[120px] flex h-[40px] w-[140px] items-center justify-center rounded-lg bg-chart-2 px-4 shadow-lg z-10"
                >
                  <span className="text-sm font-medium text-foreground">Stand-up</span>
                </motion.div>

                {/* Filler bar */}
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 1.1, duration: 0.3 }}
                  style={{ transformOrigin: 'left' }}
                  className="absolute top-[38%] left-[16px] h-[18px] w-[180px] rounded-md bg-chart-5/50"
                />

                {/* Lunch - clean, no overlap */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.4 }}
                  className="absolute top-[44%] left-[60px] flex h-[40px] w-[160px] items-center justify-center rounded-lg bg-chart-3 px-4 shadow-lg"
                >
                  <span className="text-sm font-semibold text-background">Lunch</span>
                </motion.div>

                {/* Code Review - with depth layer */}
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: '200px' }}
                  transition={{ delay: 1.3, duration: 0.4 }}
                  className="absolute top-[58%] left-[8px] h-[24px] rounded-md bg-chart-5/40"
                />
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4, duration: 0.4 }}
                  className="absolute top-[62%] left-[100px] flex h-[44px] w-[170px] items-center rounded-lg bg-chart-1 px-4 shadow-lg z-10"
                >
                  <span className="text-sm font-medium text-primary-foreground">Code Review</span>
                </motion.div>

                {/* Deploy & Monitor - with depth layer */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 }}
                  className="absolute top-[78%] left-[20px] h-[32px] w-[180px] rounded-lg bg-chart-4/40"
                />
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6, duration: 0.4 }}
                  className="absolute top-[82%] left-[150px] flex h-[44px] w-[190px] items-center rounded-lg bg-chart-4 px-4 shadow-lg z-10"
                >
                  <span className="text-sm font-medium text-primary-foreground">Deploy & Monitor</span>
                </motion.div>

                {/* Small accent block - bottom */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                  className="absolute top-[94%] left-[8px] h-[18px] w-[36px] rounded bg-chart-5/50"
                />

              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="relative z-10 px-6 py-6 text-center text-xs text-gray-600">
        <p>© 2026 Planner.ai</p>
      </footer>
    </div>
  );
}
