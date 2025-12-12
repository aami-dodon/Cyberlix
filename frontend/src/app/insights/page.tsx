
import React from "react";
import prisma from "@/lib/db";
import { InsightsList } from "./insights-list";
import { BlogPost, categories } from "@/lib/blog-data";

export const dynamic = "force-dynamic";

export default async function InsightsPage() {
    const posts = await prisma.post.findMany({
        orderBy: { date: 'desc' }
    });

    const formattedPosts = posts.map((post: any) => ({
        ...post,
        category: post.category as BlogPost['category'] // Type assertion since DB stores string
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
