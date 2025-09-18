import { Router } from 'express';
import { ProductService } from '@/services/product';
import { ProductCategory, ProductType } from '@/generated/prisma';

const productRouter = Router();

const productService = new ProductService();

productRouter.post('/', (req, res, next) => {
  productService
    .createProduct(req.body)
    .then((product) => res.status(201).json(product))
    .catch(next);
});

productRouter.post('/all', (req, res, next) => {
  productService
    .createProducts(req.body)
    .then((products) => res.status(201).json(products))
    .catch(next);
});

productRouter.get('/all', (_, res, next) => {
  productService
    .getProducts()
    .then((products) => res.json(products))
    .catch(next);
});

productRouter.get('/type/:type', (req, res, next) => {
  const type = req.params.type.toUpperCase() as ProductType;
  productService
    .getProductsByType(type)
    .then((products) => res.json(products))
    .catch(next);
});

productRouter.get('/category/:category', (req, res, next) => {
  const category = req.params.category.toUpperCase() as ProductCategory;
  productService
    .getProductsByCategory(category)
    .then((products) => res.json(products))
    .catch(next);
});

productRouter.get('/:id', (req, res, next) => {
  productService
    .getProductById(req.params.id)
    .then((product) => res.json(product))
    .catch(next);
});

productRouter.delete('/:id', (req, res, next) => {
  productService
    .deleteProductById(req.params.id)
    .then((product) => res.json(product))
    .catch(next);
});

export { productRouter };
