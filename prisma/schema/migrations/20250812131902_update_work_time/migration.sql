/*
  Warnings:

  - You are about to drop the column `label` on the `WorkTime` table. All the data in the column will be lost.
  - You are about to drop the `ShopInfo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."ShopInfo" DROP CONSTRAINT "ShopInfo_workTimeId_fkey";

-- AlterTable
ALTER TABLE "public"."WorkTime" DROP COLUMN "label";

-- DropTable
DROP TABLE "public"."ShopInfo";
