import { Product } from '@/generated/prisma';
import { prisma } from '@/prisma';
import { IProduct } from './types';

export class ProductService {
  private prisma = prisma;

  createProduct(product: IProduct): Promise<Product> {
    console.log(JSON.parse(JSON.stringify(product)));
    return this.prisma.product.create({
      data: {
        brand: product.brand,
        price: product.price,
        image: product?.image,
        images: product.images.map((image) => image),
        isNew: product.isNew,
        isBestseller: product.isBestseller,
        isPromotion: product.isPromotion,
        isAvailable: product.isAvailable,
        isDiscount: product.isDiscount,
        discountAmount: product.discountAmount,
        category: product.category,
        type: product.type,
        title: product.title,
        titleLong: product.titleLong,
        description: product.description.map((description) => description),
        deliveryMethod: product.deliveryMethod,
        reviews: { create: product.reviews.map(({ author, createdAt, text }) => ({ author, createdAt, text })) },
        countryOfOrigin: { create: product.countryOfOrigin },
        characteristics: { create: product.characteristics.map(({ name, value }) => ({ name, value })) },
      },
      include: { reviews: true, countryOfOrigin: true, characteristics: true },
    });
  }

  getProducts(): Promise<Product[]> {
    return this.prisma.product.findMany({ include: { reviews: true, countryOfOrigin: true, characteristics: true } });
  }
}
