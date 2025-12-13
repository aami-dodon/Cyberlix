import prisma from "@/lib/db";
import { unstable_noStore as noStore } from "next/cache";
import { FeaturedInsightsSectionClient } from "./featured-insights.client";
import { ensurePostSlug } from "@/lib/slug";

export async function FeaturedInsightsSection() {
  noStore();

  const featuredPosts = await prisma.post.findMany({
    where: { featured: true },
    orderBy: { createdAt: "desc" },
    take: 3,
    select: {
      id: true,
      slug: true,
      title: true,
      excerpt: true,
      date: true,
      author: true,
      category: true,
      readTime: true,
      imageUrl: true,
    },
  });

  const featuredPostsWithSlugs = await Promise.all(
    featuredPosts.map(async (post) => ({
      ...post,
      slug: post.slug ?? (await ensurePostSlug(prisma, { id: post.id, title: post.title, slug: post.slug })),
    }))
  );

  return <FeaturedInsightsSectionClient posts={featuredPostsWithSlugs} />;
}
