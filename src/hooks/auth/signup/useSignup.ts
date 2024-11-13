import { signupStore } from 'src/store/auth/auth.store';
import { Signup } from 'src/types/auth/auth.type';
import React, { useCallback, useEffect, useState } from 'react';
import {
  usePostSignupMutation,
  usePostVerifyCodeMutation,
  usePostVerifyEmailMutation,
} from 'src/query/auth/signup/signup.query';
import { planaiToast } from 'src/libs/toast/swal';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { generateRandomNickname } from 'src/utils/auth/generateName';

const useSignup = () => {
  const navigate = useNavigate();
  const [signupInfo, setSignupInfo] = useState<Signup>({
    email: '',
    password: '',
    authCode: '',
    passwordCheck: '',
  });

  const [section, setSection] = useState<string>('first');
  const storedEmail = signupStore((state) => state.email);
  const storedAuthcode = signupStore((state) => state.authCode);
  const storedSetEmail = signupStore((state) => state.setEmail);
  const storedSetAuthcode = signupStore((state) => state.setAuthCode);

  const [timeRemaining, setTimeRemainng] = useState<number>(0);
  const [timeActice, setTimeActive] = useState<boolean>();

  const handleSignupInfo = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setSignupInfo((prev) => ({ ...prev, [name]: value }));
      if (name === 'email') {
        storedSetEmail(value);
      } else if (name === 'authCode') {
        storedSetAuthcode(value);
      }
    },
    [setSignupInfo]
  );

  const postSignupMutation = usePostSignupMutation();
  const onSignup = () => {
    const { password } = signupInfo;
    postSignupMutation.mutate(
      {
        email: storedEmail,
        password,
        name: generateRandomNickname(),
      },
      {
        onSuccess: () => {
          planaiToast('success', '회원가입 성공!');
          navigate('/login');
        },
        onError: (error) => {
          planaiToast('error', (error as AxiosError).message);
        },
      }
    );
  };

  const startTimer = () => {
    setTimeRemainng(300);
    setTimeActive(true);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (timeActice && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemainng((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setTimeActive(false);
    }

    return () => clearInterval(interval);
  }, [timeActice, timeRemaining]);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}: ${String(seconds).padStart(2, '0')}`;

  const postVerifyCodeMutation = usePostVerifyCodeMutation();
  const onSendVerify = () => {
    postVerifyCodeMutation.mutate(signupInfo.email, {
      onSuccess: async () => {
        planaiToast('success', '인증번호 발송 성공!');
        await startTimer();
      },
      onError: () => {
        planaiToast('error', '이메일을 다시 확인해주세요');
      },
    });
  };

  const postVerifyEmailMutation = usePostVerifyEmailMutation();
  const onVerifyEmail = () => {
    postVerifyEmailMutation.mutate(
      {
        email: signupInfo.email,
        code: signupInfo.authCode,
      },
      {
        onSuccess: () => {
          navigate('/signup/password');
          setSection('second');
        },
        onError: () => {
          planaiToast('error', '인증번호를 다시 확인해주세요');
        },
      }
    );
  };

  return {
    signupInfo,
    formattedTime,
    timeActice,
    section,
    handleSignupInfo,
    setSection,

    onSignup,
    onSendVerify,
    onVerifyEmail,
  };
};

export default useSignup;
