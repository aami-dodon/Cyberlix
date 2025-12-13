
'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(prevState: any, formData: FormData) {
    const password = formData.get('password') as string
    const redirectTo = formData.get('redirectTo') as string || '/admin'
    const adminPassword = process.env.ADMIN_PASSWORD

    if (!adminPassword) {
        console.error('ADMIN_PASSWORD is not set')
        return { error: 'Server configuration error' }
    }

    if (password === adminPassword) {
        // Set cookie
        const cookieStore = await cookies()
        cookieStore.set('admin_session', 'true', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: '/',
        })

        redirect(redirectTo)
    }

    return { error: 'Invalid password' }
}

export async function logout() {
    const cookieStore = await cookies()
    cookieStore.delete('admin_session')
    redirect('/')
}
