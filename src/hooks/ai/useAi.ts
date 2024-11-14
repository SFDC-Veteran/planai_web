// import planaiAxios from "src/libs/axios/customAxios";
// import { useState, useEffect } from "react";
// import { AiRespons } from "src/types/ai/ai.type";
// import bottomStore from "src/store/common/bottom.store";

// const UseAi = () => {
//   const [youtube, setYoutube] = useState<AiRespons>();
//   const [write, setWrite] = useState<AiRespons>();
//   const [wolfram, setWolfram] = useState<AiRespons>();
//   const [web, setWeb] = useState<AiRespons>();
//   const [reddit, setReddit] = useState<AiRespons>();
//   const [academic, setAcademic] = useState<AiRespons>();
//   const [chatHistory, setChatHistory] = useState<{ user: string; ai: AiRespons | null }[]>([]);
//   const PlanId = bottomStore((state) => state.planId);
//   const [text, setText] = useState<string>("");

//   const addToChatHistory = (userMessage: string, aiResponse: AiRespons | null) => {
//     setChatHistory((prev) => [...prev, { user: userMessage, ai: aiResponse }]);
//   };

//   const YoutubeButton = async () => {
//     if (!text) return;
//     const userMessage = text;
//     addToChatHistory(userMessage, null);

//     try {
//       const res = await planaiAxios.post("/ai/youtube", { query: text }, { params: { planId: PlanId } });
//       const aiResponse = res.data.data;
//       setYoutube(aiResponse);
//       addToChatHistory(userMessage, aiResponse);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const WriteButton = async () => {
//     if (!text) return;
//     const userMessage = text;
//     addToChatHistory(userMessage, null);

//     try {
//       const res = await planaiAxios.post("/ai/write", { query: text }, { params: { planId: PlanId } });
//       const aiResponse = res.data.data;
//       setWrite(aiResponse);
//       addToChatHistory(userMessage, aiResponse);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const WolframButton = async () => {
//     if (!text) return;
//     const userMessage = text;
//     addToChatHistory(userMessage, null);

//     try {
//       const res = await planaiAxios.post("/ai/wolfram", { query: text }, { params: { planId: PlanId } });
//       const aiResponse = res.data.data;
//       setWolfram(aiResponse);
//       addToChatHistory(userMessage, aiResponse);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const WebButton = async () => {
//     if (!text) return;
//     const userMessage = text;
//     addToChatHistory(userMessage, null);

//     try {
//       const res = await planaiAxios.post("/ai/web", { query: text }, { params: { planId: PlanId } });
//       const aiResponse = res.data.data;
//       setWeb(aiResponse);
//       addToChatHistory(userMessage, aiResponse);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const RedditButton = async () => {
//     if (!text) return;
//     const userMessage = text;
//     addToChatHistory(userMessage, null);

//     try {
//       const res = await planaiAxios.post("/ai/reddit", { query: text }, { params: { planId: PlanId } });
//       const aiResponse = res.data.data;
//       setReddit(aiResponse);
//       addToChatHistory(userMessage, aiResponse);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const AcademicButton = async () => {
//     if (!text) return;
//     const userMessage = text;
//     addToChatHistory(userMessage, null);

//     try {
//       const res = await planaiAxios.post("/ai/academic", { query: text }, { params: { planId: PlanId } });
//       const aiResponse = res.data.data;
//       setAcademic(aiResponse);
//       addToChatHistory(userMessage, aiResponse);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") {
//       YoutubeButton(); // 기본적으로 YouTube 버튼을 실행하도록 설정 (다른 버튼으로 교체 가능)
//     }
//   };

//   return {
//     AcademicButton,
//     YoutubeButton,
//     WriteButton,
//     RedditButton,
//     WebButton,
//     WolframButton,
//     youtube,
//     academic,
//     write,
//     reddit,
//     web,
//     wolfram,
//     chatHistory,
//     setText,
//     text,
//     handleEnterKey, // 이걸 반환해서 엔터키 핸들러로 사용
//   };
// };

