import { Router } from 'express';
import { catalogMenuRouter, contactsRouter, newsRouter } from '@/controllers';

const router = Router();

router.use('/api/catalog-menu', catalogMenuRouter);
router.use('/api/contacts', contactsRouter);
router.use('/api/news', newsRouter);

export { router };
