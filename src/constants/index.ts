export const SERVER_PORT = process.env.PORT || 3343;

export enum ProductCategory {
  PAINT_PRODUCTS = 'PAINT_PRODUCTS',
  POWER_TOOLS = 'POWER_TOOLS',
  WORK_WEAR = 'WORK_WEAR',
  SEASONAL = 'SEASONAL',
  FOR_HOME_AND_GARDEN = 'FOR_HOME_AND_GARDEN',
  HAND_TOOL = 'HAND_TOOL',
}

export enum ProductType {
  // Малярні товари
  PAINTS = 'PAINTS', // фарби
  PRIMERS = 'PRIMERS', // ґрунтовки
  VARNISHES = 'VARNISHES', // лаки
  PUTTIES = 'PUTTIES', // шпаклівки
  ENAMELS = 'ENAMELS', // емалі
  SOLVENTS = 'SOLVENTS', // розчинники
  OILS = 'OILS', // олії
  PAINT_BRUSHES = 'PAINT_BRUSHES', // пензлі малярні
  ROLLERS = 'ROLLERS', // валики
  MASKING_TAPES = 'MASKING_TAPES', // малярні стрічки
  SPATULAS = 'SPATULAS', // шпателі
  ART_BRUSHES = 'ART_BRUSHES', // художні пензлі
  PAINT_SPRAYERS = 'PAINT_SPRAYERS', // фарбопульти
  PAINT_TRAYS = 'PAINT_TRAYS', // ванночки для фарби
  ABRASIVE_MATERIALS = 'ABRASIVE_MATERIALS', // абразивні матеріали
  PAINT_SPONGES = 'PAINT_SPONGES', // губки для фарбування
  PROTECTIVE_FILM = 'PROTECTIVE_FILM', // захисна плівка
  COVERALLS_AND_GLOVES = 'COVERALLS_AND_GLOVES', // комбінезони та рукавички
  MASKS_AND_RESPIRATORS = 'MASKS_AND_RESPIRATORS', // маски та респіратори
  PIGMENTS_AND_DYES = 'PIGMENTS_AND_DYES', // пігменти та барвники
  WOOD_ANTISEPTICS = 'WOOD_ANTISEPTICS', // антисептики для дерева
  DECORATIVE_COATINGS = 'DECORATIVE_COATINGS', // декоративні покриття

  // Електроінструмент
  DRILLS = 'DRILLS', // дрилі
  HAMMER_DRILLS = 'HAMMER_DRILLS', // перфоратори
  SCREWDRIVERS = 'SCREWDRIVERS', // шурупокрути
  ANGLE_GRINDERS = 'ANGLE_GRINDERS', // болгарки
  ELECTRIC_JIGSAWS = 'ELECTRIC_JIGSAWS', // лобзики
  CIRCULAR_SAWS = 'CIRCULAR_SAWS', // циркулярні пили
  ELECTRIC_PLANERS = 'ELECTRIC_PLANERS', // електрорубанки
  ROUTERS = 'ROUTERS', // фрезери
  SANDERS = 'SANDERS', // шліфувальні машини
  BELT_SANDERS = 'BELT_SANDERS', // стрічкові шліфувальні машини
  HEAT_GUNS = 'HEAT_GUNS', // будівельні фени
  SOLDERING_IRONS = 'SOLDERING_IRONS', // паяльники
  COMPRESSORS = 'COMPRESSORS', // компресори
  ELECTRIC_IMPACT_WRENCHES = 'ELECTRIC_IMPACT_WRENCHES', // гайковерти електричні
  CONCRETE_MIXERS = 'CONCRETE_MIXERS', // бетономішалки
  ELECTRIC_SAWS = 'ELECTRIC_SAWS', // електропили
  CHAINSAWS = 'CHAINSAWS', // бензопили
  CORDLESS_MULTI_TOOLS = 'CORDLESS_MULTI_TOOLS', // акумуляторні мультитули
  ELECTRIC_STAPLERS = 'ELECTRIC_STAPLERS', // електростеплери
  ELECTRIC_TILE_CUTTERS = 'ELECTRIC_TILE_CUTTERS', // електричні плиткорізи
  ENGRAVERS = 'ENGRAVERS', // гравери

  // Спецодяг
  JACKETS = 'JACKETS', // куртки
  PANTS = 'PANTS', // штани
  OVERALLS = 'OVERALLS', // комбінезони
  BIB_OVERALLS = 'BIB_OVERALLS', // напівкомбінезони
  VESTS = 'VESTS', // жилети
  COATS = 'COATS', // пальта
  APRONS = 'APRONS', // фартухи
  SUITS = 'SUITS', // костюми
  GLOVES = 'GLOVES', // рукавички
  MITTENS = 'MITTENS', // рукавиці
  SHOE_COVERS = 'SHOE_COVERS', // бахіли
  HEADGEAR = 'HEADGEAR', // головні убори
  BOOTS = 'BOOTS', // чоботи
  SHOES = 'SHOES', // взуття
  HELMETS = 'HELMETS', // каски
  SAFETY_GLASSES = 'SAFETY_GLASSES', // захисні окуляри
  RESPIRATORS = 'RESPIRATORS', // респіратори
  EAR_PROTECTORS = 'EAR_PROTECTORS', // протишумні навушники
  FACE_SHIELDS = 'FACE_SHIELDS', // захисні щитки
  SAFETY_BELTS = 'SAFETY_BELTS', // запобіжні пояси
  RAINCOATS = 'RAINCOATS', // дощовики
  THERMAL_UNDERWEAR = 'THERMAL_UNDERWEAR', // термобілизна

