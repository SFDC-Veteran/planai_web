import { PlanaiColorToken } from 'src/style/token/colorToken';
import styled from 'styled-components';

export const ProfileWrap = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  width: 20%;
  height: 45%;

  background-color: #f2f2f8;

  border: none;
  border-radius: 14px;

  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.16);

  top: calc(80px + 2%);
  left: 79%;
`;

export const ProfileImg = styled.img`
  width: 40%;
  height: 30%;

  border: none;
  border-radius: 50%;
`;

export const Title = styled.h1`
  color: ${PlanaiColorToken.common0};
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 500;
  line-height: normal;
`;

export const OptionWrap = styled.div`
  width: 80%;
  height: 40%;

  display: flex;
  flex-direction: column;
  gap: 5px;

  span {
    color: #353866;
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
  }

  cursor: pointer;
`;

export const EditOption = styled.div`
  width: calc(100% - 15px);
  height: 30%;

  padding-left: 15px;

  background-color: ${PlanaiColorToken.yellowOrange99};
  border: none;
  border-radius: 14px 14px 0px 0px;

  display: flex;
  align-items: center;

  gap: 15px;

  &:active {
    scale: 0.97;
  }
  transition: scale 0.4s;
`;

export const LogoutOption = styled.div`
  width: calc(100% - 15px);
  height: 30%;

  padding-left: 15px;

  background-color: ${PlanaiColorToken.yellowOrange99};

  display: flex;
  align-items: center;
  gap: 15px;
  &:active {
    scale: 0.97;
  }
  transition: scale 0.4s;
`;

export const QuitOption = styled.div`
  width: calc(100% - 15px);
  height: 30%;

  padding-left: 15px;

  background-color: ${PlanaiColorToken.yellowOrange99};

  display: flex;
  align-items: center;
  gap: 15px;

  border: none;
  border-radius: 0px 0px 14px 14px;
  &:active {
    scale: 0.97;
  }
  transition: scale 0.4s;
`;
