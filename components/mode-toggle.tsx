'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export function ModeToggle() {
    const { theme, setTheme } = useTheme()

    const toggleTheme = (event: React.MouseEvent) => {
        const isAppearanceTransition =
            typeof (document as unknown as { startViewTransition: (callback: () => Promise<void>) => { ready: Promise<void> } }).startViewTransition !== 'undefined' &&
            !window.matchMedia('(prefers-reduced-motion: reduce)').matches

        if (!isAppearanceTransition) {
            setTheme(theme === 'dark' ? 'light' : 'dark')
            return
        }

        const x = event.clientX
        const y = event.clientY
        const endRadius = Math.hypot(
            Math.max(x, window.innerWidth - x),
            Math.max(y, window.innerHeight - y)
        )

        const transition = (document as unknown as { startViewTransition: (callback: () => Promise<void>) => { ready: Promise<void> } }).startViewTransition(async () => {
            setTheme(theme === 'dark' ? 'light' : 'dark')
            await new Promise(resolve => setTimeout(resolve, 1))
        })

        transition.ready.then(() => {
            const clipPath = [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`,
            ]
            document.documentElement.animate(
                {
                    clipPath: clipPath,
                },
                {
                    duration: 1000,
                    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    pseudoElement: '::view-transition-new(root)',
                }
            )
        })
    }

    return (
        <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
