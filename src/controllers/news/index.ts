import { Router } from 'express';
import { NewsService } from '@/services/news';
import { upload } from '@/utils';
import { News, NewsItem } from '@/generated/prisma';
import { IMAGE_URL } from '@/constants';

const newsRouter = Router();

const newsService = new NewsService();

newsRouter.post('/', (_, res, next) => {
  newsService
    .createNews()
    .then((news) => res.status(201).json(news))
    .catch(next);
});

newsRouter.post('/:id', upload.single('image'), (req, res, next) => {
  const { title, createdAt } = req.body;
  const imagePath = req.file ? `/uploads/${req.file.filename}` : '';
  newsService
    .addNewsItem({ title, createdAt, image: imagePath }, req.params.id)
    .then((news) => res.status(201).json(news))
    .catch(next);
});

newsRouter.get('/', (_, res, next) => {
  newsService
    .getNews()
    .then((news) => {
      const typedNews = news as News & { news: NewsItem[] };

      const transformedNews = {
        ...typedNews,
        news: typedNews.news.map((item) => ({
          ...item,
          image: item.image ? IMAGE_URL + item.image : null,
        })),
      };

      res.status(200).json(transformedNews);
    })
    .catch(next);
});

export { newsRouter };
