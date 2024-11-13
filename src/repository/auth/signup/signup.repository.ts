import { Signup, VerifyEmail } from 'src/types/auth/auth.type';

export interface SignupRepository {
  postSignup(signupData: { email: string; password: string; name: string }): Promise<void>;
  postVerifyCode(email: string): Promise<void>;
  postVerifyEmail(verifyEmail: VerifyEmail): Promise<void>;
}
