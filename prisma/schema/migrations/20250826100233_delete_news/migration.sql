/*
  Warnings:

  - You are about to drop the column `newsId` on the `NewsItem` table. All the data in the column will be lost.
  - You are about to drop the `News` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."NewsItem" DROP CONSTRAINT "NewsItem_newsId_fkey";

-- AlterTable
ALTER TABLE "public"."NewsItem" DROP COLUMN "newsId";

-- DropTable
DROP TABLE "public"."News";
