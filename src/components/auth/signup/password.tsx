import React from 'react';
import * as S from '../login/style';
import LoginBackground from 'src/assets/images/LoginBackground.png';
import Human from 'src/assets/images/Human.png';
import Lock from 'src/assets/images/Lock.png';
import Check from 'src/assets/images/check.svg';
import { useNavigate } from 'react-router-dom';
import useSignup from 'src/hooks/auth/signup/useSignup';

const Password = () => {
  const { signupInfo, handleSignupInfo, onSignup } = useSignup();
  const navigate = useNavigate()

  return (
    <S.LoginWrap>
      <S.Main>
        <img src={LoginBackground} alt="" />
        <S.Login>
          <h1>SIGN UP</h1>
          <S.InputWrap>
            <S.Input>
              <label>비밀번호</label>
              <div>
                <img src={Lock} alt="" />
                <input
                  type="password"
                  name="password"
                  value={signupInfo.password}
                  onChange={handleSignupInfo}
                  placeholder="비밀번호를 입력해주세요"
                />
              </div>
            </S.Input>
            <S.Input>
              <label>비밀번호 확인</label>
              <div>
                <img src={Lock} alt="" style={{ height: '30px' }} />
                <input
                  type="password"
                  name="passwordCheck"
                  value={signupInfo.passwordCheck}
                  onChange={handleSignupInfo}
                  placeholder="비밀번호를 한번 더 입력해주세요"
                />
              </div>
            </S.Input>
          </S.InputWrap>
          <S.UtilWrap>
            <button disabled={!signupInfo.password || !signupInfo.passwordCheck} onClick={onSignup}>
              회원가입
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

export default Password;
