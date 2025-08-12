import { Router } from 'express';
import { ContactsService } from '@/services/contacts';

const contactsRouter = Router();

const contactsService = new ContactsService();

contactsRouter.post('/', (req, res, next) => {
  contactsService
    .createContacts(req.body)
    .then((contacts) => res.status(201).json(contacts))
    .catch(next);
});

contactsRouter.get('/', (_, res, next) => {
  contactsService
    .getContacts()
    .then((contacts) => res.json(contacts))
    .catch(next);
});

export { contactsRouter };
