/*
  Warnings:

  - You are about to drop the column `actionBtnText` on the `HeroGridItem` table. All the data in the column will be lost.
  - You are about to drop the column `path` on the `HeroGridItem` table. All the data in the column will be lost.
  - Added the required column `gridIndex` to the `HeroGridItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."HeroGridItem" DROP COLUMN "actionBtnText",
DROP COLUMN "path",
ADD COLUMN     "gridIndex" INTEGER NOT NULL;
