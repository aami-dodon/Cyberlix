"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BlogPost, categories } from "@/lib/blog-data";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import { motion, AnimatePresence } from "framer-motion";

interface InsightsListProps {
    initialPosts: BlogPost[];
}

export function InsightsList({ initialPosts }: InsightsListProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    const filteredPosts =
        selectedCategory === "All"
            ? initialPosts
            : initialPosts.filter((post) => post.category === selectedCategory);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                stiffness: 50,
                damping: 20
            }
        }
    };

    return (
        <>
            <section className="layout-container mb-12">
                <div className="flex flex-wrap justify-center gap-2">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={selectedCategory === category ? "default" : "outline"}
                            onClick={() => setSelectedCategory(category)}
                            className="rounded-full transition-all duration-300"
                        >
                            {category}
                        </Button>
                    ))}
                </div>
            </section>

            <section className="layout-container">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredPosts.map((post) => (
                            <motion.div
                                key={post.id}
                                variants={itemVariants}
                                layout
                                initial="hidden"
                                animate="show"
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="h-full"
                            >
                                <Card className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
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
                                            <Link href={`/insights/${post.id}`}>{post.title}</Link>
                                        </CardTitle>
                                        <CardDescription className="line-clamp-3">
                                            {post.excerpt}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardFooter className="mt-auto">
                                        <Button variant="link" asChild className="p-0 h-auto font-semibold">
                                            <Link href={`/insights/${post.id}`} className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                                Read Article <ArrowRight className="h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredPosts.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <p className="text-lg text-muted-foreground">
                            No articles found in this category.
                        </p>
                    </motion.div>
                )}
            </section>
        </>
    );
}
