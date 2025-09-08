import { prisma } from '@/prisma';
import { IAboutUs } from './types';
import { AboutUs } from '@/generated/prisma';

export class AboutUsService {
  private prisma = prisma;

  addAboutUs({ title, description, image }: IAboutUs): Promise<AboutUs> {
    return this.prisma.aboutUs.create({ data: { title, description, image } });
  }

  getAboutUs(): Promise<AboutUs | null> {
    return this.prisma.aboutUs.findFirst();
  }
}
