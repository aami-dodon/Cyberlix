import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { blogHighlights } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const InsightsSection = () => (
  <section id="insights" className="pb-20">
    <div className="mx-auto max-w-6xl px-6 space-y-6">
      <div className="space-y-2">
        <Badge variant="outline">Blog & Insights</Badge>
        <h2 className="section-heading">Thought leadership on cyber and AI governance</h2>
        <p className="section-subtitle">
          Explore deep dives on cybersecurity best practices, AI governance, regulatory updates, and
          technical guides.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {blogHighlights.map((post) => (
          <Card key={post.slug} className="h-full">
            <CardHeader>
              <Badge variant="ghost" className="capitalize">
                {post.category.replace('-', ' ')}
              </Badge>
              <CardTitle className="text-lg text-foreground">{post.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex h-full flex-col justify-between space-y-4">
              <p className="text-sm text-muted-foreground">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{post.author}</span>
                <span>{post.readingMinutes} min read</span>
              </div>
              <Link href="#contact" className="inline-flex items-center gap-2 text-sm text-primary">
                Request the playbook <ArrowUpRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
