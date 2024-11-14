export interface NewsResponse {
  articles: NewsType[];
}

export interface NewsType {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: undefined;
}


export interface SavedUrl {
  id: number;
  planId: number;
  title: string;
  url: string;
}

export interface SavedUrlResponse {
  data: SavedUrl[];
}