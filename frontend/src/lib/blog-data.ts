export interface BlogPost {
    id: string;
    slug?: string;
    title: string;
    excerpt: string;
    content?: string; // For future detailed view
    date: string;
    author: string;
    category: "Threat Intelligence" | "Cloud Security" | "AI Security" | "Compliance" | "Network Security" | "Industry Trends";
    readTime: string;
    imageUrl?: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "The Rise of AI-Driven Cyber Attacks",
        excerpt: "Artificial Intelligence is revolutionizing industries, but it's also arming cybercriminals with new tools. Learn how AI is being used to launch sophisticated phishing and malware campaigns.",
        date: "December 10, 2025",
        author: "Sarah Jenkins",
        category: "AI Security",
        readTime: "5 min read",
        imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop"
    },
    {
        id: "2",
        title: "Zero Trust Architecture: A Necessity, Not an Option",
        excerpt: "In an era of remote work and cloud migration, the traditional perimeter is dead. Discover why Zero Trust Architecture is the new standard for enterprise security.",
        date: "December 8, 2025",
        author: "Michael Chang",
        category: "Network Security",
        readTime: "7 min read",
        imageUrl: "https://images.unsplash.com/photo-1558494949-efdeb6bf80d1?q=80&w=2564&auto=format&fit=crop"
    },
    {
        id: "3",
        title: "Navigating the New Cyber Compliance Landscape",
        excerpt: "With new regulations emerging globally, staying compliant is more challenging than ever. We break down the key changes in GDPR, CCPA, and upcoming cybersecurity laws.",
        date: "December 5, 2025",
        author: "Elena Rodriguez",
        category: "Compliance",
        readTime: "6 min read",
        imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: "4",
        title: "Cloud Security Misconfigurations: The #1 Vulnerability",
        excerpt: "Most cloud breaches aren't caused by hackers breaking in, but by doors left open. Explore the most common cloud misconfigurations and how to fix them.",
        date: "December 1, 2025",
        author: "David Kim",
        category: "Cloud Security",
        readTime: "8 min read",
        imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: "5",
        title: "Ransomware 2.0: Double Extortion Tactics",
        excerpt: "Ransomware isn't just about encryption anymore. Attackers are now stealing data and threatening to leak it. Understand the mechanics of double extortion.",
        date: "November 28, 2025",
        author: "Jessica Lee",
        category: "Threat Intelligence",
        readTime: "6 min read",
        imageUrl: "https://images.unsplash.com/photo-1614064641938-3e858a915f32?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: "6",
        title: "Securing the Internet of Things (IoT)",
        excerpt: "As billions of devices come online, the attack surface expands exponentially. Best practices for securing IoT devices in a corporate environment.",
        date: "November 25, 2025",
        author: "Robert Chen",
        category: "Industry Trends",
        readTime: "5 min read",
        imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: "7",
        title: "The Human Element: Building a Security-First Culture",
        excerpt: "Technology alone cannot stop cyber threats. Creating a culture of security awareness is the most effective defense against social engineering.",
        date: "November 20, 2025",
        author: "Amanda White",
        category: "Industry Trends",
        readTime: "4 min read",
        imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2669&auto=format&fit=crop"
    },
    {
        id: "8",
        title: "Quantum Computing: The End of Encryption?",
        excerpt: "Quantum computers pose a significant threat to current encryption standards. What steps should organizations take now to prepare for the post-quantum era?",
        date: "November 15, 2025",
        author: "Dr. Samuel Gupta",
        category: "Threat Intelligence",
        readTime: "9 min read",
        imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2670&auto=format&fit=crop"
    },
];

export const categories = [
    "All",
    "Threat Intelligence",
    "Cloud Security",
    "AI Security",
    "Compliance",
    "Network Security",
    "Industry Trends",
] as const;
