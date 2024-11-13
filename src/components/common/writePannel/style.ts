import { PlanaiColorToken } from 'src/style/token/colorToken';
import styled from 'styled-components';

export const WritePannelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  width: 40vw;
  height: 7vh;
  top: 80%;
`;

export const Pannel = styled.div<{ isclicked: boolean }>`
  width: 15%;
  height: 70%;

  border-radius: 30px;

  background: ${PlanaiColorToken.yellowOrange95};
  border: ${({ isclicked }) => (isclicked ? `1px solid ${PlanaiColorToken.yellowOrange50}` : 'none')};

  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: #797db9;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
