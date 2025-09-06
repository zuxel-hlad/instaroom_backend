import { Request, Response, NextFunction } from 'express';
import multer from 'multer';
import path from 'path';

const upload = multer({ dest: path.resolve('uploads') });

export const uploadImageMiddleware = (req: Request, res: Response, next: NextFunction) => {
  upload.single('image')(req, res, (err: unknown) => {
    if (err) {
      return next(err);
    }

    if (req.file) {
      req.body.image = `/uploads/${req.file.filename}`;
    }

    next();
  });
};
