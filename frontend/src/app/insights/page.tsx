
import React from "react";
import prisma from "@/lib/db";
import { InsightsList } from "./insights-list";
import { BlogPost } from "@/lib/blog-data";
import { ensurePostSlug } from "@/lib/slug";

export const dynamic = "force-dynamic";

export default async function InsightsPage() {
    const posts = await prisma.post.findMany({
        orderBy: { date: 'desc' }
    });

    type DbPost = typeof posts[number];
    const postsWithSlugs: Array<DbPost & { slug: string }> = [];
    for (const post of posts) {
        const slug = post.slug ?? (await ensurePostSlug(prisma, { id: post.id, title: post.title, slug: post.slug }));
        postsWithSlugs.push({ ...post, slug });
    }

    const formattedPosts: BlogPost[] = postsWithSlugs.map((post) => ({
        id: post.id,
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        content: post.content ?? undefined,
        date: post.date,
        author: post.author,
        category: post.category as BlogPost['category'],
        readTime: post.readTime,
        imageUrl: post.imageUrl ?? undefined,
    }));

    return (
        <main className="min-h-screen pt-24 pb-16">
            {/* Hero Section */}
            <section className="layout-container mb-12 text-center">
                <h1 className="text-4xl font-bold tracking-tight mb-4 sm:text-5xl">
                    Cynalitx Insights
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Expert analysis, industry trends, and cybersecurity best practices to
                    keep your organization secure.
                </p>
            </section>

            <InsightsList initialPosts={formattedPosts} />
        </main>
    );
}
