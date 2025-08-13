import { Router } from 'express';
import { catalogMenuRouter, contactsRouter, workTimeRouter, newsRouter } from '@/controllers';

const router = Router();

router.use('/api/catalog-menu', catalogMenuRouter);
router.use('/api/contacts', contactsRouter);
router.use('/api/work-time', workTimeRouter);
router.use('/api/news', newsRouter);

export { router };
