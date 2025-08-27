/*
  Warnings:

  - You are about to drop the `Social` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Contacts" ADD COLUMN     "close_at" TEXT,
ADD COLUMN     "open_at" TEXT;

-- DropTable
DROP TABLE "public"."Social";

-- CreateTable
CREATE TABLE "public"."Phone" (
    "id" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "contactId" TEXT NOT NULL,

    CONSTRAINT "Phone_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Phone_contactId_key" ON "public"."Phone"("contactId");

-- AddForeignKey
ALTER TABLE "public"."Phone" ADD CONSTRAINT "Phone_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "public"."Contacts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
