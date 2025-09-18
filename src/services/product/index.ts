import { Product, ProductCategory, ProductType } from '@/generated/prisma';
import { prisma } from '@/prisma';
import { IProduct } from './types';
import { HttpError } from '../http-error';

export class ProductService {
  private prisma = prisma;

  createProduct(product: IProduct): Promise<Product> {
    if (product.isDiscount && !product.discountAmount) {
      throw new HttpError('The discount is indicated, but the value is not specified', 400);
    }

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
        rating: product.rating,
        color: product.color,
        title: product.title,
        titleLong: product.titleLong,
        description: product.description.map((description) => description),
        deliveryMethod: product.deliveryMethod,
        reviews: { create: product.reviews.map(({ author, createdAt, text }) => ({ author, createdAt, text })) },
        countryOfOrigin: { create: product.countryOfOrigin },
        characteristics: { create: product.characteristics.map(({ name, value }) => ({ name, value })) },
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
      },
      include: { reviews: true, countryOfOrigin: true, characteristics: true },
    });
  }

  createProducts(products: IProduct[]): Promise<Product[]> {
    for (const product of products) {
      if (product.isDiscount && !product.discountAmount) {
        throw new HttpError(
          `The discount is indicated, but the value is not specified for product ${product.title}`,
          400,
        );
      }
    }

    return Promise.all(
      products.map((product) =>
        this.prisma.product.create({
          data: {
            brand: product.brand,
            price: product.price,
            image: product.image,
            images: product.images,
            isNew: product.isNew,
            isBestseller: product.isBestseller,
            isPromotion: product.isPromotion,
            isAvailable: product.isAvailable,
            isDiscount: product.isDiscount,
            discountAmount: product.discountAmount,
            category: product.category,
            type: product.type,
            rating: product.rating,
            color: product.color,
            title: product.title,
            titleLong: product.titleLong,
            description: product.description,
            deliveryMethod: product.deliveryMethod,
            reviews: {
              create: product.reviews.map(({ author, createdAt, text }) => ({
                author,
                createdAt,
                text,
              })),
            },
            countryOfOrigin: { create: product.countryOfOrigin },
            characteristics: {
              create: product.characteristics.map(({ name, value }) => ({ name, value })),
            },
            createdAt: product.createdAt,
            updatedAt: product.updatedAt,
          },
          include: { reviews: true, countryOfOrigin: true, characteristics: true },
        }),
      ),
    );
  }

  getProducts(): Promise<Product[]> {
    return this.prisma.product.findMany({ include: { reviews: true, countryOfOrigin: true, characteristics: true } });
  }

  async deleteProductById(id: string): Promise<Product> {
    await this.prisma.productReview.deleteMany({ where: { productId: id } });
    await this.prisma.productCharacteristic.deleteMany({ where: { productId: id } });
    return this.prisma.product.delete({ where: { id } });
  }

  getProductsByType(type: ProductType): Promise<Product[]> {
    return this.prisma.product.findMany({
      where: { type },
      include: { reviews: true, countryOfOrigin: true, characteristics: true },
    });
  }

  getProductsByCategory(category: ProductCategory): Promise<Product[]> {
    return this.prisma.product.findMany({
      where: { category },
      include: { reviews: true, countryOfOrigin: true, characteristics: true },
    });
  }

  getProductById(id: string): Promise<Product | null> {
    return this.prisma.product.findFirst({
      where: { id },
      include: { reviews: true, countryOfOrigin: true, characteristics: true },
    });
  }
}
