'use client'

import HowItWorks from '@/components/landing/sections/how-it-works'
import Philosophy from '@/components/landing/sections/philosophy'
import Adaptation from '@/components/landing/sections/adaptation'
import Trust from '@/components/landing/sections/trust'
import Technology from '@/components/landing/sections/technology'
import CTA from '@/components/landing/sections/cta'
import Footer from '@/components/landing/sections/footer'
import Navbar from '@/components/navbar'
import Hero from '@/components/landing/sections/hero'

export default function Home() {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-x-clip font-sans text-foreground bg-background">
      {/* Navbar */}
      <Navbar />

      <main className="relative z-10 flex-1">
        <Hero />
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

