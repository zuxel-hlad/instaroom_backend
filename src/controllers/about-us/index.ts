import { Router } from 'express';
import { AboutUsService } from '@/services/about-us';

const aboutUsRouter = Router();

const aboutUsService = new AboutUsService();

aboutUsRouter.post('/', (req, res, next) => {
  aboutUsService
    .addAboutUs(req.body)
    .then((info) => res.status(201).json(info))
    .catch(next);
});

aboutUsRouter.get('/', (_, res, next) => {
  aboutUsService
    .getAboutUs()
    .then((info) => res.json(info))
    .catch(next);
});

export { aboutUsRouter };
