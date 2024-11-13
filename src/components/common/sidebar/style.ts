import { PlanaiColorToken } from 'src/style/token/colorToken';
import styled from 'styled-components';

export const SidebarWrap = styled.div<{ isvisible: boolean }>`
  width: 210px;
  height: calc(100vh - 100px);

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-evenly;

  background: #f2f2f8;

  position: relative;

  display: ${({ isvisible }) => (isvisible === true ? 'flex' : 'none')};
`;

export const SidebarItemWrap = styled.div`
  width: 100%;
  height: 30%;

  display: flex;
  flex-direction: column;
  gap: 40px; // 변경: 공간을 위쪽에 균등하게 분배
`;

export const SidebarItem = styled.div<{ iscliicked: boolean }>`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  margin-left: 40px;
  gap: 11px;

  cursor: pointer;

  span {
    color: ${({ iscliicked }) => (!iscliicked ? PlanaiColorToken.purple50 : PlanaiColorToken.yellowOrange50)};
    font-family: Pretendard;
    font-size: 28px;
    font-weight: 600;
    letter-spacing: 3.45px;
  }
`;

export const NewsScrap = styled.div`
  width: 95%;
  height: 40%;

  background: #fbfbfc;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    width: 100%;
    height: 30%;

    display: flex;
    gap: 10px;

    align-items: center;
    justify-content: flex-start;

    img {
      width: 50%;
      height: 90%;
    }

    span {
      font-family: Pretendard;
      font-size: 16px;
      font-weight: 600;

      white-space: pre-line;
    }

    &:hover {
      background: ${PlanaiColorToken.yellowOrange95};
    }

    cursor: pointer;
  }
`;

export const InButton = styled.img`
  position: absolute;

  width: 30px;
  height: 30px;

  top: 2%;
  left: 80%;

  cursor: pointer;
`;
