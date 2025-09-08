import { uploadImageMiddleware } from '@/middleware';
import { Router } from 'express';
import { AboutUsService } from '@/services/about-us';
import { IMAGE_URL } from '@/constants';

const aboutUsRouter = Router();

const aboutUsService = new AboutUsService();

aboutUsRouter.post('/', uploadImageMiddleware, (req, res, next) => {
  aboutUsService
    .addAboutUs(req.body)
    .then((info) => res.status(201).json(info))
    .catch(next);
});

aboutUsRouter.get('/', (_, res, next) => {
  aboutUsService
    .getAboutUs()
    .then((info) => {
      if (info?.image?.length) {
        return res.json({
          ...info,
          image: IMAGE_URL + info.image,
        });
      }

      return;
    })
    .catch(next);
});

export { aboutUsRouter };
