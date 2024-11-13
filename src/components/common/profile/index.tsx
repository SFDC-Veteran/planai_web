import React from 'react';
import * as S from './style';
import ProfileImg from 'src/assets/images/ProfileImg.png';
import Edit from 'src/assets/images/Edit.svg';
import Logout from 'src/assets/images/logout.svg';
import Quit from 'src/assets/images/Quit.svg';
import { useGetProfile, useQuitMutation } from 'src/query/common/profile/profile.query';
import token from 'src/libs/token/tokens';
import { useNavigate } from 'react-router-dom';
import { planaiToast } from 'src/libs/toast/swal';
import { AxiosError } from 'axios';

const Profile = () => {
  const { data: profile } = useGetProfile();
  const quitMutation = useQuitMutation();
  return (
    <S.ProfileWrap>
      <S.ProfileImg src={ProfileImg} />
      <S.Title>안녕하세요, {profile?.data.name}님</S.Title>
      <S.OptionWrap>
        <S.EditOption>
          <img src={Edit} alt="" />
          <span>프로필 수정</span>
        </S.EditOption>
        <S.LogoutOption>
          <img src={Logout} alt="" />
          <span
            onClick={() => {
              //   navigate('/login');
              token.clearToken();
            }}
          >
            로그아웃
          </span>
        </S.LogoutOption>
        <S.QuitOption>
          <img src={Quit} alt="" />
          <span
            onClick={() =>
              quitMutation.mutate(undefined, {
                onSuccess: () => {
                  planaiToast('sucess', '회원 탈퇴 성공');
                },
                onError: (error) => {
                  planaiToast('error', (error as AxiosError).message);
                },
              })
            }
          >
            회원탈퇴
          </span>
        </S.QuitOption>
      </S.OptionWrap>
    </S.ProfileWrap>
  );
};

export default Profile;
