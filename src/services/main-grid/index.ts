import { prisma } from '@/prisma';
import { MainGridItem } from '@/generated/prisma';
import { IMainGrid } from './types';

export class MainGridService {
  private prisma = prisma;

  getMainGrid(): Promise<MainGridItem[]> {
    return this.prisma.mainGridItem.findMany();
  }

  createMainGrid({ title, image, gridIndex }: IMainGrid): Promise<MainGridItem | null> {
    if (!isNaN(gridIndex)) {
      return this.prisma.mainGridItem.create({ data: { title, image, gridIndex: Number(gridIndex) } });
    }

    throw new Error('Invalid grid item parameters');
  }
}
