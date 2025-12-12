import { BackgroundGrid } from '@/components/ui/background-grid'

export default function LoginLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
            <BackgroundGrid className="opacity-20" />
            <div className="relative z-10 w-full max-w-md p-4">
                {children}
            </div>
        </div>
    )
}
