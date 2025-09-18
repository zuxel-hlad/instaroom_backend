import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { prisma } from '@/prisma';
import { SERVER_PORT } from '@/constants';
export { prisma };
import { router } from '@/routes';
import path from 'path';
import cors from 'cors';
import { HttpError } from './services/http-error';

dotenv.config();

const app = express();

const main = async () => {
  app.use(cors());
  app.use('/uploads', express.static(path.resolve('uploads')));
  app.use(express.json({ limit: '100mb' }));
  app.use(express.urlencoded({ extended: true, limit: '100mb' }));
  app.use(router);

  app.all(/.*/, (req, res) => {
    res.status(404).json({ message: 'Not Found' });
  });

  app.use((err: unknown, req: Request, res: Response) => {
    if (err instanceof HttpError) {
      return res.status(err.statusCode).json({ message: err.message });
    }

    if (err instanceof Error) {
      console.error(err.stack);
      return res.status(500).json({ message: err.message || 'Something went wrong' });
    }

    res.status(500).json({ message: 'Unknown error' });
  });

  app.listen(SERVER_PORT, () => console.log(`Server is running on port ${SERVER_PORT}`));
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
