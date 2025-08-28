import { Router } from 'express';
import { HeroGridService } from '@/services/hero-grid';
import { upload } from '@/utils';

const heroGridRouter = Router();

const heroGridService = new HeroGridService();

heroGridRouter.post('/', upload.single('image'), (req, res, next) => {
  const imagePath = req.file ? `/uploads/${req.file.filename}` : '';

  heroGridService
    .createHeroGrid({ ...req.body, image: imagePath })
    .then((brand) => res.status(201).json(brand))
    .catch(next);
});

heroGridRouter.get('/', (_, res, next) => {
  heroGridService
    .getHeroGrid()
    .then((brands) => res.json(brands))
    .catch(next);
});

export { heroGridRouter };
