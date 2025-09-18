-- CreateEnum
CREATE TYPE "public"."ProductCategory" AS ENUM ('PAINT_PRODUCTS', 'POWER_TOOLS', 'WORK_WEAR', 'SEASONAL', 'FOR_HOME_AND_GARDEN', 'HAND_TOOL');

-- CreateEnum
CREATE TYPE "public"."DeliveryMethod" AS ENUM ('PICKUP', 'ANY', 'COURIER');

-- CreateEnum
CREATE TYPE "public"."ProductType" AS ENUM ('PAINTS', 'PRIMERS', 'VARNISHES', 'PUTTIES', 'ENAMELS', 'SOLVENTS', 'OILS', 'PAINT_BRUSHES', 'ROLLERS', 'MASKING_TAPES', 'SPATULAS', 'ART_BRUSHES', 'PAINT_SPRAYERS', 'PAINT_TRAYS', 'ABRASIVE_MATERIALS', 'PAINT_SPONGES', 'PROTECTIVE_FILM', 'COVERALLS_AND_GLOVES', 'MASKS_AND_RESPIRATORS', 'PIGMENTS_AND_DYES', 'WOOD_ANTISEPTICS', 'DECORATIVE_COATINGS', 'DRILLS', 'HAMMER_DRILLS', 'SCREWDRIVERS', 'ANGLE_GRINDERS', 'ELECTRIC_JIGSAWS', 'CIRCULAR_SAWS', 'ELECTRIC_PLANERS', 'ROUTERS', 'SANDERS', 'BELT_SANDERS', 'HEAT_GUNS', 'SOLDERING_IRONS', 'COMPRESSORS', 'ELECTRIC_IMPACT_WRENCHES', 'CONCRETE_MIXERS', 'ELECTRIC_SAWS', 'CHAINSAWS', 'CORDLESS_MULTI_TOOLS', 'ELECTRIC_STAPLERS', 'ELECTRIC_TILE_CUTTERS', 'ENGRAVERS', 'JACKETS', 'PANTS', 'OVERALLS', 'BIB_OVERALLS', 'VESTS', 'COATS', 'APRONS', 'SUITS', 'GLOVES', 'MITTENS', 'SHOE_COVERS', 'HEADGEAR', 'BOOTS', 'SHOES', 'HELMETS', 'SAFETY_GLASSES', 'RESPIRATORS', 'EAR_PROTECTORS', 'FACE_SHIELDS', 'SAFETY_BELTS', 'RAINCOATS', 'THERMAL_UNDERWEAR', 'WINTER_JACKETS', 'WINTER_THERMAL_UNDERWEAR', 'WINTER_BOOTS', 'INSULATED_GLOVES', 'HATS_AND_BALACLAVAS', 'SUMMER_CAPS', 'SUMMER_SANDALS', 'COOLING_VESTS', 'LIGHT_SUMMER_SUITS', 'MOSQUITO_NETS', 'SUNGLASSES', 'SUNSCREEN', 'HEATED_VESTS', 'ELECTRIC_HEATING_PADS', 'HEATERS', 'SNOW_SHOVELS', 'ICE_CLEATS', 'TENT_STOVES', 'COOL_BAGS', 'WINDPROOF_COATS', 'RUBBER_BOOTS', 'GARDEN_FURNITURE', 'HAMMOCKS', 'GREENHOUSES', 'SHOVELS', 'WATERING_CANS', 'DRIP_IRRIGATION_SYSTEMS', 'LAWNMOWERS', 'TRIMMERS', 'WALK_BEHIND_TRACTORS', 'RAKES', 'SECATEURS', 'LADDERS', 'FLASHLIGHTS', 'GRILLS', 'BBQ_ACCESSORIES', 'LOG_SPLITTERS', 'HOSES', 'PUMPS', 'COMPOSTERS', 'WATER_BARRELS', 'GARDEN_STATUES', 'PEST_CONTROL', 'HAMMERS', 'SCREWDRIVERS_HAND', 'PLIERS', 'CUTTERS', 'WRENCHES', 'TOOL_KITS', 'TAPE_MEASURES', 'LEVELS', 'CALIPERS', 'SAWS', 'CHISELS', 'MALLETS', 'IMPACT_WRENCHES', 'SHARPENERS', 'CARPENTRY_TOOLS', 'SANDING_BLOCKS', 'METAL_SCISSORS', 'GLASS_CUTTERS', 'VISES', 'RIVET_GUNS', 'HEX_KEYS', 'PIPE_WRENCHES');

-- CreateTable
CREATE TABLE "public"."AboutUs" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT,

    CONSTRAINT "AboutUs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."brands" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "brands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."catalog_menu" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "category" "public"."ProductCategory" NOT NULL,

    CONSTRAINT "catalog_menu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."catalog_product" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "catalogItemId" TEXT NOT NULL,
    "type" "public"."ProductType" NOT NULL,

    CONSTRAINT "catalog_product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Contacts" (
    "id" TEXT NOT NULL,
    "open_at" TEXT,
    "close_at" TEXT,

    CONSTRAINT "Contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Phone" (
    "id" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "contactId" TEXT NOT NULL,

    CONSTRAINT "Phone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Social" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "contactsId" TEXT NOT NULL,

    CONSTRAINT "Social_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."main_grid" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "gridIndex" INTEGER NOT NULL,

    CONSTRAINT "main_grid_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."News" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."NewsItem" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "newsId" TEXT,

    CONSTRAINT "NewsItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."products" (
    "id" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 1,
    "price" INTEGER NOT NULL,
    "color" TEXT,
    "image" TEXT,
    "images" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "isNew" BOOLEAN NOT NULL DEFAULT false,
    "isBestseller" BOOLEAN NOT NULL DEFAULT false,
    "isPromotion" BOOLEAN NOT NULL DEFAULT false,
    "isAvailable" BOOLEAN NOT NULL DEFAULT false,
    "isDiscount" BOOLEAN NOT NULL DEFAULT false,
    "discountAmount" INTEGER NOT NULL DEFAULT 0,
    "category" "public"."ProductCategory" NOT NULL,
    "title" TEXT NOT NULL,
    "titleLong" TEXT NOT NULL,
    "description" TEXT[],
    "deliveryMethod" "public"."DeliveryMethod" NOT NULL,
    "productCountryOfOriginId" TEXT NOT NULL,
    "type" "public"."ProductType" NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."product_reviews" (
    "id" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "text" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "product_reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."countries_of_origin" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameEN" TEXT NOT NULL,

    CONSTRAINT "countries_of_origin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ProductCharacteristic" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "ProductCharacteristic_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Phone_contactId_key" ON "public"."Phone"("contactId");

-- AddForeignKey
ALTER TABLE "public"."catalog_product" ADD CONSTRAINT "catalog_product_catalogItemId_fkey" FOREIGN KEY ("catalogItemId") REFERENCES "public"."catalog_menu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Phone" ADD CONSTRAINT "Phone_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "public"."Contacts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Social" ADD CONSTRAINT "Social_contactsId_fkey" FOREIGN KEY ("contactsId") REFERENCES "public"."Contacts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."NewsItem" ADD CONSTRAINT "NewsItem_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "public"."News"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."products" ADD CONSTRAINT "products_productCountryOfOriginId_fkey" FOREIGN KEY ("productCountryOfOriginId") REFERENCES "public"."countries_of_origin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."product_reviews" ADD CONSTRAINT "product_reviews_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProductCharacteristic" ADD CONSTRAINT "ProductCharacteristic_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
