import React, { useState } from 'react';
import * as S from './style';
import LoginIcon from 'src/assets/images/LoginIcon.svg';
import { useGetProfile } from 'src/query/common/profile/profile.query';
import Profile from '../profile';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { data: profile } = useGetProfile();
  const [isClick, setIsClick] = useState(false);
  const navigate = useNavigate();
  return (
    <S.HeaderWrap>
      <S.ButtonWrap
        onClick={() => {
          profile?.data ? setIsClick((prev) => !prev) : navigate('/login');
        }}
      >
        <img src={LoginIcon} alt="로그인 아이콘" />
        <span>{profile?.data.name ? profile?.data.name : '로그인'}</span>
      </S.ButtonWrap>
      {isClick && <Profile />}
    </S.HeaderWrap>
  );
};

export default Header;
