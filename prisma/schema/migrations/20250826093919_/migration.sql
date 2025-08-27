/*
  Warnings:

  - You are about to drop the column `contactsId` on the `Social` table. All the data in the column will be lost.
  - You are about to drop the `Phone` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WorkTime` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Phone" DROP CONSTRAINT "Phone_contactId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Social" DROP CONSTRAINT "Social_contactsId_fkey";

-- AlterTable
ALTER TABLE "public"."Social" DROP COLUMN "contactsId";

-- DropTable
DROP TABLE "public"."Phone";

-- DropTable
DROP TABLE "public"."WorkTime";
