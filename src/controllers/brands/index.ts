import { Router } from 'express';
import { BrandsService } from '@/services/brands';
import { uploadImageMiddleware } from '@/middleware';

const brandsRouter = Router();

const brandsService = new BrandsService();

brandsRouter.post('/', uploadImageMiddleware('/brands'), (req, res, next) => {
  brandsService
    .addBrand(req.body)
    .then((brand) => res.status(201).json(brand))
    .catch(next);
});

brandsRouter.get('/', (_, res, next) => {
  brandsService
    .getBrands()
    .then((brands) => res.json(brands))
    .catch(next);
});

export { brandsRouter };
