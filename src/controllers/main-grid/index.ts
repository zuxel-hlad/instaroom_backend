import { Router } from 'express';
import { MainGridService } from '@/services/main-grid';
import { uploadImageMiddleware } from '@/middleware';
import { IMainGrid } from '@/services/main-grid/types';
import { transformImagePath } from '@/utils';

const mainGridRouter = Router();

const mainGridService = new MainGridService();

mainGridRouter.post('/', uploadImageMiddleware, (req, res, next) => {
  mainGridService
    .createMainGrid(req.body)
    .then((gridItem) => res.status(201).json(gridItem))
    .catch(next);
});

mainGridRouter.get('/', (_, res, next) => {
  mainGridService
    .getMainGrid()
    .then((gridItems) => {
      res.json(transformImagePath<IMainGrid>(gridItems));
    })
    .catch(next);
});

export { mainGridRouter };
