/*
  Warnings:

  - You are about to drop the `Brand` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Brands` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Brand" DROP CONSTRAINT "Brand_brandsId_fkey";

-- DropTable
DROP TABLE "public"."Brand";

-- DropTable
DROP TABLE "public"."Brands";

-- CreateTable
CREATE TABLE "public"."brands" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "brandsId" TEXT,

    CONSTRAINT "brands_pkey" PRIMARY KEY ("id")
);
