
'use server'

import prisma from '@/lib/db'
import type { Prisma } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createUniquePostSlug } from '@/lib/slug'

function isUniqueConstraintError(error: unknown): boolean {
    if (!error || typeof error !== 'object') return false
    if (!('code' in error)) return false
    return (error as { code?: unknown }).code === 'P2002'
}

export async function createPost(formData: FormData) {
    const title = formData.get('title') as string
    const content = formData.get('content') as string
    const excerpt = formData.get('excerpt') as string
    const category = formData.get('category') as string
    const author = formData.get('author') as string

    // Calculate read time
    const fullText = `${title} ${excerpt} ${content}`
    const wordCount = fullText.replace(/<[^>]*>/g, '').split(/\s+/).length
    const readTime = `${Math.ceil(wordCount / 200)} min read`

    const imageFile = formData.get('image') as File | null

    let imageUrl = ''

    if (imageFile && imageFile.size > 0) {
        imageUrl = await uploadImage(imageFile)
    }

    let date = formData.get('date') as string

    if (!date) {
        date = new Date().toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })
    }

    const featured = formData.get('featured') === 'true'

    let createdSlug: string | null = null
    for (let attempt = 0; attempt < 5; attempt += 1) {
        const slug = await createUniquePostSlug(prisma, title)
        try {
            await prisma.post.create({
                data: {
                    slug,
                    title,
                    content,
                    excerpt,
                    category,
                    author,
                    readTime,
                    date,
                    imageUrl: imageUrl || null,
                    featured,
                },
            })
            createdSlug = slug
            break
        } catch (error: unknown) {
            if (isUniqueConstraintError(error)) continue
            throw error
        }
    }

    if (!createdSlug) {
        throw new Error('Failed to create post slug')
    }

    revalidatePath('/admin')
    revalidatePath('/insights')
    redirect('/admin')
}

export async function updatePost(id: string, formData: FormData) {
    const existing = await prisma.post.findUnique({
        where: { id },
        select: { title: true, slug: true }
    })

    if (!existing) {
        throw new Error('Post not found')
    }

    const title = formData.get('title') as string
    const content = formData.get('content') as string
    const excerpt = formData.get('excerpt') as string
    const category = formData.get('category') as string
    const author = formData.get('author') as string

    // Calculate read time
    const fullText = `${title} ${excerpt} ${content}`
    const wordCount = fullText.replace(/<[^>]*>/g, '').split(/\s+/).length
    const readTime = `${Math.ceil(wordCount / 200)} min read`

    const date = formData.get('date') as string
    const imageFile = formData.get('image') as File | null

    const updateData: Prisma.PostUpdateInput = {
        title,
        content,
        excerpt,
        category,
        author,
        readTime,
        date,
    }

    if (imageFile && imageFile.name !== 'undefined') {
        updateData.imageUrl = await uploadImage(imageFile)
    }

    if (formData.has('featured')) {
        updateData.featured = formData.get('featured') === 'true'
    }

    let finalSlug = existing.slug

    if (!existing.slug || existing.title !== title) {
        for (let attempt = 0; attempt < 5; attempt += 1) {
            const nextSlug = await createUniquePostSlug(prisma, title, id)
            try {
                await prisma.post.update({
                    where: { id },
                    data: { ...updateData, slug: nextSlug },
                })
                finalSlug = nextSlug
                break
            } catch (error: unknown) {
                if (isUniqueConstraintError(error)) continue
                throw error
            }
        }
    } else {
        await prisma.post.update({
            where: { id },
            data: updateData,
        })
    }

    revalidatePath('/admin')
    revalidatePath('/insights')
    revalidatePath(`/insights/${id}`)
    if (finalSlug) {
        revalidatePath(`/insights/${finalSlug}`)
    }
    redirect('/admin')
}

export async function deletePost(id: string) {
    await prisma.post.delete({
        where: { id },
    })

    revalidatePath('/admin')
    revalidatePath('/insights')
}

import { getStorageService } from '@/lib/storage-service'

async function uploadImage(file: File): Promise<string> {
    const storageService = getStorageService()
    try {
        return await storageService.upload(file)
    } catch (error) {
        console.error('Error uploading file:', error)
        return ''
    }
}
