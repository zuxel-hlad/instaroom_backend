import { Router } from 'express';
import { catalogMenuRouter, contactsRouter } from '@/controllers';

const router = Router();

router.use('/api/catalog-menu', catalogMenuRouter);
router.use('/api/contacts', contactsRouter);

export { router };
