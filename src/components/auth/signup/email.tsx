import React from 'react';
import * as S from '../login/style';
import LoginBackground from 'src/assets/images/LoginBackground.png';
import Human from 'src/assets/images/Human.png';
import Lock from 'src/assets/images/Lock.png';
import Check from 'src/assets/images/check.svg';
import { useNavigate } from 'react-router-dom';
import useSignup from 'src/hooks/auth/signup/useSignup';

const Email = () => {
  const { signupInfo, timeActice, handleSignupInfo, onSendVerify, formattedTime, onVerifyEmail } = useSignup();
  const navigate = useNavigate();
  return (
    <S.LoginWrap>
      <S.Main>
        <img src={LoginBackground} alt="" />
        <S.Login>
          <h1>SIGN UP</h1>
          <S.InputWrap>
            <S.Input>
              <label>이메일</label>
              <div>
                <img src={Human} alt="" />
                <input
                  type="email"
                  name="email"
                  value={signupInfo.email}
                  onChange={handleSignupInfo}
                  placeholder="이메일을 입력해주세요"
                />
                {timeActice && <span>{formattedTime}</span>}
                <button onClick={onSendVerify}>인증번호 전송</button>
              </div>
            </S.Input>
            <S.Input>
              <label>인증번호</label>
              <div>
                <img src={Lock} alt="" style={{ height: '30px' }} />
                <input
                  type="text"
                  name="authCode"
                  value={signupInfo.authCode}
                  onChange={handleSignupInfo}
                  placeholder="발송된 인증번호를 입력해주세요"
                />
              </div>
            </S.Input>
          </S.InputWrap>
          <S.UtilWrap>
            <button onClick={onVerifyEmail} disabled={!signupInfo.email || !signupInfo.authCode}>
              다음으로
            </button>
            <div>
              <span style={{ color: '#c1c1c1' }}>가입된 계정이 있으신가요?</span>
              <span style={{ color: '#E75BA6', cursor: 'pointer' }} onClick={() => navigate('/login')}>
                로그인
              </span>
            </div>
          </S.UtilWrap>
        </S.Login>
      </S.Main>
    </S.LoginWrap>
  );
};

export default Email;
