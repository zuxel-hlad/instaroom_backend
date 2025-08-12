export interface ICatalogMenuItem {
  label: string;
  category: string;
  id: string;
  products: ICatalogMenuProduct[];
}

interface ICatalogMenuProduct {
  label: string;
  id: string;
}
