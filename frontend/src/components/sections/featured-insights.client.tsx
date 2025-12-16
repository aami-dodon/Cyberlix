"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { BackgroundGrid } from "@/components/ui/background-grid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { home as homeContent } from "@/content";

type FeaturedPost = {
  id: string;
  slug?: string | null;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  imageUrl: string | null;
};

const featuredInsightsContent = homeContent.featuredInsights;

export function FeaturedInsightsSectionClient({ posts }: { posts: FeaturedPost[] }) {
  return (
    <section id="featured-insights" className="relative scroll-mt-24 overflow-hidden bg-background py-24">
      <div className="absolute left-0 top-1/3 h-1/2 w-1/3 bg-primary/5 blur-[120px]" />
      <BackgroundGrid />

      <div className="layout-container relative z-10">
        <FadeInSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="space-y-3 max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                {featuredInsightsContent.eyebrow}
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                {featuredInsightsContent.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {featuredInsightsContent.description}
              </p>
            </div>

            <Button variant="link" asChild className="p-0 h-auto font-semibold text-primary">
              <Link href={featuredInsightsContent.cta.href} className="flex items-center gap-2 group">
                {featuredInsightsContent.cta.label} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </FadeInSection>

        <FadeInSection delay={150}>
          {posts.length === 0 ? (
            <Card variant="glass" className="p-8 text-center">
              <p className="text-lg text-muted-foreground">No featured insights yet.</p>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Card
                  key={post.id}
                  variant="interactive"
                  className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 group bg-card/50"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    {post.imageUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-full w-full bg-secondary flex items-center justify-center">
                        <span className="text-muted-foreground">No Image</span>
                      </div>
                    )}

                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                      <Link href={`/insights/${post.slug ?? post.id}`}>{post.title}</Link>
                    </CardTitle>

                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>

                  <CardFooter className="mt-auto">
                    <Button variant="link" asChild className="p-0 h-auto font-semibold">
                      <Link
                        href={`/insights/${post.slug ?? post.id}`}
                        className="flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                      >
                        Read Article <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </FadeInSection>
      </div>
    </section>
  );
}
