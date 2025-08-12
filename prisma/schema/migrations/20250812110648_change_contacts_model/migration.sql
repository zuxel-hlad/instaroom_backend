/*
  Warnings:

  - You are about to drop the column `catalogMenuId` on the `CatalogItem` table. All the data in the column will be lost.
  - You are about to drop the column `phoneId` on the `Contacts` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[contactId]` on the table `Phone` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `menuId` to the `CatalogItem` table without a default value. This is not possible if the table is not empty.
  - Made the column `catalogItemId` on table `CatalogProduct` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `contactId` to the `Phone` table without a default value. This is not possible if the table is not empty.
  - Made the column `contactsId` on table `Social` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."CatalogItem" DROP CONSTRAINT "CatalogItem_catalogMenuId_fkey";

-- DropForeignKey
ALTER TABLE "public"."CatalogProduct" DROP CONSTRAINT "CatalogProduct_catalogItemId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Contacts" DROP CONSTRAINT "Contacts_phoneId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Social" DROP CONSTRAINT "Social_contactsId_fkey";

-- DropIndex
DROP INDEX "public"."Contacts_phoneId_key";

-- AlterTable
ALTER TABLE "public"."CatalogItem" DROP COLUMN "catalogMenuId",
ADD COLUMN     "menuId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."CatalogProduct" ALTER COLUMN "catalogItemId" SET NOT NULL;

-- AlterTable
ALTER TABLE "public"."Contacts" DROP COLUMN "phoneId";

-- AlterTable
ALTER TABLE "public"."Phone" ADD COLUMN     "contactId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Social" ALTER COLUMN "contactsId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Phone_contactId_key" ON "public"."Phone"("contactId");

-- AddForeignKey
ALTER TABLE "public"."CatalogItem" ADD CONSTRAINT "CatalogItem_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "public"."CatalogMenu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CatalogProduct" ADD CONSTRAINT "CatalogProduct_catalogItemId_fkey" FOREIGN KEY ("catalogItemId") REFERENCES "public"."CatalogItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Phone" ADD CONSTRAINT "Phone_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "public"."Contacts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Social" ADD CONSTRAINT "Social_contactsId_fkey" FOREIGN KEY ("contactsId") REFERENCES "public"."Contacts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
