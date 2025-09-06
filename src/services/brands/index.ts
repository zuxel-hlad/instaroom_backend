import { Brand } from '@/generated/prisma';
import { prisma } from '@/prisma';
import { IBrand } from './types';

export class BrandsService {
  private prisma = prisma;

  getBrands(): Promise<Brand[]> {
    return this.prisma.brand.findMany();
  }

  addBrand({ image, link, description, title }: IBrand): Promise<Brand> {
    return this.prisma.brand.create({ data: { image, link, description, title } });
  }
}
