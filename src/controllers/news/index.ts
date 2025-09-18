import { Router } from 'express';
import { NewsService } from '@/services/news';
import { uploadImageMiddleware } from '@/middleware';

const newsRouter = Router();

const newsService = new NewsService();

newsRouter.post('/', (_, res, next) => {
  newsService
    .createNews()
    .then((news) => res.status(201).json(news))
    .catch(next);
});

newsRouter.post('/:id', uploadImageMiddleware('/news'), (req, res, next) => {
  newsService
    .addNewsItem(req.body, req.params.id)
    .then((news) => res.status(201).json(news))
    .catch(next);
});

newsRouter.get('/', (req, res, next) => {
  newsService
    .getNews()
    .then((news) => res.json(news))
    .catch(next);
});

export { newsRouter };
