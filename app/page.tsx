'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[var(--background)] font-sans text-[var(--foreground)]">
      {/* Background Orbs for Premium Look */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="pointer-events-none absolute right-[-5%] bottom-[-5%] h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[100px]"
      />

      <nav className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-12">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
            <Calendar size={24} />
          </div>
          <span className="text-2xl font-black tracking-tighter">Planner.ai</span>
        </div>
        <Link href="/dashboard">
          <Button variant="ghost" className="rounded-full font-bold">
            Sign In
          </Button>
        </Link>
      </nav>

      <main className="relative z-10 mx-auto flex max-w-7xl flex-1 flex-col items-center justify-center px-6 py-20 text-center sm:px-12 lg:py-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary backdrop-blur-md"
        >
          <Sparkles size={16} />
          <span>New: AI-Powered Scheduling is here</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-4xl text-5xl font-black leading-[1.1] tracking-tight sm:text-7xl lg:text-8xl"
        >
          Organize your life with <br />
          <span className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
            Intelligence.
          </span>
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-muted-foreground sm:text-xl"
        >
          The all-in-one planner that helps you manage your time, tasks, and teams with
          stunning visuals and seamless AI integration.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link href="/dashboard">
            <Button size="lg" className="h-16 rounded-full px-10 text-lg font-bold shadow-2xl shadow-primary/40 transition-all hover:scale-105 active:scale-95">
              Get Started Free <ArrowRight className="ml-2" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="h-16 rounded-full border-[var(--border)] bg-background/50 px-10 text-lg font-bold backdrop-blur-md hover:bg-accent transition-all">
            See How It Works
          </Button>
        </motion.div>

        {/* Feature List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mt-20 flex flex-wrap justify-center gap-8 border-t border-[var(--border)] pt-12 text-muted-foreground"
        >
          {[
            "Seamless Calendar Sync",
            "Smart Task Management",
            "Intuitive Dark Mode"
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + (i * 0.1) }}
              className="flex items-center gap-2 font-medium"
            >
              <CheckCircle2 className="text-primary" size={20} />
              {feature}
            </motion.div>
          ))}
        </motion.div>

        {/* Image Mockup Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-24 w-full max-w-5xl overflow-hidden rounded-[2.5rem] border border-[var(--border)] bg-white/5 p-4 shadow-3xl backdrop-blur-2xl transition-all hover:scale-[1.01] dark:bg-zinc-900/40"
        >
          <div className="h-[400px] w-full rounded-[1.8rem] bg-gradient-to-br from-zinc-100 to-zinc-300 dark:from-zinc-800 dark:to-zinc-950 flex items-center justify-center p-8">
            {/* This represents where the app screenshot would go */}
            <div className="grid grid-cols-3 gap-6 w-full h-full opacity-30">
              <div className="bg-zinc-500/20 rounded-2xl animate-pulse"></div>
              <div className="col-span-2 bg-zinc-500/20 rounded-2xl animate-pulse"></div>
              <div className="col-span-2 bg-zinc-500/20 rounded-2xl animate-pulse"></div>
              <div className="bg-zinc-500/20 rounded-2xl animate-pulse"></div>
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="relative z-10 border-t border-[var(--border)] bg-[var(--background)]/50 px-6 py-12 text-center text-muted-foreground backdrop-blur-md">
        <p className="text-sm font-medium">© 2026 Planner.ai. Built for teams that move fast.</p>
      </footer>
    </div>
  );
}
