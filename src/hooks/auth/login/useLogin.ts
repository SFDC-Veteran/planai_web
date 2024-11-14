import { usePostLoginMutation } from 'src/query/auth/login/login.query';
import { Login } from 'src/types/auth/auth.type';
import React, { useCallback, useState } from 'react';
import token from 'src/libs/token/tokens';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from 'src/constants/token/token.constants';
import { planaiToast } from 'src/libs/toast/swal';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const [loginInfo, setLoginInfo] = useState<Login>({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleLoginInfo = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setLoginInfo((prev) => ({ ...prev, [name]: value }));
    },
    [setLoginInfo]
  );

  const postLoginMutation = usePostLoginMutation();
  const onSubmit = () => {
    const { email, password } = loginInfo;
    postLoginMutation.mutate(
      {
        email: email,
        password: password,
      },
      {
        onSuccess: (response) => {
          token.setToken(ACCESS_TOKEN_KEY, response.data.accessToken);
          token.setToken(REFRESH_TOKEN_KEY, response.data.refreshToken);
          navigate('/news');
        },
        onError: (error) => {
          planaiToast('error', (error as AxiosError).message);
        },
      }
    );
  };

  return {
    loginInfo,
    handleLoginInfo,
    onSubmit,
  };
};

export default useLogin;
