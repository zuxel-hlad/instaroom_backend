import { Router } from 'express';
import { NewsService } from '@/services/news';
import { uploadImageMiddleware } from '@/middleware';
import { transformImagePath } from '@/utils';
import { INewsItem } from '@/services/news/types';

const newsRouter = Router();

const newsService = new NewsService();

newsRouter.post('/', (_, res, next) => {
  newsService
    .createNews()
    .then((news) => res.status(201).json(news))
    .catch(next);
});

newsRouter.post('/:id', uploadImageMiddleware, (req, res, next) => {
  newsService
    .addNewsItem(req.body, req.params.id)
    .then((news) => res.status(201).json(news))
    .catch(next);
});

newsRouter.get('/', (req, res, next) => {
  newsService
    .getNews()
    .then((news) => {
      if (news && 'news' in news) {
        return res.json({
          ...news,
          news: transformImagePath<INewsItem>(news.news as INewsItem[]),
        });
      }
    })
    .catch(next);
});

export { newsRouter };
