import { faker } from '@faker-js/faker';
import { ProductCategory, ProductType, DeliveryMethod } from '@/constants';
import { IProduct } from '@/services/product/types';
import fs from 'fs/promises';
import path from 'path';

const jsonPath = path.resolve('src/mock-data/index.json');

const productTypesByCategory: Record<ProductCategory, ProductType[]> = {
  [ProductCategory.PAINT_PRODUCTS]: [
    ProductType.PAINTS,
    ProductType.PRIMERS,
    ProductType.VARNISHES,
    ProductType.PUTTIES,
    ProductType.ENAMELS,
    ProductType.SOLVENTS,
    ProductType.OILS,
    ProductType.PAINT_BRUSHES,
    ProductType.ROLLERS,
    ProductType.MASKING_TAPES,
    ProductType.SPATULAS,
    ProductType.ART_BRUSHES,
    ProductType.PAINT_SPRAYERS,
    ProductType.PAINT_TRAYS,
    ProductType.ABRASIVE_MATERIALS,
    ProductType.PAINT_SPONGES,
    ProductType.PROTECTIVE_FILM,
    ProductType.COVERALLS_AND_GLOVES,
    ProductType.MASKS_AND_RESPIRATORS,
    ProductType.PIGMENTS_AND_DYES,
    ProductType.WOOD_ANTISEPTICS,
    ProductType.DECORATIVE_COATINGS,
  ],
  [ProductCategory.POWER_TOOLS]: [
    ProductType.DRILLS,
    ProductType.HAMMER_DRILLS,
    ProductType.SCREWDRIVERS,
    ProductType.ANGLE_GRINDERS,
    ProductType.ELECTRIC_JIGSAWS,
    ProductType.CIRCULAR_SAWS,
    ProductType.ELECTRIC_PLANERS,
    ProductType.ROUTERS,
    ProductType.SANDERS,
    ProductType.BELT_SANDERS,
    ProductType.HEAT_GUNS,
    ProductType.SOLDERING_IRONS,
    ProductType.COMPRESSORS,
    ProductType.ELECTRIC_IMPACT_WRENCHES,
    ProductType.CONCRETE_MIXERS,
    ProductType.ELECTRIC_SAWS,
    ProductType.CHAINSAWS,
    ProductType.CORDLESS_MULTI_TOOLS,
    ProductType.ELECTRIC_STAPLERS,
    ProductType.ELECTRIC_TILE_CUTTERS,
    ProductType.ENGRAVERS,
  ],
  [ProductCategory.WORK_WEAR]: [
    ProductType.JACKETS,
    ProductType.PANTS,
    ProductType.OVERALLS,
    ProductType.BIB_OVERALLS,
    ProductType.VESTS,
    ProductType.COATS,
    ProductType.APRONS,
    ProductType.SUITS,
    ProductType.GLOVES,
    ProductType.MITTENS,
    ProductType.SHOE_COVERS,
    ProductType.HEADGEAR,
    ProductType.BOOTS,
    ProductType.SHOES,
    ProductType.HELMETS,
    ProductType.SAFETY_GLASSES,
    ProductType.RESPIRATORS,
    ProductType.EAR_PROTECTORS,
    ProductType.FACE_SHIELDS,
    ProductType.SAFETY_BELTS,
    ProductType.RAINCOATS,
    ProductType.THERMAL_UNDERWEAR,
  ],
  [ProductCategory.SEASONAL]: [
    ProductType.WINTER_JACKETS,
    ProductType.WINTER_THERMAL_UNDERWEAR,
    ProductType.WINTER_BOOTS,
    ProductType.INSULATED_GLOVES,
    ProductType.HATS_AND_BALACLAVAS,
    ProductType.SUMMER_CAPS,
    ProductType.SUMMER_SANDALS,
    ProductType.COOLING_VESTS,
    ProductType.LIGHT_SUMMER_SUITS,
    ProductType.MOSQUITO_NETS,
    ProductType.SUNGLASSES,
    ProductType.SUNSCREEN,
    ProductType.HEATED_VESTS,
    ProductType.ELECTRIC_HEATING_PADS,
    ProductType.HEATERS,
    ProductType.SNOW_SHOVELS,
    ProductType.ICE_CLEATS,
    ProductType.TENT_STOVES,
    ProductType.COOL_BAGS,
    ProductType.WINDPROOF_COATS,
    ProductType.RUBBER_BOOTS,
  ],
  [ProductCategory.FOR_HOME_AND_GARDEN]: [
    ProductType.GARDEN_FURNITURE,
    ProductType.HAMMOCKS,
    ProductType.GREENHOUSES,
    ProductType.SHOVELS,
    ProductType.WATERING_CANS,
    ProductType.DRIP_IRRIGATION_SYSTEMS,
    ProductType.LAWNMOWERS,
    ProductType.TRIMMERS,
    ProductType.WALK_BEHIND_TRACTORS,
    ProductType.RAKES,
    ProductType.SECATEURS,
    ProductType.LADDERS,
    ProductType.FLASHLIGHTS,
    ProductType.GRILLS,
    ProductType.BBQ_ACCESSORIES,
    ProductType.LOG_SPLITTERS,
    ProductType.HOSES,
    ProductType.PUMPS,
    ProductType.COMPOSTERS,
    ProductType.WATER_BARRELS,
    ProductType.GARDEN_STATUES,
    ProductType.PEST_CONTROL,
  ],
  [ProductCategory.HAND_TOOL]: [
    ProductType.HAMMERS,
    ProductType.SCREWDRIVERS_HAND,
    ProductType.PLIERS,
    ProductType.CUTTERS,
    ProductType.WRENCHES,
    ProductType.TOOL_KITS,
    ProductType.TAPE_MEASURES,
    ProductType.LEVELS,
    ProductType.CALIPERS,
    ProductType.SAWS,
    ProductType.CHISELS,
    ProductType.MALLETS,
    ProductType.IMPACT_WRENCHES,
    ProductType.SHARPENERS,
    ProductType.CARPENTRY_TOOLS,
    ProductType.SANDING_BLOCKS,
    ProductType.METAL_SCISSORS,
    ProductType.GLASS_CUTTERS,
    ProductType.VISES,
    ProductType.RIVET_GUNS,
    ProductType.HEX_KEYS,
    ProductType.PIPE_WRENCHES,
  ],
};

