import { Router } from 'express';
import { MainGridService } from '@/services/main-grid';
import { uploadImageMiddleware } from '@/middleware';

const mainGridRouter = Router();

const mainGridService = new MainGridService();

mainGridRouter.post('/', uploadImageMiddleware('/hero_grid'), (req, res, next) => {
  mainGridService
    .createMainGrid(req.body)
    .then((gridItem) => res.status(201).json(gridItem))
    .catch(next);
});

mainGridRouter.get('/', (_, res, next) => {
  mainGridService
    .getMainGrid()
    .then((gridItems) => res.json(gridItems))
    .catch(next);
});

export { mainGridRouter };
