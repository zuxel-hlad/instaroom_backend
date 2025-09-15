import { Router } from 'express';
import {
  catalogMenuRouter,
  contactsRouter,
  newsRouter,
  brandsRouter,
  aboutUsRouter,
  mainGridRouter,
  productRouter,
} from '@/controllers';

const router = Router();

router.use('/api/catalog-menu', catalogMenuRouter);
router.use('/api/about-us', aboutUsRouter);
router.use('/api/brands', brandsRouter);
router.use('/api/contacts', contactsRouter);
router.use('/api/news', newsRouter);
router.use('/api/main-grid', mainGridRouter);
router.use('/api/products', productRouter);

export { router };
