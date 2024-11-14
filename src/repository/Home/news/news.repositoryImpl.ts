import axios from 'axios';
import { NewsRepository } from './news.repository';
import { NewsResponse } from 'src/types/Home/news/news.type';

const newsInstance = axios.create({
  baseURL: 'https://newsapi.org/v2',
  withCredentials: true,
  headers: {
    'X-Api-Key': '957d76cb121042aa8c0919fe1e55abb7',
  },
});

class NewsRepositoryImpl implements NewsRepository {
  public async getMainNews(): Promise<NewsResponse> {
    const { data } = await newsInstance.get('/top-headlines?source=google-news&country=us');
    return data;
  }

  public async getInterestNews(): Promise<NewsResponse> {
    const { data } = await newsInstance.get('/everything?domains=techcrunch.com');
    return data;
  }

  public async getSearchNews(keyword: string): Promise<NewsResponse> {
    const { data } = await newsInstance.get(`/everything?q=${keyword}`);
    return data;
  }

  public async getRecommandNews(): Promise<NewsResponse> {
    const { data } = await newsInstance.get('/top-headlines?category=technology');
    return data;
  }
}

const newsRepositoryImpl = new NewsRepositoryImpl();
export default newsRepositoryImpl;
