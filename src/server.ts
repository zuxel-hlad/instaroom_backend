import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { prisma } from '@/prisma';
import { SERVER_PORT } from '@/constants';
export { prisma };
import { router } from '@/routes';
import path from 'path';
import cors from 'cors';

dotenv.config();

const app = express();

const main = async () => {
  app.use(cors());
  app.use('/uploads', express.static(path.resolve('uploads')));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(router);

  app.all(/.*/, (req, res) => {
    res.status(404).json({ message: 'Not Found' });
  });

  app.use((err: Error, req: Request, res: Response) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong' });
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