  // Сезонне
  WINTER_JACKETS = 'WINTER_JACKETS', // зимові куртки
  WINTER_THERMAL_UNDERWEAR = 'WINTER_THERMAL_UNDERWEAR', // зимова термобілизна
  WINTER_BOOTS = 'WINTER_BOOTS', // зимові чоботи
  INSULATED_GLOVES = 'INSULATED_GLOVES', // утеплені рукавички
  HATS_AND_BALACLAVAS = 'HATS_AND_BALACLAVAS', // шапки та балаклави
  SUMMER_CAPS = 'SUMMER_CAPS', // літні кепки
  SUMMER_SANDALS = 'SUMMER_SANDALS', // літні сандалі
  COOLING_VESTS = 'COOLING_VESTS', // охолоджувальні жилети
  LIGHT_SUMMER_SUITS = 'LIGHT_SUMMER_SUITS', // легкі літні костюми
  MOSQUITO_NETS = 'MOSQUITO_NETS', // протимоскітні сітки
  SUNGLASSES = 'SUNGLASSES', // сонцезахисні окуляри
  SUNSCREEN = 'SUNSCREEN', // сонцезахисний крем
  HEATED_VESTS = 'HEATED_VESTS', // жилети з підігрівом
  ELECTRIC_HEATING_PADS = 'ELECTRIC_HEATING_PADS', // електричні грілки
  HEATERS = 'HEATERS', // обігрівачі
  SNOW_SHOVELS = 'SNOW_SHOVELS', // лопати для снігу
  ICE_CLEATS = 'ICE_CLEATS', // льодоступи
  TENT_STOVES = 'TENT_STOVES', // туристичні печі
  COOL_BAGS = 'COOL_BAGS', // сумки-холодильники
  WINDPROOF_COATS = 'WINDPROOF_COATS', // вітрозахисні куртки
  RUBBER_BOOTS = 'RUBBER_BOOTS', // гумові чоботи

  // Для дому та дачі
  GARDEN_FURNITURE = 'GARDEN_FURNITURE', // садові меблі
  HAMMOCKS = 'HAMMOCKS', // гамаки
  GREENHOUSES = 'GREENHOUSES', // теплиці
  SHOVELS = 'SHOVELS', // лопати
  WATERING_CANS = 'WATERING_CANS', // лійки
  DRIP_IRRIGATION_SYSTEMS = 'DRIP_IRRIGATION_SYSTEMS', // системи крапельного поливу
  LAWNMOWERS = 'LAWNMOWERS', // газонокосарки
  TRIMMERS = 'TRIMMERS', // тримери
  WALK_BEHIND_TRACTORS = 'WALK_BEHIND_TRACTORS', // мотоблоки
  RAKES = 'RAKES', // граблі
  SECATEURS = 'SECATEURS', // секатори
  LADDERS = 'LADDERS', // драбини
  FLASHLIGHTS = 'FLASHLIGHTS', // ліхтарі
  GRILLS = 'GRILLS', // грилі
  BBQ_ACCESSORIES = 'BBQ_ACCESSORIES', // аксесуари для барбекю
  LOG_SPLITTERS = 'LOG_SPLITTERS', // дровоколи
  HOSES = 'HOSES', // шланги
  PUMPS = 'PUMPS', // насоси
  COMPOSTERS = 'COMPOSTERS', // компостери
  WATER_BARRELS = 'WATER_BARRELS', // бочки для води
  GARDEN_STATUES = 'GARDEN_STATUES', // садові статуї
  PEST_CONTROL = 'PEST_CONTROL', // засоби від шкідників

  // Інструменти (ручні)
  HAMMERS = 'HAMMERS', // молотки
  SCREWDRIVERS_HAND = 'SCREWDRIVERS_HAND', // викрутки
  PLIERS = 'PLIERS', // плоскогубці
  CUTTERS = 'CUTTERS', // кусачки
  WRENCHES = 'WRENCHES', // ключі
  TOOL_KITS = 'TOOL_KITS', // набори інструментів
  TAPE_MEASURES = 'TAPE_MEASURES', // рулетки
  LEVELS = 'LEVELS', // рівні
  CALIPERS = 'CALIPERS', // штангенциркулі
  SAWS = 'SAWS', // пили
  CHISELS = 'CHISELS', // стамески
  MALLETS = 'MALLETS', // киянки
  IMPACT_WRENCHES = 'IMPACT_WRENCHES', // гайковерти ручні
  SHARPENERS = 'SHARPENERS', // точила
  CARPENTRY_TOOLS = 'CARPENTRY_TOOLS', // столярні інструменти
  SANDING_BLOCKS = 'SANDING_BLOCKS', // шліфувальні колодки
  METAL_SCISSORS = 'METAL_SCISSORS', // ножиці по металу
  GLASS_CUTTERS = 'GLASS_CUTTERS', // склорізи
  VISES = 'VISES', // лещата
  RIVET_GUNS = 'RIVET_GUNS', // заклепочники
  HEX_KEYS = 'HEX_KEYS', // шестигранники
  PIPE_WRENCHES = 'PIPE_WRENCHES', // розвідні ключі
}

export enum DeliveryMethod {
  PICKUP = 'PICKUP',
  ANY = 'ANY',
  COURIER = 'COURIER',
}
