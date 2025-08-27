import { Router } from 'express';
import { catalogMenuRouter, contactsRouter, newsRouter, brandsRouter, aboutUsRouter } from '@/controllers';

const router = Router();

router.use('/api/catalog-menu', catalogMenuRouter);
router.use('/api/about-us', aboutUsRouter);
router.use('/api/brands', brandsRouter);
router.use('/api/contacts', contactsRouter);
router.use('/api/news', newsRouter);

export { router };
