import { CatalogMenu } from '@/generated/prisma';
import { prisma } from '@/prisma';
import { ICatalogMenu } from './types';

export class CatalogMenuService {
  private prisma = prisma;

  async addCatalogMenuItem(menuItem: ICatalogMenu): Promise<CatalogMenu> {
    const catalogMenu = await this.prisma.catalogMenu.findFirst();

    if (!catalogMenu) {
      await prisma.catalogMenu.create({});
    }

    return await this.prisma.catalogItem.create({
      data: {
        label: menuItem.label,
        category: menuItem.category,
        catalogMenuId: '',
        products: {
          create: menuItem.products.map((p) => ({ label: p.label })),
        },
      },
      include: {
        products: true,
      },
    });
  }

  async getCatalogMenu(): Promise<CatalogMenu[]> {
    return await this.prisma.catalogMenu.findMany();
  }
  async deleteMenuItem(id: string): Promise<void> {
    await this.prisma.catalogMenu.delete({ where: { id } });
  }
}
