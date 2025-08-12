import { CatalogItem, CatalogMenu } from '@/generated/prisma';
import { prisma } from '@/prisma';
import { ICatalogMenuItem } from './types';

export class CatalogMenuService {
  private prisma = prisma;

  createCatalogMenu(): Promise<CatalogMenu> {
    return this.prisma.catalogMenu.create({
      data: {
        items: {
          create: [],
        },
      },
      include: { items: true },
    });
  }

  getCatalogMenu(): Promise<CatalogMenu | null> {
    return this.prisma.catalogMenu.findFirst({
      include: {
        items: {
          include: {
            products: true,
          },
        },
      },
    });
  }

  addNewMenuItem({ label, category, products }: ICatalogMenuItem, menuId: string): Promise<CatalogItem> {
    return this.prisma.catalogItem.create({
      data: {
        label,
        category,
        menu: { connect: { id: menuId } },
        products: {
          create: products.map((product) => product),
        },
      },
      include: { products: true },
    });
  }
}
