import { NewsResponse, SavedUrlResponse } from 'src/types/Home/news/news.type';

export interface NewsRepository {
  getMainNews(): Promise<NewsResponse>;
  getInterestNews(): Promise<NewsResponse>;
  getSearchNews(keyword: string): Promise<NewsResponse>;
  getRecommandNews(): Promise<NewsResponse>;

  postSaveUrl(planId: number, url: string, title: string): Promise<void>;
  getSavedUrl(planId: number): Promise<SavedUrlResponse>;
  deleteSavedUrl(id: number): Promise<void>;
}