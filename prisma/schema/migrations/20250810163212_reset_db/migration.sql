-- CreateTable
CREATE TABLE "public"."Brands" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Brands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Brand" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "brandsId" TEXT,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CatalogMenu" (
    "id" TEXT NOT NULL,

    CONSTRAINT "CatalogMenu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CatalogItem" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "catalogMenuId" TEXT,

    CONSTRAINT "CatalogItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CatalogProduct" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "catalogItemId" TEXT,

    CONSTRAINT "CatalogProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Contacts" (
    "id" TEXT NOT NULL,
    "phoneId" TEXT NOT NULL,

    CONSTRAINT "Contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Phone" (
    "id" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "Phone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Social" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "contactsId" TEXT,

    CONSTRAINT "Social_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."HeroGrid" (
    "id" TEXT NOT NULL,

    CONSTRAINT "HeroGrid_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."HeroGridItem" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "actionBtnText" TEXT,
    "path" TEXT NOT NULL,
    "heroGridId" TEXT,

    CONSTRAINT "HeroGridItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."HeroProducts" (
    "id" TEXT NOT NULL,

    CONSTRAINT "HeroProducts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."HeroProduct" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "heroProductsId" TEXT,

    CONSTRAINT "HeroProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."News" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "news" TEXT NOT NULL,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."NewsItem" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "NewsItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Product" (
    "id" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "isNew" BOOLEAN NOT NULL DEFAULT false,
    "isBestseller" BOOLEAN NOT NULL DEFAULT false,
    "isPromotion" BOOLEAN NOT NULL DEFAULT false,
    "isAvailable" BOOLEAN NOT NULL DEFAULT false,
    "isDiscount" BOOLEAN NOT NULL DEFAULT false,
    "discountAmount" INTEGER,
    "category" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "titleLong" TEXT NOT NULL,
    "description" TEXT[],

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Specification" (
    "id" TEXT NOT NULL,
    "options" TEXT[],
    "productId" TEXT,

    CONSTRAINT "Specification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ProductReview" (
    "id" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productId" TEXT,

    CONSTRAINT "ProductReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ShopInfo" (
    "id" TEXT NOT NULL,
    "workTimeId" TEXT NOT NULL,

    CONSTRAINT "ShopInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."WorkTime" (
    "id" TEXT NOT NULL,
    "start" TEXT NOT NULL,
    "end" TEXT NOT NULL,

    CONSTRAINT "WorkTime_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Contacts_phoneId_key" ON "public"."Contacts"("phoneId");

-- CreateIndex
CREATE UNIQUE INDEX "ShopInfo_workTimeId_key" ON "public"."ShopInfo"("workTimeId");

-- AddForeignKey
ALTER TABLE "public"."Brand" ADD CONSTRAINT "Brand_brandsId_fkey" FOREIGN KEY ("brandsId") REFERENCES "public"."Brands"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CatalogItem" ADD CONSTRAINT "CatalogItem_catalogMenuId_fkey" FOREIGN KEY ("catalogMenuId") REFERENCES "public"."CatalogMenu"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CatalogProduct" ADD CONSTRAINT "CatalogProduct_catalogItemId_fkey" FOREIGN KEY ("catalogItemId") REFERENCES "public"."CatalogItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Contacts" ADD CONSTRAINT "Contacts_phoneId_fkey" FOREIGN KEY ("phoneId") REFERENCES "public"."Phone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Social" ADD CONSTRAINT "Social_contactsId_fkey" FOREIGN KEY ("contactsId") REFERENCES "public"."Contacts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."HeroGridItem" ADD CONSTRAINT "HeroGridItem_heroGridId_fkey" FOREIGN KEY ("heroGridId") REFERENCES "public"."HeroGrid"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."HeroProduct" ADD CONSTRAINT "HeroProduct_heroProductsId_fkey" FOREIGN KEY ("heroProductsId") REFERENCES "public"."HeroProducts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Specification" ADD CONSTRAINT "Specification_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProductReview" ADD CONSTRAINT "ProductReview_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ShopInfo" ADD CONSTRAINT "ShopInfo_workTimeId_fkey" FOREIGN KEY ("workTimeId") REFERENCES "public"."WorkTime"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
