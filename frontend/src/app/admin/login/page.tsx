'use client'

import { useActionState } from 'react'
import { login } from '@/app/actions/auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CynalitxLogo } from '@/components/ui/logo'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Suspense } from 'react'

function LoginForm() {
    const searchParams = useSearchParams();
    const redirectTo = searchParams.get('from') || '/admin';

    // Hook to handle form state with server action
    const [state, formAction, isPending] = useActionState(login, null);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
        >
            <div className="relative overflow-hidden rounded-2xl border bg-background/50 backdrop-blur-xl shadow-2xl">
                {/* Decorative gradients */}
                <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
                <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />

                <div className="relative p-8 space-y-8">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                            className="bg-primary/10 p-4 rounded-full ring-1 ring-primary/20 shadow-lg mb-2"
                        >
                            <CynalitxLogo className="h-10 w-10 text-primary" />
                        </motion.div>
                        <div className="space-y-2">
                            <h1 className="text-2xl font-bold tracking-tight">Welcome Back</h1>
                            <p className="text-sm text-muted-foreground">
                                Sign in to access the admin dashboard
                            </p>
                        </div>
                    </div>

                    <form action={formAction} className="space-y-6">
                        <input type="hidden" name="redirectTo" value={redirectTo} />

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="••••••••"
                                required
                                className="bg-background/50 border-muted-foreground/20 focus:border-primary/50 transition-all duration-300"
                            />
                        </div>

                        {state?.error && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="text-sm font-medium text-destructive text-center bg-destructive/10 p-3 rounded-lg border border-destructive/20"
                            >
                                {state.error}
                            </motion.div>
                        )}

                        <Button
                            type="submit"
                            size="xl"
                            className="w-full font-medium shadow-lg hover:shadow-primary/25 transition-all duration-300"
                            disabled={isPending}
                        >
                            {isPending ? (
                                <div className="flex items-center gap-2">
                                    <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                    <span>Authenticating...</span>
                                </div>
                            ) : (
                                'Sign In'
                            )}
                        </Button>
                    </form>

                    <div className="text-center text-xs text-muted-foreground">
                        <p>Restricted access for authorized personnel only.</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default function AdminLoginPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LoginForm />
        </Suspense>
    )
}
