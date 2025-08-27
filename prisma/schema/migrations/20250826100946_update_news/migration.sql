/*
  Warnings:

  - You are about to drop the `news` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."news";

-- CreateTable
CREATE TABLE "public"."News" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."NewsItem" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "newsId" TEXT,

    CONSTRAINT "NewsItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."NewsItem" ADD CONSTRAINT "NewsItem_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "public"."News"("id") ON DELETE SET NULL ON UPDATE CASCADE;
