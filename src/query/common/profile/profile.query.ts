import { useMutation, useQuery } from 'react-query';
import { QUERY_KEYS } from 'src/query/queryKey';
import profileRepositoryImpl from 'src/repository/common/profile/profile.repositoryImpl';

export const useGetProfile = () =>
  useQuery(QUERY_KEYS.user.getProfile, () => profileRepositoryImpl.getProfile(), {
    staleTime: 3600000,
    cacheTime: 3600000,
  });

export const useQuitMutation = () => {
  const mutation = useMutation(() => profileRepositoryImpl.quit());
  return mutation;
};
