import type { PrismaClient } from "@prisma/client";

function isUniqueConstraintError(error: unknown): boolean {
  if (!error || typeof error !== "object") return false;
  if (!("code" in error)) return false;
  return (error as { code?: unknown }).code === "P2002";
}

export function slugifyTitle(input: string): string {
  const normalized = input
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  const slug = normalized
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");

  return slug.length > 0 ? slug : "post";
}

export async function createUniquePostSlug(
  prisma: PrismaClient,
  title: string,
  excludePostId?: string
): Promise<string> {
  const base = slugifyTitle(title);

  for (let suffix = 0; suffix < 10_000; suffix += 1) {
    const candidate = suffix === 0 ? base : `${base}-${suffix + 1}`;

    const existing = await prisma.post.findUnique({
      where: { slug: candidate },
      select: { id: true },
    });

    if (!existing || (excludePostId && existing.id === excludePostId)) {
      return candidate;
    }
  }

  return `${base}-${Date.now()}`;
}

export async function ensurePostSlug(
  prisma: PrismaClient,
  post: { id: string; title: string; slug: string | null }
): Promise<string> {
  if (post.slug) return post.slug;

  for (let attempt = 0; attempt < 5; attempt += 1) {
    const slug = await createUniquePostSlug(prisma, post.title, post.id);
    try {
      await prisma.post.update({ where: { id: post.id }, data: { slug } });
      return slug;
    } catch (error: unknown) {
      if (isUniqueConstraintError(error)) continue;
      throw error;
    }
  }

  const fallback = `${slugifyTitle(post.title)}-${Date.now()}`;
  await prisma.post.update({ where: { id: post.id }, data: { slug: fallback } });
  return fallback;
}
