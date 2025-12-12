
'use server'

import prisma from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'

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

    await prisma.post.create({
        data: {
            title,
            content,
            excerpt,
            category,
            author,
            readTime,
            date,
            imageUrl: imageUrl || 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop', // Default placeholder
            featured,
        },
    })

    revalidatePath('/admin')
    revalidatePath('/insights')
    redirect('/admin')
}

export async function updatePost(id: string, formData: FormData) {
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

    const updateData: any = {
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

    await prisma.post.update({
        where: { id },
        data: updateData,
    })

    revalidatePath('/admin')
    revalidatePath('/insights')
    revalidatePath(`/insights/${id}`)
    redirect('/admin')
}

export async function deletePost(id: string) {
    await prisma.post.delete({
        where: { id },
    })

    revalidatePath('/admin')
    revalidatePath('/insights')
}

async function uploadImage(file: File): Promise<string> {
    const buffer = Buffer.from(await file.arrayBuffer())
    const filename = `${Date.now()}-${file.name.replaceAll(' ', '_')}`
    const uploadDir = path.join(process.cwd(), 'public/uploads')

    try {
        await mkdir(uploadDir, { recursive: true })
        await writeFile(path.join(uploadDir, filename), buffer)
        return `/uploads/${filename}`
    } catch (error) {
        console.error('Error uploading file:', error)
        return ''
    }
}
