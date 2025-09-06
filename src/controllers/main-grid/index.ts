import { Router } from 'express';
import { MainGridService } from '@/services/main-grid';
import { uploadImageMiddleware } from '@/middleware';
import { IMAGE_URL } from '@/constants';

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
      const transformedGridItems = gridItems.map((item) => ({
        ...item,
        image: IMAGE_URL + item.image,
      }));
      res.json(transformedGridItems);
    })
    .catch(next);
});

export { mainGridRouter };