// export default UseAi;

import planaiAxios from "src/libs/axios/customAxios";
import { useState } from "react";
import { AiRespons } from "src/types/ai/ai.type";
import bottomStore from "src/store/common/bottom.store";

// UseAi 훅
const UseAi = () => {
  const [youtube, setYoutube] = useState<AiRespons>();
  const [write, setWrite] = useState<AiRespons>();
  const [wolfram, setWolfram] = useState<AiRespons>();
  const [web, setWeb] = useState<AiRespons>();
  const [reddit, setReddit] = useState<AiRespons>();
  const [academic, setAcademic] = useState<AiRespons>();
  const [chatHistory, setChatHistory] = useState<{ user: string; ai: AiRespons | null }[]>([]);
  const PlanId = bottomStore((state) => state.planId);
  const [text, setText] = useState<string>("");

  // 채팅 기록 추가
  const addToChatHistory = (userMessage: string, aiResponse: AiRespons | null) => {
    setChatHistory((prev) => [...prev, { user: userMessage, ai: aiResponse }]);
  };

  // 각 버튼 클릭 시 호출되는 함수
  const YoutubeButton = async () => {
    if (!text) return;
    const userMessage = text;
    try {
      const res = await planaiAxios.post("/ai/youtube", { query: text }, { params: { planId: PlanId } });
      const aiResponse = res.data.data;
      setYoutube(aiResponse);
      addToChatHistory(userMessage, aiResponse);
    } catch (error) {
      console.error(error);
    }
  };

  const WriteButton = async () => {
    if (!text) return;
    const userMessage = text;
    try {
      const res = await planaiAxios.post("/ai/write", { query: text }, { params: { planId: PlanId } });
      const aiResponse = res.data.data;
      setWrite(aiResponse);
      addToChatHistory(userMessage, aiResponse);
    } catch (error) {
      console.error(error);
    }
  };

  const WolframButton = async () => {
    if (!text) return;
    const userMessage = text;
    try {
      const res = await planaiAxios.post("/ai/wolfram", { query: text }, { params: { planId: PlanId } });
      const aiResponse = res.data.data;
      setWolfram(aiResponse);
      addToChatHistory(userMessage, aiResponse);
    } catch (error) {
      console.error(error);
    }
  };

  const WebButton = async () => {
    if (!text) return;
    const userMessage = text;
    try {
      const res = await planaiAxios.post("/ai/web", { query: text }, { params: { planId: PlanId } });
      const aiResponse = res.data.data;
      setWeb(aiResponse);
      addToChatHistory(userMessage, aiResponse);
    } catch (error) {
      console.error(error);
    }
  };

  const RedditButton = async () => {
    if (!text) return;
    const userMessage = text;
    try {
      const res = await planaiAxios.post("/ai/reddit", { query: text }, { params: { planId: PlanId } });
      const aiResponse = res.data.data;
      setReddit(aiResponse);
      addToChatHistory(userMessage, aiResponse);
    } catch (error) {
      console.error(error);
    }
  };

  const AcademicButton = async () => {
    if (!text) return;
    const userMessage = text;
    try {
      const res = await planaiAxios.post("/ai/academic", { query: text }, { params: { planId: PlanId } });
      const aiResponse = res.data.data;
      setAcademic(aiResponse);
      addToChatHistory(userMessage, aiResponse);
    } catch (error) {
      console.error(error);
    }
  };


  // 텍스트 입력 후 엔터키 처리
  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      YoutubeButton(); // 기본적으로 YouTube 버튼을 실행하도록 설정
    }
  };

  return {
    YoutubeButton,
    WriteButton,
    WolframButton,
    WebButton,
    RedditButton,
    AcademicButton,
    youtube,
    write,
    wolfram,
    web,
    reddit,
    academic,
    chatHistory,
    setText,
    text,
    handleEnterKey,
  };
};

export default UseAi;
