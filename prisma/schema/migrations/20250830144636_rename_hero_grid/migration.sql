/*
  Warnings:

  - You are about to drop the `hero_grid` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."hero_grid";

-- CreateTable
CREATE TABLE "public"."main_grid" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "gridIndex" INTEGER NOT NULL,

    CONSTRAINT "main_grid_pkey" PRIMARY KEY ("id")
);
