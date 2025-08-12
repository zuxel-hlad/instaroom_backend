/*
  Warnings:

  - Added the required column `label` to the `WorkTime` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."WorkTime" ADD COLUMN     "label" TEXT NOT NULL;
