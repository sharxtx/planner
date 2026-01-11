'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import PlannerLogo from '@/components/ui/planner-logo';
import Timeline from '@/components/landing/timeline';

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

          {/* Hero content */}
          <div className="flex flex-col items-center text-center gap-8 lg:items-start lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-serif font-medium leading-[1.1] tracking-[-0.02em] sm:text-6xl lg:text-7xl text-white"
            >
              Stop <span className="font-playfair italic">deciding</span> what to do next.
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
                <Button size="lg" className="h-12 rounded-xs bg-card px-8 text-base font-medium text-white shadow-[0_1px_2px_rgba(0,0,0,0.4),0_8px_24px_rgba(0,0,0,0.35)] hover:bg-[#3F6AF0] border-none">
                  Plan my day
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="h-12 rounded-xs border-[#2A2E38] bg-transparent px-8 text-base font-medium text-[#E6E7EB] hover:bg-white/5 shadow-none">
                See how it works
              </Button>
            </motion.div>
          </div>

          {/* Timeline Section */}
          <Timeline />
        </div>
      </main>

      <footer className="relative z-10 px-6 py-6 text-center text-xs text-gray-600">
        <p>© 2026 Planner.ai</p>
      </footer>
    </div>
  );
}
