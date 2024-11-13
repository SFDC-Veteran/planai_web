import styled from 'styled-components';
import { PlanaiColorToken } from 'src/style/token/colorToken';

export const BarWrapper = styled.div`
  display: inline-flex;
  position: absolute;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.16);
  border-radius: 14px;
  background-color: #fff;
  padding: 10px 10px 10px 10px;
  bottom: 20px;

  left: 35%;
`;

export const BarMainWrapper = styled.div`
  width: 250px;
  height: 60px;
  display: flex;

  align-items: center;
  border-left: 1px solid ${PlanaiColorToken.netural95};
  justify-content: space-around;
  padding-left: 20px;
`;

export const IconButton = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${PlanaiColorToken.purple90};
`;

export const PlusWrapper = styled.div`
  width: 80px;
  height: 60px;
  display: flex;
  align-self: center;
  justify-content: center;
`;

export const PlusButton = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #e75ba6;
  margin-right: 30px;
  margin-left: 10px;
`;

export const PlanButton = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  border-radius: 10px;
  margin-right: 30px;
`;
