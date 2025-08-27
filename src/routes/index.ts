import { Router } from 'express';
import { catalogMenuRouter, contactsRouter, newsRouter, brandsRouter } from '@/controllers';

const router = Router();

router.use('/api/catalog-menu', catalogMenuRouter);
router.use('/api/brands', brandsRouter);
router.use('/api/contacts', contactsRouter);
router.use('/api/news', newsRouter);

export { router };
