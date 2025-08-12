import { Router } from 'express';
import { CatalogMenuService } from '@/services/catalog-menu';

const catalogMenuRouter = Router();

const catalogMenuService = new CatalogMenuService();

catalogMenuRouter.post('/', async (req, res) => {
  const catalog = await catalogMenuService.addCatalogMenuItem(req.body);
  res.status(201).json(catalog);
});

catalogMenuRouter.get('/', async (req, res) => {
  const menu = await catalogMenuService.getCatalogMenu();
  res.json(menu);
});

catalogMenuRouter.delete('/:id', async (req, res) => {
  const menu = await catalogMenuService.deleteMenuItem(req.params.id);
  res.json(menu);
});

export { catalogMenuRouter };
