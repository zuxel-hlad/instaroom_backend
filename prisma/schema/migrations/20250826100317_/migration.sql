/*
  Warnings:

  - You are about to drop the `NewsItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."NewsItem";

-- CreateTable
CREATE TABLE "public"."news" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "news_pkey" PRIMARY KEY ("id")
);
