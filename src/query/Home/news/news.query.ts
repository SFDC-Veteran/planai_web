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

export const usePostSaveUrlMutation = () => {
  const mutation = useMutation(({ planId, url, title }: { planId: number; url: string; title: string }) =>
    newsRepositoryImpl.postSaveUrl(planId, url, title)
  );
  return mutation;
};

export const useGetSavedUrlQuery = (planId: number) => {
  return useQuery(QUERY_KEYS.news.savedUrl(planId), () => newsRepositoryImpl.getSavedUrl(planId), {
    staleTime: 3600000,
    cacheTime: 3600000,
  });
};

export const useDeleteSavedUrlMutation = () => {
  const mutation = useMutation((id: number) => newsRepositoryImpl.deleteSavedUrl(id));
  return mutation;
};