import { DeliveryMethod, ProductCategory, ProductType } from '@/constants';

export interface IProduct {
  id?: string;
  brand: string;
  price: number;
  image?: string;
  images: string[];
  isNew: boolean;
  isBestseller: boolean;
  isPromotion: boolean;
  isAvailable: boolean;
  isDiscount: boolean;
  discountAmount: number;
  category: ProductCategory;
  type: ProductType
  title: string;
  titleLong: string;
  description: string[];
  deliveryMethod: DeliveryMethod;
  reviews: IProductReview[];
  countryOfOrigin: IProductCountryOfOrigin;
  characteristics: IProductCharacteristic[];
}

interface IProductReview {
  id?: string;
  author: string;
  createdAt: string;
  text: string;
}

interface IProductCountryOfOrigin {
  id?: string;
  name: string;
  nameEN: string;
}

interface IProductCharacteristic {
  id?: string;
  name: string;
  value: string;
}
