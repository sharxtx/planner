import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="py-20 px-5 sm:px-12 border-t border-border/10 mt-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">

                {/* Links */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                    <Link href="#" className="text-[15px] text-muted-foreground hover:text-foreground transition-colors">How it works</Link>
                    <Link href="#" className="text-[15px] text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
                    <Link href="#" className="text-[15px] text-muted-foreground hover:text-foreground transition-colors">Google Calendar integration</Link>
                    <Link href="#" className="text-[15px] text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
                </div>

                <div className="text-[13px] text-muted-foreground/40">
                    © 2026 Planner.ai
                </div>
            </div>
        </footer>
    )
}
