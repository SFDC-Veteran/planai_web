import React, { useEffect, useState } from "react";
import * as S from "./style";
import Header from "../common/header";
import Sidebar from "../common/sidebar";
import Img from "src/assets/images/nonepage.png";
import BottomBar from "../common/bottombar";
import UseWrite from "src/hooks/write/useWrite";
import UseBottomBar from "src/hooks/common/bottombar/useBottomBar";

const Write = () => {
  const { onclick, now, message } = UseBottomBar();
  const { pagedata, patch, storeSetDes, storeSetTitle, storeTitle } = UseWrite({ pageId: onclick });
  console.log("message", message);
  console.log("pagedata", pagedata);
  console.log("patch", patch);
  console.log("title", storeTitle);

  return (
    <S.Wrapper>
      <S.BackGroundWrapper>
        <Header />
        <S.RowWrapper>
          <Sidebar />
          <S.MainWrapper>
            <S.ContentWrapper>
              {now.length === 0 ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <img src={Img} style={{ width: 280, height: 216, marginBottom: 20 }} alt="" />
                  <span>새로운 기획서를 작성해보세요!</span>
                </div>
              ) : (
                <S.WirteWrapper>
                  <S.TitleInput placeholder="새페이지" name="title" onChange={(e) => storeSetTitle(e.target.value)} />
                  <S.DescriptionInput
                    placeholder="멋진 기획서를 작성해보세요"
                    name="description"
                    onChange={(e) => storeSetDes(e.target.value)}
                  />
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
