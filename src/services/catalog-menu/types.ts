export interface ICatalogMenu {
  label: string;
  category: string;
  id: string;
  products: ICatalogMenuItem[];
}

interface ICatalogMenuItem {
  label: string;
  id: string;
}
