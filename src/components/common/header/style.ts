import { PlanaiColorToken } from 'src/style/token/colorToken';
import styled from 'styled-components';
import HeaderBackground from 'src/assets/images/Header.svg';

export const HeaderWrap = styled.div`
  width: calc(100vw - 20px);
  height: 100px;
  min-height: 80px;

  background-image: url(${HeaderBackground});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding-right: 20px;
`;

export const ButtonWrap = styled.div`
  width: 10%;
  height: 60%;

  background-color: #f2f2f8;

  border: none;
  border-radius: 10px;

  display: flex;
  gap: 10px;

  align-items: center;
  justify-content: center;

  img {
    width: 45px;
    height: 45px;
  }

  span {
    color: ${PlanaiColorToken.purple50};
    font-family: Pretendard;
    font-size: 28px;
    font-weight: 500;
    letter-spacing: 0.9px;
  }

  cursor: pointer;
`;
