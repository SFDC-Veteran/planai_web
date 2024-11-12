import React, { useState } from "react";
import * as S from "./style";
import Header from "../common/header";
import Sidebar from "../common/sidebar";
import Img from "src/assets/images/nonepage.png";
import BottomBar from "../common/bottombar";

interface Text {
  title: string;
  description: string;
}

const Write = () => {
  const [text, setText] = useState<Text>({ title: "1", description: "" });

  const OnchangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setText((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <S.Wrapper>
      <S.BackGroundWrapper>
        <Header />
        <S.RowWrapper>
          <Sidebar />
          <S.MainWrapper>
            <S.ContentWrapper>
              {text.title.length === 0 ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <img src={Img} style={{ width: 280, height: 216, marginBottom: 20 }} alt="" />
                  <span>새로운 기획서를 작성해보세요!</span>
                </div>
              ) : (
                <S.WirteWrapper>
                  <S.TitleInput placeholder="새페이지" name="title" />
                  <S.DescriptionInput placeholder="멋진 기획서를 작성해보세요" name="description" />
                </S.WirteWrapper>
              )}
            </S.ContentWrapper>
          </S.MainWrapper>
        </S.RowWrapper>
        <BottomBar />
      </S.BackGroundWrapper>
    </S.Wrapper>
  );
};

export default Write;
