import { PlanaiColorToken } from 'src/style/token/colorToken';
import styled from 'styled-components';

export const NewsWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.div`
  width: 100%;
  height: calc(100% - 100px);

  display: flex;

  align-items: center;
`;

export const NewsContainer = styled.div`
  width: calc(80% - 130px);
  height: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 auto;
`;

export const SearchWrap = styled.div`
  width: calc(80% - 40px);
  height: 8%;
  padding: 0px 20px;

  background: ${PlanaiColorToken.opacity5};

  border: none;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: 80%;
    height: 90%;

    border: none;
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 500;
    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #a1a1a1;
    }

    background: transparent;
  }
`;

export const NewsBox = styled.div`
  width: 100%;
  height: 60%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MainNewsWrap = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const MainNews = styled.div`
  width: calc(100% - 50px);
  height: calc(89% - 66px);

  display: flex;
  flex-direction: column;

  padding: 33px 25px;

  border-radius: 14px;
  border: none;
  background: ${PlanaiColorToken.opacity5};
`;

export const NewsWrapper = styled.div`
  width: calc(100% - 20px);
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  padding-bottom: 20px;

  overflow-y: auto;
`;

export const News = styled.div`
  width: 100%;
  height: 30%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border: none;
  border-bottom: 1px solid ${PlanaiColorToken.netural90};

  cursor: pointer;

  img {
    width: 30%;
    height: 90%;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 70%;

    gap: 10px;

    justify-content: flex-start;

    span {
      color: ${PlanaiColorToken.common0};
      font-family: Pretendard;
      font-size: 18px;
      font-weight: 500;
      line-height: 20px; /* 133.333% */
    }
  }
`;

export const InterestNewsWrap = styled.div`
  width: calc(30% - 60px);
  height: calc(100% - 50px);

  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 25px 30px;
`;

export const InterestNews = styled.div`
  width: 100%;
  height: 90%;

  border-radius: 14px;

  display: flex;
  flex-direction: column;

  gap: 16px;

  background: ${PlanaiColorToken.opacity5};

  div {
    width: calc(100% - 10px);
    border: none;
    border-bottom: 1px solid ${PlanaiColorToken.netural90};

    padding: 10px 0px 20px 10px;

    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 10px;

    cursor: pointer;

    span {
      color: ${PlanaiColorToken.common0};
      font-family: Pretendard;
      font-size: 20px;
      font-weight: 500;

      width: 80%;
    }
  }

  overflow-y: auto;
`;

export const Title = styled.h1`
  color: ${PlanaiColorToken.common0};
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 500;
`;

export const RecommanedWrap = styled.div`
  width: 100%;
  height: 20%;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Recommaned = styled.div`
  width: 100%;
  height: 90%;

  background: ${PlanaiColorToken.opacity5};

  border: none;
  border-radius: 14px;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: auto;

  div {
    width: 45%;

    display: flex;
    flex-direction: column;
    align-items: center;

    cursor: pointer;

    div {
      width: 90%;
      height: 50%;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      border-bottom: 1px solid ${PlanaiColorToken.netural90};
      justify-content: center;

      span {
        color: ${PlanaiColorToken.common0};
        font-family: Pretendard;
        font-size: 18px;
        font-weight: 500;
        line-height: 22px; /* 146.667% */
        letter-spacing: -0.15px;
      }
    }
  }
`;
