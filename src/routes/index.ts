import { Router } from 'express';
import { catalogMenuRouter, contactsRouter, workTimeRouter } from '@/controllers';

const router = Router();

router.use('/api/catalog-menu', catalogMenuRouter);
router.use('/api/contacts', contactsRouter);
router.use('/api/work-time', workTimeRouter);

export { router };
