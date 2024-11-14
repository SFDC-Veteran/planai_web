export interface Login {
  email: string;
  password: string;
}

export interface Signup {
  email: string;
  password: string;
  authCode: string;
  passwordCheck: string;
}

export interface TokenResponse {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface NewAccessTokenResponse {
  accessToken: string;
}

export interface VerifyEmail {
  email: string;
  code: string;
}