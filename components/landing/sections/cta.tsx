'use client'

import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CTA() {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background Glow */}


            <div className="mx-auto max-w-4xl px-6 sm:px-12 relative z-10 text-center">

                {/* Testimonial */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="text-2xl sm:text-3xl font-serif italic text-muted-foreground leading-relaxed mb-6">
                        "Finally, a tool that understands that I'm not a robot. It plans my day like a high-end executive assistant would."
                    </p>
                    <div className="flex items-center justify-center gap-3">
                        <div className="size-10 rounded-full bg-linear-to-br from-gray-400 to-gray-600" />
                        <div className="text-left">
                            <div className="text-sm font-medium text-foreground">Sarah Jenks</div>
                            <div className="text-xs text-muted-foreground">Product Director @ TechFlow</div>
                        </div>
                    </div>
                </motion.div>

                {/* CTA Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="p-12 rounded-3xl border border-border bg-card/50 backdrop-blur-sm shadow-2xl flex flex-col items-center gap-8"
                >
                    <h2 className="text-3xl font-medium text-balance text-foreground sm:text-4xl">
                        Stop prioritizing your schedule.<br />
                        <span className="text-muted-foreground">Start scheduling your priorities.</span>
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
