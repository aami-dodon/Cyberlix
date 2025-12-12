
'use client'

import { useActionState, Suspense } from 'react'
import { login } from '@/app/actions/auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Lock } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

function LoginForm() {
    const searchParams = useSearchParams();
    const redirectTo = searchParams.get('from') || '/admin';

    // Hook to handle form state with server action
    const [state, formAction, isPending] = useActionState(login, null);

    return (
        <Card className="w-full max-w-md">
            <CardHeader className="space-y-1">
                <div className="flex justify-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <Lock className="h-6 w-6 text-primary" />
                    </div>
                </div>
                <CardTitle className="text-2xl font-bold text-center">Admin Access</CardTitle>
                <CardDescription className="text-center">
                    Enter your password to access the dashboard
                </CardDescription>
            </CardHeader>
            <form action={formAction}>
                <input type="hidden" name="redirectTo" value={redirectTo} />
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    {state?.error && (
                        <div className="text-sm font-medium text-destructive text-center">
                            {state.error}
                        </div>
                    )}
                </CardContent>
                <CardFooter>
                    <Button type="submit" className="w-full" disabled={isPending}>
                        {isPending ? 'Authenticating...' : 'Login'}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}

export default function AdminLoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-muted/20 p-4">
            <Suspense fallback={<div>Loading...</div>}>
                <LoginForm />
            </Suspense>
        </div>
    )
}
