import { Router } from 'express';
import { ContactsService } from '@/services/contacts';

const contactsRouter = Router();

const contactsService = new ContactsService();

contactsRouter.get('/', async (_, res, next) => {
  contactsService
    .getContacts()
    .then((contacts) => res.json(contacts))
    .catch((error) => next(error));
});

contactsRouter.post('/', async (req, res, next) => {
  contactsService
    .createContacts(req.body)
    .then((contacts) => res.json(contacts))
    .catch((error) => next(error));
});

export { contactsRouter };
