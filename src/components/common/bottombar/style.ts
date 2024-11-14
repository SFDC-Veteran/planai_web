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
  left: 25%;
`;

export const BarMainWrapper = styled.div`
  width: 350px;
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

export const AiBarWrapper = styled.div`
  display: inline-flex;
  position: absolute;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.16);
  border-radius: 14px;
  background-color: #fff;
  padding: 10px 10px 10px 10px;
  bottom: 20px;
  background-color: #353866;
`;

export const AiMainWrapper = styled.div`
  width: 715px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BackButtonWrapper = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
`;

export const AiChatWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const AiChatSpaceWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
`;

export const AiTextWrapper = styled.div`
  width: calc(100%-60px);
  height: 60px;
  border-radius: 14px;
  padding-left: 30px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const AiTextInput = styled.input`
  width: 85%;
  height: 60px;
  font-size: 20px;
  border: none;
  outline: none;
`;

export const AiTextModeWrapper = styled.div`
  position: absolute;
  display: inline-flex;
  width: 400px;
  height: 40px;
  padding: 0px 0px 0px 20px;
  align-items: center;
  border-radius: 4px;
  bottom: 80px;
  right: 20px;
  background-color: #e75ba6;
`;

export const AiTextModeMainWrapper = styled.div<{ clicked: boolean }>`
  width: auto;
  height: auto;
  font-size: 14px;
  color: ${(props) => (props.clicked ? '#000' : '#fff')}; /* 클릭된 버튼은 흰색 글씨, 아니면 검은색 */
`;

export const AiChatTextWrapper = styled.div`
  width: auto;
  height: auto;
  padding: 10px;
  display: flex;
  background-color: #fff;
  border-radius: 5px;
  flex-direction: column;
`;

export const AiChatTextMainWrapper = styled.div`
  font-size: 14px;

  max-width: 200px;

  white-space: pre-wrap; /* 줄넘김 설정 */
  overflow-wrap: break-word; /* 단어가 길 때 줄넘김 */
  word-break: break-word; /* 단어가 너무 길 때 줄넘김 */
`;

export const AiPeachWrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
`;
