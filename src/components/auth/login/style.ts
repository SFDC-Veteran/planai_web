import { PlanaiColorToken } from 'src/style/token/colorToken';
import styled from 'styled-components';

export const LoginWrap = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: ${PlanaiColorToken.opacity5};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.div`
  width: 70%;
  height: 80%;

  background-color: ${PlanaiColorToken.common100};

  border: none;
  border-radius: 10px;
  box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.16);

  display: flex;

  img {
    width: 40%;
    height: 100%;
  }
`;

export const Login = styled.div`
  width: 60%;
  height: 100%;

  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
  align-items: center;

  h1 {
    color: ${PlanaiColorToken.yellowOrange50};
    font-family: Pretendard;
    font-size: 36px;
    font-weight: 900;
    letter-spacing: -0.15px;
  }
`;

export const InputWrap = styled.div`
  width: 80%;
  height: 30%;

  display: flex;
  flex-direction: column;
  gap: 26px;
  align-items: flex-start;
`;

export const Input = styled.div`
  width: 100%;
  height: 45%;

  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: flex-start;

  label {
    color: #a1a1a1;
    font-family: Pretendard;
    font-size: 24px;
    font-weight: 500;
    letter-spacing: -0.15px;

    position: relative;
  }

  div {
    width: 100%;
    height: 30%;

    position: relative;

    border-bottom: 1px solid #000;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;

    padding: 0px 0px 10px 10px;

    span {
      width: 50px;
      height: fit-content;
      position: absolute;

      left: 63%;
    }

    img {
      width: 24px;
      height: 24px;
    }

    input {
      width: 70%;
      height: 90%;

      border: none;

      color: ${PlanaiColorToken.common0};
      font-family: Pretendard;
      font-size: 18px;
      font-weight: 400;
      letter-spacing: -0.15px;

      &:focus {
        outline: none;
      }

      &::placeholder {
        color: #a1a1a1;
      }
    }

    button {
      width: 30%;
      height: 100%;
      padding: 25px 0px 25px 0px;

      background-color: ${PlanaiColorToken.purple50};

      display: flex;
      align-items: center;
      justify-content: center;

      color: #fff;
      font-family: Pretendard;
      font-size: 20px;
      font-weight: 500;
      letter-spacing: -0.15px;

      border: none;
      border-radius: 10px;

      cursor: pointer;
    }
  }
`;

export const UtilWrap = styled.div`
  width: 80%;
  height: 15%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  justify-content: space-between;

  button {
    width: 100%;
    height: 60%;

    border: none;
    border-radius: 16px;

    background-color: ${PlanaiColorToken.purple50};
    color: ${PlanaiColorToken.common100};
    font-family: Pretendard;
    font-size: 28px;
    font-weight: 500;
    letter-spacing: -0.15px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    &:disabled {
      background-color: ${PlanaiColorToken.netural99};
      color: ${PlanaiColorToken.netural70};
    }
  }

  div {
    display: flex;
    gap: 9px;

    span {
      font-family: Pretendard;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: -0.15px;
    }
  }
`;
