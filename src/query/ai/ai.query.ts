import { useMutation } from 'react-query';
import { aiSearchRepositoryImpl } from 'src/repository/ai/ai.repositoroyImpl';
import { Ai } from 'src/types/ai/ai.type';

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
