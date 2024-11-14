
import * as S from "./style";
import Export from "src/assets/images/common/bottombar/export.png";
import Share from "src/assets/images/common/bottombar/share.png";
import Plus from "src/assets/images/common/bottombar/plus.png";
import UseBottomBar from "src/hooks/common/bottombar/useBottomBar";
import UseWrite from "src/hooks/write/useWrite";
import Save from "src/assets/images/common/bottombar/save.png";
import Select from "src/assets/images/common/bottombar/selectpage.png";
import Page from "src/assets/images/common/bottombar/page.png";
import planaiAxios from "src/libs/axios/customAxios";
import Chat from "src/assets/images/common/bottombar/chat.png";
import AI from "src/assets/images/common/bottombar/ai.png";
import Back from "src/assets/images/common/bottombar/back.png";
import { PageData } from "src/types/write/page.type";
import React, { SetStateAction, useState } from "react";
import bottomStore from "src/store/common/bottom.store";
import Ai from "./components/ai";
import User from "./components/user";
import UseAi from "src/hooks/ai/useAi";

interface Props {
  data: PageData;
  setData: React.Dispatch<SetStateAction<PageData>>;
}

const BottomBar = ({ data, setData }: Props) => {
  const { PostPage, now } = UseBottomBar();
  const { PatchPage, setOnClick, onclick } = UseWrite();
  const {
    AcademicButton,
    RedditButton,
    WebButton,
    WolframButton,
    WriteButton,
    YoutubeButton,
    setText,
    text,
    chatHistory,
  } = UseAi();
  const setPlanId = bottomStore((state) => state.setPlanId);
  const [selectedAi, setSelectedAi] = useState<string>("youtube");
  const [ai, setAi] = useState<boolean>(false);

  // 각 버튼 색상 상태 관리: 0은 기본 색, 1은 클릭된 색
  const [selectedButton, setSelectedButton] = useState<number>(0);

  const handleClick = () => {
    if (!text) return; // 텍스트가 비어 있으면 실행하지 않음

    // 선택된 AI 종류에 따라 다른 함수 호출
    switch (selectedAi) {
      case "youtube":
        YoutubeButton();
        break;
      case "write":
        WriteButton();
        break;
      case "wolfram":
        WolframButton();
        break;
      case "web":
        WebButton();
        break;
      case "reddit":
        RedditButton();
        break;
      case "academic":
        AcademicButton();
        break;
      default:
        YoutubeButton(); // 기본적으로 YouTube 요청
    }
  };

  const GetPage = async (id: number) => {
    await planaiAxios
      .get(`/plan/single/${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleAiButtonClick = (aiType: string, buttonIndex: number) => {
    setSelectedAi(aiType);
    setSelectedButton(buttonIndex); // 버튼 색상 상태 변경
  };

  return (
    <>
      {ai === false ? (
        <S.BarWrapper>
          <S.PlusButton onClick={PostPage}>
            <img src={Plus} style={{ width: 30, height: 30 }} alt="" />
          </S.PlusButton>
          {Array.isArray(now) &&
            now.map((item, idx) => (
              <S.PlanButton
                key={idx}
                onClick={() => {
                  setOnClick(item.id);
                  GetPage(item.id);
                  setPlanId(item.id);
                }}
              >
                {onclick === item.id ? (
                  <img src={Select} style={{ width: 50, height: 50 }} alt="" />
                ) : (
                  <img src={Page} style={{ width: 50, height: 50 }} alt="" />
                )}
              </S.PlanButton>
            ))}

          <S.BarMainWrapper>
            <S.IconButton onClick={PatchPage}>
              <img src={Save} style={{ width: 30, height: 30 }} alt="" />
            </S.IconButton>
            <S.IconButton>
              <img src={Export} style={{ width: 30, height: 30 }} alt="" />
            </S.IconButton>
            <S.IconButton>
              <img src={Share} style={{ width: 30, height: 30 }} alt="" />
            </S.IconButton>
            <S.IconButton style={{ background: "#353866" }} onClick={() => setAi(true)}>
              <img src={AI} style={{ width: 30, height: 30 }} alt="" />
            </S.IconButton>
          </S.BarMainWrapper>
        </S.BarWrapper>
      ) : (
        <S.AiBarWrapper>
          <S.AiMainWrapper>
            <S.BackButtonWrapper>
              <img src={Back} style={{ width: 15, height: 25 }} alt="" onClick={() => setAi(false)} />
            </S.BackButtonWrapper>
            <S.AiChatWrapper>
              {chatHistory.map((item, idx) => (
                <div key={idx}>
                  <User text={item.user} />
                  {item.ai && (
                    <Ai
                      youtube={item.ai}
                      academic={item.ai}
                      reddit={item.ai}
                      web={item.ai}
                      wolfram={item.ai}
                      write={item.ai}
                    />
                  )}
                </div>
              ))}
            </S.AiChatWrapper>
            <S.AiTextModeWrapper>
              <S.AiTextModeMainWrapper
                style={{ paddingRight: 10, borderRight: "1px solid #fff" }}
                onClick={() => handleAiButtonClick("youtube", 1)} // 버튼 클릭 시 색상 변경
                clicked={selectedButton === 1}
              >
                유튜브
              </S.AiTextModeMainWrapper>
              <S.AiTextModeMainWrapper
                style={{ paddingLeft: 10, paddingRight: 10, borderRight: "1px solid #fff" }}
                onClick={() => handleAiButtonClick("write", 2)} // 버튼 클릭 시 색상 변경
                clicked={selectedButton === 2}
              >
                쓰기 보조
              </S.AiTextModeMainWrapper>
              <S.AiTextModeMainWrapper
                style={{ paddingLeft: 10, paddingRight: 10, borderRight: "1px solid #fff" }}
                onClick={() => handleAiButtonClick("wolfram", 3)} // 버튼 클릭 시 색상 변경
                clicked={selectedButton === 3}
              >
                wolfram Alpha
              </S.AiTextModeMainWrapper>
              <S.AiTextModeMainWrapper
                style={{ paddingLeft: 10, paddingRight: 10, borderRight: "1px solid #fff" }}
                onClick={() => handleAiButtonClick("web", 4)} // 버튼 클릭 시 색상 변경
                clicked={selectedButton === 4}
              >
                전체
              </S.AiTextModeMainWrapper>
              <S.AiTextModeMainWrapper
                style={{ paddingLeft: 10, paddingRight: 10, borderRight: "1px solid #fff" }}
                onClick={() => handleAiButtonClick("reddit", 5)} // 버튼 클릭 시 색상 변경
                clicked={selectedButton === 5}
              >
                레딧
              </S.AiTextModeMainWrapper>
              <S.AiTextModeMainWrapper
                style={{ paddingLeft: 10 }}
                onClick={() => handleAiButtonClick("academic", 6)} // 버튼 클릭 시 색상 변경
                clicked={selectedButton === 6}
              >
                학술검색
              </S.AiTextModeMainWrapper>
            </S.AiTextModeWrapper>
            <S.AiTextWrapper>
              <S.AiTextInput placeholder="명령어를 입력해주세요" onChange={(e) => setText(e.target.value)} />
              <img src={Chat} style={{ height: 30, width: 30 }} alt="" onClick={handleClick} />
            </S.AiTextWrapper>
          </S.AiMainWrapper>
        </S.AiBarWrapper>
      )}
    </>
  );
};

export default BottomBar;
