import { Router } from 'express';
import { NewsService } from '@/services/news';
import { upload } from '@/utils';

const newsRouter = Router();

const newsService = new NewsService();

newsRouter.post('/', (_, res, next) => {
  newsService
    .createNews()
    .then((news) => res.status(201).json(news))
    .catch(next);
});

newsRouter.post('/:id', upload.single('image'), (req, res, next) => {
  const { title } = req.body;
  const imagePath = req.file ? `/uploads/${req.file.filename}` : '';
  newsService
    .addNewsItem({ title, image: imagePath }, req.params.id)
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
