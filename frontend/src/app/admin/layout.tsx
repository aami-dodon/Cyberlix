
import { Button } from '@/components/ui/button'
import { logout } from '@/app/actions/auth'
import Link from 'next/link'
import { LayoutDashboard, FileText, LogOut } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-background">
            {/* Admin Header */}
            <header className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="layout-container h-16 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <Link href="/admin" className="font-bold text-lg flex items-center gap-2">
                            <LayoutDashboard className="h-5 w-5" />
                            Cynalitx Admin
                        </Link>
                        <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
                            <Link href="/admin" className="text-foreground hover:text-primary transition-colors">
                                Dashboard
                            </Link>
                            <Link href="/insights" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank">
                                View Live Site
                            </Link>
                        </nav>
                    </div>

                    <form action={logout}>
                        <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-destructive">
                            <LogOut className="h-4 w-4" />
                            Logout
                        </Button>
                    </form>
                </div>
            </header>

            <main className="layout-container py-8">
                {children}
            </main>
        </div>
    )
}
