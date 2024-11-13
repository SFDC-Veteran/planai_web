import React from 'react';
import * as S from './style';
import { News, NewsClicked, InButton } from 'src/assets/images/common/sidebar';
import useSidebar from 'src/hooks/common/sidebar/useSIdebar';
import useScrapedNewsStore from 'src/store/Home/news.store';
import URL from 'src/assets/images/newspaper.svg';

const Sidebar = () => {
  const { item, setItem, isVisible, setIsVisible } = useSidebar();
  const scrapedNews = useScrapedNewsStore((state) => state.scrapedNews);

  return (
    <S.SidebarWrap isvisible={isVisible}>
      <S.SidebarItem iscliicked={item === '뉴스'} onClick={() => setItem('뉴스')}>
        <img src={item !== '뉴스' ? News : NewsClicked} alt="" />
        <span>뉴스</span>
      </S.SidebarItem>
      <S.SidebarItem iscliicked={item === '뉴스'} onClick={() => setItem('뉴스')}>
        <img src={News} alt="" />
        <span>뉴스 스크랩</span>
      </S.SidebarItem>
      <S.NewsScrap>
        {scrapedNews.map((news, idx) => (
          <div>
            <img src={news.urlToImage} />
            <span>{news.title.substring(0, 15) + '...'}</span>
          </div>
        ))}
      </S.NewsScrap>
      <S.SidebarItem iscliicked={item === '뉴스'} onClick={() => setItem('뉴스')}>
        <img src={URL} alt="" />
        <span>URL 저장</span>
      </S.SidebarItem>
      <S.NewsScrap></S.NewsScrap>
      <S.InButton src={InButton} onClick={() => setIsVisible((prev) => !prev)} />
    </S.SidebarWrap>
  );
};

export default Sidebar;
