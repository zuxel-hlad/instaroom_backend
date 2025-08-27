import { Router } from 'express';
import { BrandsService } from '@/services/brands';
import { upload } from '@/utils';

const brandsRouter = Router();

const brandsService = new BrandsService();

brandsRouter.post('/', upload.single('image'), (req, res, next) => {
  const imagePath = req.file ? `/uploads/${req.file.filename}` : '';

  brandsService
    .addBrand({ ...req.body, image: imagePath })
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
