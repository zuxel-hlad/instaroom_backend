import { CatalogMenuItem } from '@/generated/prisma';
import { prisma } from '@/prisma';
import { ICatalogMenuItem } from './types';

export class CatalogMenuService {
  private prisma = prisma;

  getCatalogMenu(): Promise<CatalogMenuItem[]> {
    return this.prisma.catalogMenuItem.findMany({ include: { products: true } });
  }

  addNewMenuItem({ label, category, products }: ICatalogMenuItem): Promise<CatalogMenuItem> {
    return this.prisma.catalogMenuItem.create({
      data: {
        label,
        category,
        products: {
          create: products.map(({ id, label }) => ({ id, label })),
        },
      },
      include: { products: true },
    });
  }
}
