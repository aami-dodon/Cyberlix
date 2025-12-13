import prisma from "@/lib/db";
import { unstable_noStore as noStore } from "next/cache";
import { FeaturedInsightsSectionClient } from "./featured-insights.client";

export async function FeaturedInsightsSection() {
  noStore();

  const featuredPosts = await prisma.post.findMany({
    where: { featured: true },
    orderBy: { createdAt: "desc" },
    take: 3,
    select: {
      id: true,
      title: true,
      excerpt: true,
      date: true,
      author: true,
      category: true,
      readTime: true,
      imageUrl: true,
    },
  });

  return <FeaturedInsightsSectionClient posts={featuredPosts} />;
}

