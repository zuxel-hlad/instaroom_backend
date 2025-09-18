import { ProductCategory } from '@/constants';
import { ProductType } from '@/generated/prisma';

export interface ICatalogMenuItem {
  label: string;
  category: ProductCategory;
  id?: string;
  products: ICatalogMenuProduct[];
}

interface ICatalogMenuProduct {
  label: string;
  id?: string;
  type: ProductType;
}
