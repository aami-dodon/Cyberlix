'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createPost, updatePost } from '@/app/actions/posts'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ArrowLeft, Save, Loader2, Calendar as CalendarIcon } from 'lucide-react'
import Link from 'next/link'
import { format } from 'date-fns'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'

import RichTextEditor from './rich-text-editor'

import leadershipData from '@/content/leadership.json'

interface PostFormProps {
    post?: {
        id: string
        title: string
        content: string | null
        excerpt: string
        category: string
        author: string
        readTime: string
        date: string
        imageUrl: string | null
    }
}

const CATEGORIES = [
    'Threat Intelligence',
    'Industry Trends',
    'Compliance',
    'Cloud Security',
    'Data Privacy',
    'Security Operations',
    'Company News'
]

export default function PostForm({ post }: PostFormProps) {
    const router = useRouter()
    const isEditing = !!post
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [date, setDate] = useState<Date | undefined>(
        post?.date ? new Date(post.date) : undefined
    )
    const [content, setContent] = useState(post?.content || '')

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsSubmitting(true)
        const formData = new FormData(event.currentTarget)

        // Append date if selected
        if (date) {
            const dateString = format(date, 'MMMM d, yyyy')
            formData.set('date', dateString)
        }

        try {
            if (isEditing) {
                await updatePost(post!.id, formData)
            } else {
                await createPost(formData)
            }
        } catch (error) {
            console.error('Error saving post:', error)
            setIsSubmitting(false)
            alert('Failed to save post. Please try again.')
        }
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-6">
                <Button variant="ghost" asChild className="pl-0 hover:pl-2 transition-all">
                    <Link href="/admin">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Dashboard
                    </Link>
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>{isEditing ? 'Edit Post' : 'Create New Post'}</CardTitle>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-6">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="title">Title</Label>
                                <Input id="title" name="title" defaultValue={post?.title} required />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="category">Category</Label>
                                <Select name="category" defaultValue={post?.category}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {CATEGORIES.map(cat => (
                                            <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="author">Author</Label>
                                <Select name="author" defaultValue={post?.author || leadershipData.leaders[0].name}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select author" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {leadershipData.leaders.map(leader => (
                                            <SelectItem key={leader.slug} value={leader.name}>{leader.name}</SelectItem>
                                        ))}
                                        <SelectItem value="Admin Team">Admin Team</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2 flex flex-col">
                                <Label htmlFor="date" className="mb-2">Date (Published)</Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full justify-start text-left font-normal",
                                                !date && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                                <input type="hidden" name="date" value={date ? format(date, 'MMMM d, yyyy') : ''} />
                                <p className="text-[0.8rem] text-muted-foreground">Leave empty to use current date on create.</p>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="excerpt">Excerpt</Label>
                            <Textarea
                                id="excerpt"
                                name="excerpt"
                                defaultValue={post?.excerpt}
                                required
                                className="h-24"
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <Label htmlFor="content">Content</Label>
                                <Label className="text-muted-foreground text-xs font-normal">
                                    Supports Rich Text (auto-calculates read time)
                                </Label>
                            </div>
                            <RichTextEditor
                                content={content}
                                onChange={setContent}
                            />
                            <input type="hidden" name="content" value={content} />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="image">Featured Image</Label>
                            <div className="flex flex-col gap-4">
                                {post?.imageUrl && (
                                    <div className="relative w-40 h-24 rounded-md overflow-hidden border">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={post.imageUrl}
                                            alt="Current featured image"
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                )}
                                <Input id="image" name="image" type="file" accept="image/*" />
                                <p className="text-[0.8rem] text-muted-foreground">
                                    {isEditing ? 'Upload a new image to replace the current one.' : 'Upload a featured image.'}
                                </p>
                            </div>
                        </div>

                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline" asChild>
                            <Link href="/admin">Cancel</Link>
                        </Button>
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Saving...
                                </>
                            ) : (
                                <>
                                    <Save className="mr-2 h-4 w-4" />
                                    Save Post
                                </>
                            )}
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}
