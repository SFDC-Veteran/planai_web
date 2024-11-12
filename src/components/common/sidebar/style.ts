import { PlanaiColorToken } from 'src/style/token/colorToken';
import styled from 'styled-components';

export const SidebarWrap = styled.div<{ isvisible: boolean }>`
  width: calc(210px - 80px);
  height: calc(100vh - 100px - 374px);

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: flex-end;

  padding: 74px 57px 300px 32px;
  background: #f2f2f8;

  position: relative;

  display: ${({ isvisible }) => (isvisible === true ? 'block' : 'none')};
`;

export const SidebarItemWrap = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  flex-direction: column;
  justify-content: space-between; // 변경: 공간을 위쪽에 균등하게 분배
`;

export const SidebarItem = styled.div<{ iscliicked: boolean }>`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
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

export const SidebarWriteItem = styled.div`
  width: 100%;
  height: 60%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    width: 100%;
    height: 15%; // 필요에 따라 조정 가능

    background: ${PlanaiColorToken.common100};

    color: ${PlanaiColorToken.purple80};
    text-align: center;
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 400;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 10px;
  }

  animation: uponAnimation 0.5s ease;

  @keyframes uponAnimation {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
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
