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
import { PageData } from "src/types/write/page.type";
import React, { SetStateAction, useState } from "react";

interface Props {
  data: PageData;
  setData: React.Dispatch<SetStateAction<PageData>>;
}

const BottomBar = ({ data, setData }: Props) => {
  const { PostPage, now } = UseBottomBar();
  const { PatchPage, setOnClick, onclick } = UseWrite();

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

  console.log("bottomNow", now);

  return (
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
      </S.BarMainWrapper>
    </S.BarWrapper>
  );
};

export default BottomBar;
