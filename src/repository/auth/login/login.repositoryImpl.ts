import axios from "axios";
import { LoginRepository } from "./login.repository";
import { Login, NewAccessTokenResponse, TokenResponse } from "src/types/auth/auth.type";
import CONFIG from "src/config/config.json";

const axiosInstance = axios.create({
  baseURL: CONFIG.server,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

class AuthRepositoryImpl implements LoginRepository {
  public async postLogin(loginParams: Login): Promise<TokenResponse> {
    const { data } = await axiosInstance.post("/auth/sign-in", loginParams);
    return data;
  }

  public async refreshAccessToken(refreshToken: { refreshToken: string }): Promise<NewAccessTokenResponse> {
    const { data } = await axios.post<NewAccessTokenResponse>(`${CONFIG.server}/auth/refresh`, refreshToken);
    return data;
  }
}

export default new AuthRepositoryImpl();
