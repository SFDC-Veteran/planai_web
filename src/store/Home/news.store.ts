// src/store/useScrapedNewsStore.ts
import { create } from 'zustand';

interface NewsArticle {
  title: string;
  urlToImage: string;
  publishedAt: string;
  url: string;
}

interface ScrapedNewsState {
  scrapedNews: NewsArticle[];
  addScrapedNews: (news: NewsArticle) => void;
  clearScrapedNews: () => void; // 필요시 초기화 함수 추가
}

const useScrapedNewsStore = create<ScrapedNewsState>((set) => ({
  scrapedNews: [],
  addScrapedNews: (news: any) =>
    set((state: any) => {
      if (state.scrapedNews.length < 3) {
        return { scrapedNews: [...state.scrapedNews, news] };
      }
      return state; // 3개 이상은 추가하지 않음
    }),
  clearScrapedNews: () => set({ scrapedNews: [] }), // 초기화 함수
}));

export default useScrapedNewsStore;
