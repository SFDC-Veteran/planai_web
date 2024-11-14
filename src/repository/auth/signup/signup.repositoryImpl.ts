import { Signup, VerifyEmail } from 'src/types/auth/auth.type';
import { SignupRepository } from './signup.repository';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

class SignupRepositoryImpl implements SignupRepository {
  public async postSignup(signupData: { email: string; password: string; name: string }): Promise<void> {
    axiosInstance.post('/auth/sign-up', signupData);
  }

  public async postVerifyCode(email: string): Promise<void> {
    await axiosInstance.post(`/auth/email?email=${email}`);
  }

  public async postVerifyEmail(verifyEmail: VerifyEmail): Promise<void> {
    const { email, code } = verifyEmail;
    await axiosInstance.post(`/auth/verify-email?email=${email}&code=${code}`);
  }
}

const signupRepositoryImpl = new SignupRepositoryImpl();
export default signupRepositoryImpl;
