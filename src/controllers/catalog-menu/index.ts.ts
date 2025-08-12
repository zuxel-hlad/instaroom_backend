import { Router } from 'express';
import { CatalogMenuService } from '@/services/catalog-menu';

const catalogMenuRouter = Router();

const catalogMenuService = new CatalogMenuService();

catalogMenuRouter.post('/', (req, res, next) => {
  catalogMenuService
    .addCatalogMenuItem(req.body)
    .then((menu) => res.status(201).json(menu))
    .catch(next);
});

catalogMenuRouter.get('/', (req, res, next) => {
  catalogMenuService
    .getCatalogMenu()
    .then((menu) => res.json(menu))
    .catch(next);
});

export { catalogMenuRouter };
