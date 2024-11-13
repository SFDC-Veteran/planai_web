import * as S from "./style";
import Img from "src/assets/images/main comments.png";

import ListItem from "./components";
import img1 from "src/assets/images/item1.png";
import img2 from "src/assets/images/item2.png";
import img3 from "src/assets/images/item3.png";
import img4 from "src/assets/images/item4.png";
import Header from "../common/header";
import Sidebar from "../common/sidebar";
import Out from "src/assets/images/outButton.png";
import useSidebar from "src/hooks/common/sidebar/useSIdebar";
import BottomBar from "../common/bottombar";

const Home = () => {
  const { isVisible, setIsVisible } = useSidebar();

  const ListItemData = [
    {
      title: "📊 서비스 비교",
      img: `${img1}`,
      des: "유사 서비스와의 차별화 요소와 강점을 심층적으로 분석하여 비교합니다. \n이를 통해 독창적인 서비스 요소를 \n명확히 드러냅니다.",
    },
    {
      title: "📉 리스크 검토",
      img: `${img2}`,
      des: "개발 완료 후 예상 손익을 면밀히 검토하고, \n사용자가 직관적으로 이해할 수 있도록 \n시각화하여 제공합니다. \n이를 통해 사용자에게 직관적 이해와 \n효율적 의사결정을 지원합니다.",
    },
    {
      title: "💵 비지니스 모델 추천",
      img: `${img3}`,
      des: "작성한 기획서를 바탕으로 분석하여\n최적의 비즈니스 모델을 추천합니다. \n이를 통해 사용자는 자신의 비즈니스에 \n적합한 모델을 쉽게 파악하고, \n전략적 의사결정을 지원받을 수 있습니다.",
    },
    {
      title: "🎨 UI/UX 및 이미지 추천",
      img: `${img4}`,
      des: "사용자의 기획을 토대로 UI/UX 디자인,\n와이어프레임 및 이미지를 제안합니다. \n이를 통해 사용자는 직관적이고 사용자 \n중심의 인터페이스를 경험하며, \n효과적으로 시각화 할 수 있습니다.",
    },
  ];

  console.log(isVisible);

  return (
    <S.Wrapper>
      <S.BackGroundWrapper>
        <Header />
        <S.RowWrapper>
          {isVisible === false ? (
            <Sidebar />
          ) : (
            <img src={Out} alt="" style={{ width: 30, height: 30 }} onClick={() => setIsVisible((prev) => !prev)} />
          )}
          <S.MainWrapper>
            <img src={Img} alt="" style={{ width: 400, height: 230, marginTop: 30 }} />
            <div style={{ width: "auto", height: "auto", display: "flex", flexDirection: "column" }}>
              <S.CardList>
                {ListItemData.map((item, idx) => (
                  <ListItem key={idx} title={item.title} img={item.img} des={item.des} />
                ))}
              </S.CardList>
              <div style={{ marginBottom: 10, alignSelf: "end", marginTop: 30 }}>
                <span>{"기획서 작성하기 >"}</span>
              </div>
            </div>
            <BottomBar />
          </S.MainWrapper>
        </S.RowWrapper>
      </S.BackGroundWrapper>
    </S.Wrapper>
  );
};

export default Home;
