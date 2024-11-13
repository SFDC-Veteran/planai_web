import styled from "styled-components";
import { PlanaiColorToken } from "src/style/token/colorToken";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const BackGroundWrapper = styled.div`
  width: 100%;
  height: calc(100%-60px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RowWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: row;
`;

export const ContentWrapper = styled.div`
  width: 1300px;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WirteWrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
`;
export const TitleInput = styled.input`
  font-size: 35px;
  font-weight: 400;
  outline: none;
  ::placeholder {
    color: ${PlanaiColorToken.netural90};
  }
  margin-bottom: 20px;
`;

export const DescriptionInput = styled.input`
  font-size: 25px;
  font-weight: 400;
  outline: none;
  ::placeholder {
    color: ${PlanaiColorToken.netural90};
  }
`;