const generateProduct = (category: ProductCategory, type: ProductType): IProduct => {
  const isDiscount = faker.datatype.boolean();

  return {
    id: faker.string.uuid(),
    brand: faker.company.name(),
    price: faker.number.int({ min: 100, max: 10000 }),
    rating: faker.number.float({ min: 1, max: 5, fractionDigits: 1 }),
    image: faker.image.urlPicsumPhotos({ width: 400, height: 400, blur: 0, grayscale: false }),
    images: Array.from({ length: 5 }, () =>
      faker.image.urlPicsumPhotos({ width: 200, height: 200, blur: 0, grayscale: false }),
    ),
    isNew: faker.datatype.boolean(),
    isBestseller: faker.datatype.boolean(),
    isPromotion: faker.datatype.boolean(),
    isAvailable: faker.datatype.boolean(),
    isDiscount,
    discountAmount: isDiscount ? faker.number.int({ min: 1, max: 500 }) : 0,
    category,
    type,
    title: faker.commerce.productName(),
    titleLong: faker.commerce.productDescription(),
    description: faker.lorem.paragraphs().split('\n'),
    deliveryMethod: faker.helpers.arrayElement(Object.values(DeliveryMethod)),
    reviews: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () => ({
      id: faker.string.uuid(),
      author: faker.person.fullName(),
      createdAt: faker.date.past().toISOString(),
      text: faker.lorem.sentence(),
    })),
    countryOfOrigin: {
      id: faker.string.uuid(),
      name: faker.location.country(),
      nameEN: faker.location.country(),
    },
    characteristics: Array.from({ length: faker.number.int({ min: 3, max: 6 }) }, () => ({
      id: faker.string.uuid(),
      name: faker.commerce.productMaterial(),
      value: faker.commerce.productAdjective(),
    })),
    createdAt: faker.date.past().toISOString(),
    updatedAt: faker.date.recent().toISOString(),
  };
};

export const generateProducts = async (): Promise<void> => {
  const products: IProduct[] = [];
  for (const category of Object.values(ProductCategory)) {
    const types = productTypesByCategory[category];
    for (const type of types) {
      for (let i = 0; i < 10; i++) {
        products.push(generateProduct(category, type));
      }
    }
  }

  await fs.writeFile(jsonPath, JSON.stringify(products, null, 2), 'utf-8');

  console.log(`✅ JSON file Successfully saved: ${jsonPath}`);
};
