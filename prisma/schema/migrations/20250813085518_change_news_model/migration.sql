/*
  Warnings:

  - You are about to drop the column `news` on the `News` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."News" DROP COLUMN "news";

-- AlterTable
ALTER TABLE "public"."NewsItem" ADD COLUMN     "newsId" TEXT;

-- AddForeignKey
ALTER TABLE "public"."NewsItem" ADD CONSTRAINT "NewsItem_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "public"."News"("id") ON DELETE SET NULL ON UPDATE CASCADE;
