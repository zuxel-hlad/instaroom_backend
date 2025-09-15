export const SERVER_PORT = process.env.PORT || 3343;
export const IMAGE_URL = `${process.env.BASE_URL}:${SERVER_PORT}`;

export enum ProductCategory {
  PAINT_PRODUCTS = 'PAINT_PRODUCTS',
  POWER_TOOLS = 'POWER_TOOLS',
  WORK_WEAR = 'WORK_WEAR',
  SEASONAL = 'SEASONAL',
  FOR_HOME_AND_GARDEN = 'FOR_HOME_AND_GARDEN',
  HAND_TOOL = 'HAND_TOOL',
}

export enum ProductType {
  PAINTS = 'PAINTS', // Фарби
  PRIMERS = 'PRIMERS', // Ґрунтовки
  VARNISHES = 'VARNISHES', // Лаки
  PUTTIES = 'PUTTIES', // Шпаклівки
  ENAMELS = 'ENAMELS', // Емалі
  SOLVENTS = 'SOLVENTS', // Розчинники
  OILS = 'OILS', // Оліфи
  PAINT_BRUSHES = 'PAINT_BRUSHES', // Малярні пензлі
  ROLLERS = 'ROLLERS', // Валики
  MASKING_TAPES = 'MASKING_TAPES', // Малярні стрічки
  SPATULAS = 'SPATULAS', // Шпателі
  ART_BRUSHES = 'ART_BRUSHES', // Кисті художні
  PAINT_SPRAYERS = 'PAINT_SPRAYERS', // Розпилювачі фарби
  PAINT_TRAYS = 'PAINT_TRAYS', // Лотки для фарби
  ABRASIVE_MATERIALS = 'ABRASIVE_MATERIALS', // Абразивні матеріали
  PAINT_SPONGES = 'PAINT_SPONGES', // Малярні губки
  PROTECTIVE_FILM = 'PROTECTIVE_FILM', // Плівка захисна
  COVERALLS_AND_GLOVES = 'COVERALLS_AND_GLOVES', // Комбінезони та рукавички
  MASKS_AND_RESPIRATORS = 'MASKS_AND_RESPIRATORS', // Маски та респіратори
  PIGMENTS_AND_DYES = 'PIGMENTS_AND_DYES', // Пігменти та барвники
  WOOD_ANTISEPTICS = 'WOOD_ANTISEPTICS', // Антисептики для деревини
  DECORATIVE_COATINGS = 'DECORATIVE_COATINGS', // Декоративні покриття
  DRILLS = 'DRILLS', // Дрелі
  HAMMERS = 'HAMMERS', // Молотки
  SCREWDRIVERS = 'SCREWDRIVERS', // Викрутки
  PLIERS = 'PLIERS', // Плоскогубці
  CUTTERS = 'CUTTERS', // Кусачки
  WRENCHES = 'WRENCHES', // Ріжкові ключі
  TOOL_KITS = 'TOOL_KITS', // Набори інструментів
  TAPE_MEASURES = 'TAPE_MEASURES', // Рулетки
  LEVELS = 'LEVELS', // Рівні
  CALIPERS = 'CALIPERS', // Штангенциркулі
  SAWS = 'SAWS', // Ножівки
  CHISELS = 'CHISELS', // Стамески
  MALLETS = 'MALLETS', // Киянки
  IMPACT_WRENCHES = 'IMPACT_WRENCHES', // Гайковерти
  SHARPENERS = 'SHARPENERS', // Гострозубці
  CARPENTRY_TOOLS = 'CARPENTRY_TOOLS', // Теслярські інструменти
  SANDING_BLOCKS = 'SANDING_BLOCKS', // Шліфувальні блоки
  METAL_SCISSORS = 'METAL_SCISSORS', // Ножиці по металу
  GLASS_CUTTERS = 'GLASS_CUTTERS', // Склорізи
  VISES = 'VISES', // Лещата
  RIVET_GUNS = 'RIVET_GUNS', // Клепальні пістолети
  HEX_KEYS = 'HEX_KEYS', // Ключі шестигранні
  PIPE_WRENCHES = 'PIPE_WRENCHES', // Газові ключі
}

export enum DeliveryMethod {
  PICKUP = 'PICKUP',
  ANY = 'ANY',
  COURIER = 'COURIER',
}
