import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { prisma } from '@/prisma';
import { DEFAULT_PORT } from '@/constants';
export { prisma };
import { router } from '@/routes';

dotenv.config();

const port = process.env.PORT || DEFAULT_PORT;

const app = express();

const main = async () => {
  app.use(express.json());
  app.use(router);

  app.all(/.*/, (req, res) => {
    res.status(404).json({ message: 'Not Found' });
  });

  app.use((err: Error, req: Request, res: Response) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong' });
  });

  app.listen(port, () => console.log(`Server is running on port ${port}`));
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
