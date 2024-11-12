import React, { useState } from "react";
import * as S from "./style";
import Header from "../common/header";
import Sidebar from "../common/sidebar";
import Img from "src/assets/images/nonepage.png";

const Write = () => {
  const [text, setText] = useState<string>("1");

  return (
    <S.Wrapper>
      <S.BackGroundWrapper>
        <Header />
        <S.RowWrapper>
          <Sidebar />
          <S.MainWrapper>
            <S.ContentWrapper>
              {text.length === 0 ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <img src={Img} style={{ width: 280, height: 280, marginBottom: 20 }} alt="" />
                  <span>새로운 기획서를 작성해보세요!</span>
                </div>
              ) : (
                <S.WirteWrapper>
                  <S.TitleInput placeholder="새페이지" />
                  <S.DescriptionInput placeholder="멋진 기획서를 작성해보세요" />
                </S.WirteWrapper>
              )}
            </S.ContentWrapper>
          </S.MainWrapper>
        </S.RowWrapper>
      </S.BackGroundWrapper>
    </S.Wrapper>
  );
};

export default Write;
