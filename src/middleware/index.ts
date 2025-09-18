import { Request, Response, NextFunction } from 'express';
import multer from 'multer';
import { imagekit } from '@/image-kit';

const storage = multer.memoryStorage();
const upload = multer({ storage });

export const uploadImageMiddleware = (folder: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const uploader = upload.fields([
      { name: 'image', maxCount: 1 },
      { name: 'images', maxCount: 10 },
    ]);

    uploader(req, res, async (err: unknown) => {
      if (err) return next(err);

      try {
        if (req.files && 'image' in req.files && req.files['image']?.[0]) {
          const file = req.files['image'][0];
          const uploadResult = await imagekit.upload({
            file: file.buffer,
            fileName: `${Date.now()}-${file.originalname}`,
            folder,
          });
          req.body.image = uploadResult.url;
        }

        if (req.files && 'images' in req.files) {
          const files = req.files['images'] as Express.Multer.File[];
          const uploadResults = await Promise.all(
            files.map((file) =>
              imagekit.upload({
                file: file.buffer,
                fileName: `${Date.now()}-${file.originalname}`,
                folder,
              }),
            ),
          );
          req.body.images = uploadResults.map((r) => r.url);
        }

        next();
      } catch (uploadErr) {
        next(uploadErr);
      }
    });
  };
};
