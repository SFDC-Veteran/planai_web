import axios from 'axios';
import { NewsRepository } from './news.repository';
import CONFIG from 'src/config/config.json';
import { NewsResponse, SavedUrlResponse } from 'src/types/Home/news/news.type';
import planaiAxios from 'src/libs/axios/customAxios';

const newsInstance = axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    options: { origin: "https://newsapi.org/v2'" },
    'X-Api-Key': '957d76cb121042aa8c0919fe1e55abb7',
  },
});

class NewsRepositoryImpl implements NewsRepository {
  public async getMainNews(): Promise<NewsResponse> {
    const { data } = await newsInstance.get('/top-headlines?source=google-news&country=us');
    return data;
  }

  public async getInterestNews(): Promise<NewsResponse> {
    const { data } = await newsInstance.get('/everything?domains=techcrunch.com,thenextweb.com');
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

  public async postSaveUrl(planId: number, url: string, title: string): Promise<void> {
    await planaiAxios.post('/url', { planId, url, title });
  }

  public async getSavedUrl(planId: number): Promise<SavedUrlResponse> {
    const { data } = await planaiAxios.get(`/url/${planId}`);
    return data;
  }

  public async deleteSavedUrl(id: number): Promise<void> {
    await planaiAxios.delete(`/url/${id}`);
  }
}

const newsRepositoryImpl = new NewsRepositoryImpl();
export default newsRepositoryImpl;
