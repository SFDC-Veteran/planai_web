import React, { useEffect, useState } from "react";
import * as S from "./style";
import Header from "../common/header";
import Sidebar from "../common/sidebar";
import Img from "src/assets/images/nonepage.png";
import BottomBar from "../common/bottombar";
import UseWrite from "src/hooks/write/useWrite";
import UseBottomBar from "src/hooks/common/bottombar/useBottomBar";
import { PageData } from "src/types/write/page.type";
import Tutorial from "../tutorial";
import { chatStroe } from "src/store/write/text.store";
import { useGetChat } from "src/query/ai/ai.query";

const Write = () => {
  const { now } = UseBottomBar();
  const { storeSetDes, storeSetTitle } = UseWrite();
  const [pagedata, setPageData] = useState<PageData>({ id: 0, title: "", description: "", userId: "", images: [""] });
  const [button, setButton] = useState<boolean>(false);
  const chatId = chatStroe((state) => state.chatId);
  const { data } = useGetChat(chatId);

  return (
    <S.Wrapper>
      <S.BackGroundWrapper>
        <Header />

        <S.RowWrapper>
          <Sidebar />
          <button
            style={{
              position: "absolute",
              background: "#353866",
              width: 100,
              height: 50,
              borderRadius: 8,
              color: "#fff",
              border: "none",
              right: 100,
              top: 120,
            }}
            onClick={() => setButton(!button)}
          >
            튜토리얼 보기
          </button>
          <S.MainWrapper>
            <S.ContentWrapper>
              {now.length === 0 ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <img src={Img} style={{ width: 280, height: 216, marginBottom: 20 }} alt="" />
                  <span>새로운 기획서를 작성해보세요!</span>
                </div>
              ) : (
                <S.WirteWrapper>
                  <S.TitleInput
                    placeholder="새페이지"
                    name="title"
                    onChange={(e) => storeSetTitle(e.target.value)}
                    defaultValue={pagedata.title}
                  />
                  <S.DescriptionInput
                    placeholder="멋진 기획서를 작성해보세요"
                    name="description"
                    onChange={(e) => storeSetDes(e.target.value)}
                    defaultValue={pagedata.description}
                    value={pagedata.description}
                  />
                  {Array.isArray(data) &&
                    data?.map((item, idx) => {
                      const [speacker, message] = item;
                      return (
                        <div key={idx} style={{ margin: "10px 0" }}>
                          <strong>{speacker === "human" ? "User" : "Assistant"}:</strong>
                          <p>{message}</p>
                        </div>
                      );
                    })}
                </S.WirteWrapper>
              )}
            </S.ContentWrapper>
            {button && <Tutorial />}
          </S.MainWrapper>
        </S.RowWrapper>

        <BottomBar data={pagedata} setData={setPageData} />
      </S.BackGroundWrapper>
    </S.Wrapper>
  );
};

export default Write;
