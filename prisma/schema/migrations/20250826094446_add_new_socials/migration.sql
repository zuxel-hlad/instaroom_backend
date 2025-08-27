-- CreateTable
CREATE TABLE "public"."Social" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "contactsId" TEXT NOT NULL,

    CONSTRAINT "Social_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Social" ADD CONSTRAINT "Social_contactsId_fkey" FOREIGN KEY ("contactsId") REFERENCES "public"."Contacts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
