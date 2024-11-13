import { AxiosError } from 'axios';
import { useMutation, useQuery } from 'react-query';
import { QUERY_KEYS } from 'src/query/queryKey';
import newsRepositoryImpl from 'src/repository/Home/news/news.repositoryImpl';
import { NewsResponse } from 'src/types/Home/news/news.type';

export const useGetMainNewsQuery = () =>
  useQuery<NewsResponse, AxiosError>(QUERY_KEYS.news.main, () => newsRepositoryImpl.getMainNews(), {
    staleTime: 3600000,
    cacheTime: 3600000,
  });

export const useGetInterestNewsQuery = () =>
  useQuery<NewsResponse, AxiosError>(QUERY_KEYS.news.interest, () => newsRepositoryImpl.getInterestNews(), {
    staleTime: 3600000,
    cacheTime: 3600000,
  });

export const useGetRecommandNewsQuery = () =>
  useQuery<NewsResponse, AxiosError>(QUERY_KEYS.news.recommand, () => newsRepositoryImpl.getRecommandNews(), {
    staleTime: 3600000,
    cacheTime: 3600000,
  });

export const useGetSearchNewsMutation = () => {
  const mutation = useMutation((keyword: string) => newsRepositoryImpl.getSearchNews(keyword));
  return mutation;
};
