import { NewsResponse } from 'src/types/Home/news/news.type';

export interface NewsRepository {
  getMainNews(): Promise<NewsResponse>;
  getInterestNews(): Promise<NewsResponse>;
  getSearchNews(keyword: string): Promise<NewsResponse>;
  getRecommandNews(): Promise<NewsResponse>;
}
