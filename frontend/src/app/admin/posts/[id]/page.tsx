
import prisma from '@/lib/db'
import PostForm from '../_components/post-form'
import { notFound } from 'next/navigation'

interface PageProps {
    params: Promise<{ id: string }>
}

export default async function PostEditorPage({ params }: PageProps) {
    const { id } = await params

    if (id === 'new') {
        return <PostForm />
    }

    const post = await prisma.post.findUnique({
        where: { id }
    })

    if (!post) {
        notFound()
    }

    return <PostForm post={post} />
}
