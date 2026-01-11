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
            <div className="relative h-[600px] w-full max-w-lg">
              {/* Vertical Line */}
              <div className="absolute left-[80px] top-0 h-full w-[1px] bg-[#23262E]" />

              {/* Time Markers & Horizontal Lines */}
              {[
                { time: '6:00 AM', top: '10%' },
                { time: '9:00 AM', top: '35%' },
                { time: '12:00 PM', top: '60%' },
                { time: '3:00 PM', top: '85%' },
                { time: '6:00 PM', top: '110%' }, // Off-screen implied
              ].map((marker, i) => (
                <div key={i} className="absolute left-0 w-full" style={{ top: marker.top }}>
                  <span className="absolute left-0 -translate-y-1/2 text-xs font-medium text-[#6B7280] w-[60px] text-right">
                    {marker.time}
                  </span>
                  <div className="absolute left-[80px] right-0 h-[1px] bg-[#23262E]" />
                </div>
              ))}

              {/* Events */}
              {/* Grey Block */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute left-[100px] top-[5%] h-[40px] w-[60px] rounded bg-[#3A3F4B]"
              />

              {/* Project Work (Blue) */}
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '160px' }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="absolute left-[120px] top-[20%] h-[50px] rounded-md bg-[#4F7CFF] shadow-sm"
              />
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '180px' }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="absolute left-[110px] top-[28%] flex h-[60px] items-center rounded-md bg-[#3F6AF0] px-4 shadow-lg z-10"
              >
                <span className="text-sm font-medium text-white">Project Work</span>
              </motion.div>

              {/* Client Call (Meeting Sand) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 }}
                className="absolute left-[170px] top-[40%] flex h-[50px] w-[200px] items-center rounded-md bg-[#D6B98C] px-4 opacity-50 blur-[2px]"
              />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="absolute left-[140px] top-[42%] flex h-[60px] w-[160px] items-center justify-center rounded-md bg-[#D6B98C] text-sm font-medium text-[#1A1D24] shadow-lg z-10"
              >
                Client Call
              </motion.div>

              {/* Lunch Break (Neutral) */}
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ delay: 1.6 }}
                className="absolute left-[130px] top-[65%] flex h-[50px] w-[220px] items-center justify-center rounded-md bg-[#ECEDEF] text-sm font-semibold text-[#0E0F12] shadow-xl ring-1 ring-white/10"
              >
                Lunch Break
              </motion.div>

              {/* Gym (Personal Orange) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8 }}
                className="absolute left-[110px] top-[80%] flex h-[70px] w-[190px] items-center justify-center rounded-md bg-[#E07A5F] text-sm font-medium text-white shadow-lg"
              >
                <span className="w-full pl-4 text-left">Gym</span>
              </motion.div>

              {/* Bottom Grey Block */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.0 }}
                className="absolute left-[100px] top-[95%] h-[40px] w-[60px] rounded bg-white/20"
              />
            </div>

            {/* Faded bottom gradient */}
            <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#0E0F12] to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </main>

      <footer className="relative z-10 px-6 py-6 text-center text-xs text-gray-600">
        <p>© 2026 Planner.ai</p>
      </footer>
    </div>
  );
}
