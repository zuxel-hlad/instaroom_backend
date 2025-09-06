export interface INews {
  id: string;
  description: string;
  news: INewsItem[];
}

export interface INewsItem {
  image: string;
  title: string;
}
