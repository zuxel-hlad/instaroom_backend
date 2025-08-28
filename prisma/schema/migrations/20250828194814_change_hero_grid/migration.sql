/*
  Warnings:

  - You are about to drop the column `heroGridId` on the `HeroGridItem` table. All the data in the column will be lost.
  - You are about to drop the `HeroGrid` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."HeroGridItem" DROP CONSTRAINT "HeroGridItem_heroGridId_fkey";

-- AlterTable
ALTER TABLE "public"."HeroGridItem" DROP COLUMN "heroGridId";

-- DropTable
DROP TABLE "public"."HeroGrid";
