
import { leadershipData } from "@/config/leadership";
import { notFound } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { Linkedin, Twitter, Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
    return leadershipData.map((leader) => ({
        slug: leader.slug,
    }));
}

export default async function LeaderPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const leader = leadershipData.find((l) => l.slug === params.slug);

    if (!leader) {
        notFound();
    }

    return (
        <div className="min-h-screen pt-24 pb-12 px-6">
            <div className="layout-container max-w-4xl mx-auto space-y-12">
                <FadeInSection>
                    <Link
                        href="/#leadership"
                        className="inline-flex items-center text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors mb-8"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Leadership
                    </Link>

                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
                            <Avatar className="h-48 w-48 md:h-64 md:w-64 border-4 border-[var(--primary)] shadow-[0_0_30px_var(--primary)]/30">
                                <AvatarImage src={leader.image} alt={leader.name} className="object-cover" />
                                <AvatarFallback className="bg-[var(--primary)]/20 text-[var(--primary)] text-4xl font-bold">
                                    {leader.initials}
                                </AvatarFallback>
                            </Avatar>

                            <div className="space-y-2 w-full">
                                <h1 className="text-3xl font-bold text-[var(--foreground)]">{leader.name}</h1>
                                <p className="text-xl text-[var(--primary)] font-medium">{leader.title}</p>
                            </div>

                            <div className="flex justify-center md:justify-start gap-4">
                                <a
                                    href={leader.socials.linkedin}
                                    className="p-3 rounded-full bg-[var(--card)] hover:bg-[var(--primary)]/10 text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-all border border-[var(--border)] hover:border-[var(--primary)]"
                                    aria-label={`${leader.name} on LinkedIn`}
                                >
                                    <Linkedin className="h-6 w-6" />
                                </a>
                                <a
                                    href={leader.socials.twitter}
                                    className="p-3 rounded-full bg-[var(--card)] hover:bg-[var(--primary)]/10 text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-all border border-[var(--border)] hover:border-[var(--primary)]"
                                    aria-label={`${leader.name} on Twitter`}
                                >
                                    <Twitter className="h-6 w-6" />
                                </a>
                                <a
                                    href={leader.socials.email}
                                    className="p-3 rounded-full bg-[var(--card)] hover:bg-[var(--primary)]/10 text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-all border border-[var(--border)] hover:border-[var(--primary)]"
                                    aria-label={`Email ${leader.name}`}
                                >
                                    <Mail className="h-6 w-6" />
                                </a>
                            </div>
                        </div>

                        <div className="w-full md:w-2/3 space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-semibold border-b border-[var(--border)] pb-4 mb-6">About</h2>
                                <div className="space-y-6 text-lg leading-relaxed text-[var(--muted-foreground)]">
                                    {leader.fullBio.map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </div>
    );
}
