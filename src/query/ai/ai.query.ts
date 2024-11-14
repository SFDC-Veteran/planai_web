import { useMutation, useQuery } from 'react-query';
import { aiGetRepositoryImpl, aiSearchRepositoryImpl } from 'src/repository/ai/ai.repositoroyImpl';
import { Ai } from 'src/types/ai/ai.type';
import { QUERY_KEYS } from '../queryKey';

export const useGetYoutueMutation = () => {
  const mutation = useMutation((params: Ai) => aiSearchRepositoryImpl.getYoutube(params));
  return mutation;
};

export const useGetWriteMutation = () => {
  const mutation = useMutation((params: Ai) => aiSearchRepositoryImpl.getWrite(params));
  return mutation;
};

export const useGetWolframMutation = () => {
  const mutation = useMutation((params: Ai) => aiSearchRepositoryImpl.getWolfram(params));
  return mutation;
};

export const useGetWebMutation = () => {
  const mutation = useMutation((params: Ai) => aiSearchRepositoryImpl.getWeb(params));
  return mutation;
};

export const useGetRedditMutation = () => {
  const mutation = useMutation((params: Ai) => aiSearchRepositoryImpl.getReddit(params));
  return mutation;
};

export const useGetAcademicMutation = () => {
  const mutation = useMutation((params: Ai) => aiSearchRepositoryImpl.getAcademic(params));
  return mutation;
};

export const useGetChat = (chatId: string) =>
  useQuery(QUERY_KEYS.ai.chat, () => aiGetRepositoryImpl.getChat(chatId), {
    staleTime: 3600000,
    cacheTime: 3600000,
  });
