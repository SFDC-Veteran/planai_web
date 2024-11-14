import styled from "styled-components";

export const IconWrapper = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  display: inline-flex;
  align-items: center;

  bottom: 200px;
  right: 150px;
`;

export const IconTutorial = styled.div`
  font-size: 14px;
  background-color: #fdf2f8;
  max-width: 200px;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  white-space: pre-wrap; /* 줄넘김 설정 */
  overflow-wrap: break-word; /* 단어가 길 때 줄넘김 */
  word-break: break-word; /* 단어가 너무 길 때 줄넘김 */
`;
