import { Router } from 'express';
import { CatalogMenuService } from '@/services/catalog-menu';

const catalogMenuRouter = Router();

const catalogMenuService = new CatalogMenuService();

catalogMenuRouter.post('/', (_, res, next) => {
  catalogMenuService
    .createCatalogMenu()
    .then((menu) => res.status(201).json(menu))
    .catch(next);
});

catalogMenuRouter.post('/:menuId', (req, res, next) => {
  catalogMenuService
    .addNewMenuItem(req.body, req.params.menuId)
    .then((menu) => res.status(201).json(menu))
    .catch(next);
});

catalogMenuRouter.get('/', (_, res, next) => {
  catalogMenuService
    .getCatalogMenu()
    .then((menu) => res.json(menu))
    .catch(next);
});

export { catalogMenuRouter };
