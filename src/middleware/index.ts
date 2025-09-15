// import { Request, Response, NextFunction } from 'express';
// import multer from 'multer';
// import path from 'path';

// const upload = multer({ dest: path.resolve('uploads') });

// export const uploadImageMiddleware = (req: Request, res: Response, next: NextFunction) => {
//   upload.single('image')(req, res, (err: unknown) => {
//     if (err) {
//       return next(err);
//     }

//     if (req.file) {
//       req.body.image = `/uploads/${req.file.filename}`;
//     }

//     next();
//   });
// };

import { Request, Response, NextFunction } from 'express';
import multer from 'multer';
import path from 'path';

const upload = multer({ dest: path.resolve('uploads') });

export const uploadImageMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // ожидаем два возможных поля: одно "image" и массив "images"
  const uploader = upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'images', maxCount: 10 }, // можно изменить на нужное количество
  ]);

  uploader(req, res, (err: unknown) => {
    if (err) return next(err);

    // одно изображение
    if (req.files && 'image' in req.files && req.files['image']?.[0]) {
      req.body.image = `/uploads/${req.files['image'][0].filename}`;
    }

    // несколько изображений
    if (req.files && 'images' in req.files) {
      req.body.images = req.files['images'].map((file) => `/uploads/${file.filename}`);
    }

    next();
  });
};
