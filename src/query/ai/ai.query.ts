import { useQuery } from 'react-query';
import { Ai } from 'src/types/ai/ai.type';
import { QUERY_KEYS } from '../queryKey';
import { aiSearchRepositoryImpl } from 'src/repository/ai/ai.repositoroyImpl';

export const GetYoutube = (params: Ai) =>
  useQuery(QUERY_KEYS.ai.youtube, () => aiSearchRepositoryImpl.getYoutube(params), {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });

export const GetWrite = (params: Ai) =>
  useQuery(QUERY_KEYS.ai.write, () => aiSearchRepositoryImpl.getWrite(params), {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });

export const GetWolfram = (params: Ai) =>
  useQuery(QUERY_KEYS.ai.wolfram, () => aiSearchRepositoryImpl.getWolfram(params), {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });

export const GetWeb = (params: Ai) =>
  useQuery(QUERY_KEYS.ai.web, () => aiSearchRepositoryImpl.getWeb(params), {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });

export const GetReddit = (params: Ai) =>
  useQuery(QUERY_KEYS.ai.reddit, () => aiSearchRepositoryImpl.getReddit(params), {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });

export const GetAcademic = (params: Ai) =>
  useQuery(QUERY_KEYS.ai.academic, () => aiSearchRepositoryImpl.getAcademic(params), {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });
