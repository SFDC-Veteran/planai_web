import signupRepositoryImpl from 'src/repository/auth/signup/signup.repositoryImpl';
import { Signup, VerifyEmail } from 'src/types/auth/auth.type';
import { useMutation } from 'react-query';

export const usePostSignupMutation = () => {
  const mutation = useMutation((signupData: { email: string; password: string; name: string }) =>
    signupRepositoryImpl.postSignup(signupData)
  );
  return mutation;
};

export const usePostVerifyCodeMutation = () => {
  const mutation = useMutation((email: string) => signupRepositoryImpl.postVerifyCode(email));
  return mutation;
};

export const usePostVerifyEmailMutation = () => {
  const mutation = useMutation((verifyEmail: VerifyEmail) => signupRepositoryImpl.postVerifyEmail(verifyEmail));
  return mutation;
};
