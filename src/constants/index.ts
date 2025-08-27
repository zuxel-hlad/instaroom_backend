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
