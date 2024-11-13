import React, { useEffect, useState } from 'react';
import * as S from './style';
import Header from '../common/header';
import Sidebar from '../common/sidebar';
import Img from 'src/assets/images/nonepage.png';
import BottomBar from '../common/bottombar';
import UseWrite from 'src/hooks/write/useWrite';
import UseBottomBar from 'src/hooks/common/bottombar/useBottomBar';
import { PageData } from 'src/types/write/page.type';

const Write = () => {
  const { now } = UseBottomBar();
  const { storeSetDes, storeSetTitle, pagedata, setPageData } = UseWrite();
  return (
    <S.Wrapper>
      <S.BackGroundWrapper>
        <Header />
        <S.RowWrapper>
          <Sidebar />
          <S.MainWrapper>
            <S.ContentWrapper>
              {now.length === 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
                  />
                </S.WirteWrapper>
              )}
            </S.ContentWrapper>
          </S.MainWrapper>
        </S.RowWrapper>
        <BottomBar data={pagedata} setData={setPageData} />
      </S.BackGroundWrapper>
    </S.Wrapper>
  );
};

export default Write;
