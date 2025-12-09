import { ArrowUpRight, Sparkle } from 'lucide-react';
import Link from 'next/link';

import { products } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const ProductSection = () => {
  return (
    <section id="products" className="pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-3">
            <Badge variant="outline" className="mb-2 inline-flex items-center gap-2">
              <Sparkle className="h-4 w-4" /> Products
            </Badge>
            <h2 className="section-heading">Unified governance and AI oversight platform</h2>
            <p className="section-subtitle">
              CynaGuard GRC and Apertia AI Oversight deliver automated compliance, AI transparency,
              and resilient security operations.
            </p>
          </div>
          <Button asChild variant="outline" size="sm" className="hidden md:inline-flex">
            <Link href="#contact">Request demo</Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <Card key={product.id} className="h-full">
              <CardHeader>
                <Badge>{product.name}</Badge>
                <CardTitle>{product.tagline}</CardTitle>
                <CardDescription>{product.summary}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="subtle" className="group">
                  <Link href="#contact" className="flex items-center gap-2">
                    Learn more
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
