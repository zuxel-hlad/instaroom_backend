/*
  Warnings:

  - You are about to drop the column `phone_number` on the `Phone` table. All the data in the column will be lost.
  - Added the required column `number` to the `Phone` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Phone" DROP COLUMN "phone_number",
ADD COLUMN     "number" TEXT NOT NULL;
