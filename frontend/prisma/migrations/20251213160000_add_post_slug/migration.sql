-- Add slug column for SEO-friendly insight URLs
ALTER TABLE "Post" ADD COLUMN "slug" TEXT;

-- Unique slug (Postgres allows multiple NULLs in UNIQUE indexes)
CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");
