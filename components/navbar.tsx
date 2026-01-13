import React from 'react'
import PlannerLogo from '@/components/ui/planner-logo'
import { ModeToggle } from '@/components/mode-toggle'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/10 bg-background/70 backdrop-blur-md transition-all duration-300">
            <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6 sm:px-12 w-full">
                <div className="flex items-center gap-2">
                    <PlannerLogo />
                </div>
                <div className="flex items-center gap-2">
                    <ModeToggle />
                    <Link href="/dashboard">
                        <Button variant="ghost" className="rounded-full font-medium text-muted-foreground hover:text-foreground hover:bg-accent ring-inset">
                            Log in
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar