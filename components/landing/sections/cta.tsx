'use client'

import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CTA() {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background Glow */}


            <div className="mx-auto max-w-4xl px-6 sm:px-12 relative z-10 text-center">
                {/* CTA Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="p-12 rounded-3xl border border-border bg-card/50 backdrop-blur-sm shadow-2xl flex flex-col items-center gap-8"
                >
                    <h2 className="text-3xl font-medium text-balance text-foreground sm:text-4xl leading-tight">
                        Stop prioritizing your schedule.<br />
                        Start <span className="font-playfair italic">scheduling</span> your priorities.
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                        <Link href="/dashboard">
                            <Button
                                size="lg"
                                className="h-14 rounded-full px-10 text-lg font-medium shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] transition-all duration-300"
                            >
                                Get started for free
                            </Button>
                        </Link>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        No credit card required · Free for individuals
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
