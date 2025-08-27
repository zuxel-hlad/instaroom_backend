import { ProductCategory } from '@/constants';

export interface ICatalogMenuItem {
  label: string;
  category: ProductCategory;
  id: string;
  products: ICatalogMenuProduct[];
}

interface ICatalogMenuProduct {
  label: string;
  id: string;
}
