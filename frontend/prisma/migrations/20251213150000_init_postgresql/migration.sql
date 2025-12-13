-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "excerpt" TEXT NOT NULL,
    "content" TEXT,
    "date" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "readTime" TEXT NOT NULL,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
