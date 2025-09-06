import { IMAGE_URL } from '@/constants';
import { IItemWithImages } from '@/types';
import multer from 'multer';
import path from 'path';

export const upload = multer({
  dest: path.resolve('uploads'),
});

export const transformImagePath = <T extends IItemWithImages>(items: T[]) => {
  return items.map((item) => {
    if (item.images) {
      return {
        ...item,
        image: IMAGE_URL + item.image,
        images: item.images.map((itemImage: string) => IMAGE_URL + itemImage),
      };
    }

    return {
      ...item,
      image: IMAGE_URL + item.image,
    };
  });
};
