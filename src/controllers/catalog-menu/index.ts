import { Router } from 'express';
import { CatalogMenuService } from '@/services/catalog-menu';

const catalogMenuRouter = Router();

const catalogMenuService = new CatalogMenuService();

catalogMenuRouter.post('/', (req, res, next) => {
  catalogMenuService
    .addNewMenuItem(req.body)
    .then((menuItem) => res.status(201).json(menuItem))
    .catch(next);
});

catalogMenuRouter.get('/', (_, res, next) => {
  catalogMenuService
    .getCatalogMenu()
    .then((menu) => res.json(menu))
    .catch(next);
});

export { catalogMenuRouter };
