import multer from 'multer';
import path from 'path';
import { Request } from 'express';

export const upload = multer({
  dest: path.resolve('uploads'),
});

export const getImagePath = (req: Request) => (req.file ? `/uploads/${req.file.filename}` : '');
