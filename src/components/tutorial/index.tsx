import * as S from "./style";
import Img from "src/assets/images/tutorial.png";
import { useState } from "react";

const Tutorial = () => {
  const ment = [
    {
      text: "뉴스 페이지에 들어가서 아이디어에 도움 될만한 뉴스를 서칭해요!",
    },
    {
      text: "마음에 드는 뉴스를 스크랩 해서 저장해요!",
    },
    {
      text: "ai 와 대화해서 원하는 정보를 얻어 기획서를 완성시켜요!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // 다음 텍스트로 넘어가는 함수
  const handleNextText = () => {
    if (currentIndex < ment.length - 1) {
      setCurrentIndex(currentIndex + 1); // 다음 텍스트로
    } else {
      setCurrentIndex(0); // 마지막 텍스트일 경우 처음으로 돌아가기
    }
  };
  return (
    <S.IconWrapper>
      <S.IconTutorial>{ment[currentIndex].text}</S.IconTutorial>
      <img
        src={Img}
        style={{ marginLeft: 10, width: 50, height: 50, background: "#353866", borderRadius: 100 }}
        onClick={handleNextText}
        alt=""
      />
    </S.IconWrapper>
  );
};

export default Tutorial;
