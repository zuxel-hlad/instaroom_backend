import { News } from '@/generated/prisma';
import { prisma } from '@/prisma';
import { INewsItem } from './types';
import { IMAGE_URL } from '@/constants';

export class NewsService {
  private prisma = prisma;

  createNews(): Promise<News | null> {
    return this.prisma.news.create({
      data: {
        description:
          'Ласкаво просимо до нашої секції "Новини"! Тут ви знайдете найсвіжішу інформацію про новинки асортименту, акційні пропозиції, корисні поради з будівництва та ремонту, а також актуальні тренди у світі будматеріалів та інструментів. Ми регулярно оновлюємо цю сторінку, щоб ви завжди були в курсі вигідних можливостей для ваших проєктів. Слідкуйте за нашими оновленнями та створюйте з комфортом!',
        news: {
          create: [],
        },
      },
      include: {
        news: true,
      },
    });
  }

  addNewsItem({ title, image }: INewsItem, newsId: string): Promise<News> {
    return this.prisma.news.update({
      where: { id: newsId },
      data: { news: { create: { title, image: `${IMAGE_URL}${image}` } } },
      include: { news: true },
    });
  }

  getNews(): Promise<News | null> {
    return this.prisma.news.findFirst({ include: { news: true } });
  }
}
