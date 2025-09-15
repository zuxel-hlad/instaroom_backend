import { Router } from 'express';
import { ProductService } from '@/services/product';
import { uploadImageMiddleware } from '@/middleware';
import { transformImagePath } from '@/utils';
import { IProduct } from '@/services/product/types';

const productRouter = Router();

const productService = new ProductService();

productRouter.post('/', uploadImageMiddleware, (req, res, next) => {
  productService
    .createProduct(req.body)
    .then((product) => res.status(201).json(product))
    .catch(next);
});

productRouter.get('/', (_, res, next) => {
  productService
    .getProducts()
    .then((products) => {
      const productsResponse = products as unknown as IProduct[];
      res.json(transformImagePath<IProduct>(productsResponse));
    })
    .catch(next);
});

export { productRouter };
