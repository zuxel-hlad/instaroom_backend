import { prisma } from '@/prisma';
import { HeroGridItem } from '@/generated/prisma';
import { IHeroGridItem } from './types';
import { IMAGE_URL } from '@/constants';

export class HeroGridService {
  private prisma = prisma;

  getHeroGrid(): Promise<HeroGridItem[]> {
    return this.prisma.heroGridItem.findMany();
  }

  createHeroGrid({ image, title, gridIndex }: IHeroGridItem): Promise<IHeroGridItem> {
    return this.prisma.heroGridItem.create({
      data: { image: `${IMAGE_URL}${image}`, title, gridIndex },
    });
  }
}
