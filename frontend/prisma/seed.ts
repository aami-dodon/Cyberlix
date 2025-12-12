
import { config } from 'dotenv'
config({ path: '../.env' })
import { PrismaClient } from '@prisma/client'
import { blogPosts } from '../src/lib/blog-data'

const prisma = new PrismaClient()

async function main() {
    console.log('Start seeding ...')
    for (const post of blogPosts) {
        const createdPost = await prisma.post.upsert({
            where: { id: post.id },
            update: {},
            create: {
                id: post.id,
                title: post.title,
                excerpt: post.excerpt,
                content: post.content,
                date: post.date,
                author: post.author,
                category: post.category,
                readTime: post.readTime,
                imageUrl: post.imageUrl,
            },
        })
        console.log(`Created post with id: ${createdPost.id}`)
    }
    console.log('Seeding finished.')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
