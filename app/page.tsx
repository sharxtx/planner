'use client'

import { motion } from 'motion/react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import PlannerLogo from '@/components/ui/planner-logo'
import Timeline from '@/components/landing/timeline'
import HowItWorks from '@/components/landing/sections/how-it-works'
import Philosophy from '@/components/landing/sections/philosophy'
import Adaptation from '@/components/landing/sections/adaptation'
import Trust from '@/components/landing/sections/trust'
import Technology from '@/components/landing/sections/technology'
import CTA from '@/components/landing/sections/cta'
import Footer from '@/components/landing/sections/footer'
import { ModeToggle } from '@/components/mode-toggle'

export default function Home() {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden font-sans text-foreground bg-background">
      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-12 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <PlannerLogo />
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Link href="/dashboard">
            <Button variant="ghost" className="rounded-full font-medium text-muted-foreground hover:text-foreground hover:bg-accent">
              Log in
            </Button>
          </Link>
        </div>
      </nav>

      <main className="relative z-10 flex-1">
        {/* Hero Section */}
        <section className="mx-auto flex w-full max-w-7xl items-center px-6 py-12 sm:px-12 lg:py-24">
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
            {/* Hero content */}
            <div className="flex flex-col items-center text-center gap-8 lg:items-start lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl lg:text-6xl font-serif text-foreground text-balance"
              >
                Stop <span className="font-playfair italic">deciding</span> what to do next.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-xl text-lg text-muted-foreground sm:text-xl"
              >
                Planner.ai turns your tasks into a realistic schedule — and keeps it in sync when plans change.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
              >
                <Link href="/dashboard" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto h-12 rounded-xl px-8 text-[15px] font-medium bg-foreground text-background hover:bg-foreground/90 transition-colors">
                    Plan my day
                  </Button>
                </Link>
                <Button size="lg" variant="ghost" className="w-full sm:w-auto h-12 rounded-xl px-8 text-[15px] font-medium text-muted-foreground hover:text-foreground hover:bg-transparent">
                  See a sample schedule
                </Button>
              </motion.div>
            </div>

            {/* Timeline Visualization */}
            <Timeline />
          </div>
        </section>

        {/* Additional Sections */}
        <HowItWorks />
        <Philosophy />
        <Adaptation />
        <Technology />
        <Trust />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

