/*
  Warnings:

  - You are about to drop the `CatalogItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CatalogMenu` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CatalogProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."ProductCategory" AS ENUM ('PAINT_PRODUCTS', 'POWER_TOOLS', 'WORK_WEAR', 'SEASONAL', 'FOR_HOME_AND_GARDEN', 'HAND_TOOL');

-- DropForeignKey
ALTER TABLE "public"."CatalogItem" DROP CONSTRAINT "CatalogItem_menuId_fkey";

-- DropForeignKey
ALTER TABLE "public"."CatalogProduct" DROP CONSTRAINT "CatalogProduct_catalogItemId_fkey";

-- DropTable
DROP TABLE "public"."CatalogItem";

-- DropTable
DROP TABLE "public"."CatalogMenu";

-- DropTable
DROP TABLE "public"."CatalogProduct";

-- CreateTable
CREATE TABLE "public"."catalog_menu" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "category" "public"."ProductCategory" NOT NULL,
    "menuId" TEXT NOT NULL,

    CONSTRAINT "catalog_menu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."catalog_product" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "catalogItemId" TEXT NOT NULL,

    CONSTRAINT "catalog_product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."catalog_product" ADD CONSTRAINT "catalog_product_catalogItemId_fkey" FOREIGN KEY ("catalogItemId") REFERENCES "public"."catalog_menu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
