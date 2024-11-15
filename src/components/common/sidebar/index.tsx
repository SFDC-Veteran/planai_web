import React from 'react';
import * as S from './style';
import { News, NewsClicked, InButton, AI, AIClicked } from 'src/assets/images/common/sidebar';
import useSidebar from 'src/hooks/common/sidebar/useSIdebar';
import useScrapedNewsStore from 'src/store/Home/news.store';
import URL from 'src/assets/images/newspaper.svg';
import { useDeleteSavedUrlMutation, useGetSavedUrlQuery } from 'src/query/Home/news/news.query';
import bottomStore from 'src/store/common/bottom.store';
import { useQueryClient } from 'react-query';
import { QUERY_KEYS } from 'src/query/queryKey';

const Sidebar = () => {
  const { item, setItem, isVisible, setIsVisible, HandleCategoryClick } = useSidebar();
  const scrapedNews = useScrapedNewsStore((state) => state.scrapedNews);
  const planId = bottomStore((state) => state.planId);
  const { data: savedUrl } = useGetSavedUrlQuery(planId);
  const deleteSavedUrl = useDeleteSavedUrlMutation();
  const queryClient = useQueryClient();

  return (
    <S.SidebarWrap isvisible={isVisible}>
      <S.SidebarItem iscliicked={item === '뉴스'} onClick={() => HandleCategoryClick('뉴스')}>
        <img src={item === '뉴스' ? NewsClicked : News} alt="" />
        <span>뉴스</span>
      </S.SidebarItem>
      <S.SidebarItem iscliicked={false}>
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
      <S.SidebarItem iscliicked={false}>
        <img src={URL} alt="" />
        <span>URL 저장</span>
      </S.SidebarItem>
      <S.NewsScrap>
        {savedUrl?.data?.map((url, idx) => (
          <div>
            <a href={url.url} target="_blank">
              <span>{url.title}</span>
            </a>
            <button
              style={{ width: '30%', fontSize: '20px', background: '#F9D2E7', borderRadius: 14, cursor: 'pointer' }}
              onClick={() =>
                deleteSavedUrl.mutate(url.id, {
                  onSuccess: () => {
                    queryClient.invalidateQueries(QUERY_KEYS.news.savedUrl(planId));
                  },
                })
              }
            >
              삭제
            </button>
          </div>
        ))}
      </S.NewsScrap>
      <S.SidebarItem iscliicked={item === '작성'} onClick={() => HandleCategoryClick('작성')}>
        <img src={item === '작성' ? AIClicked : AI} alt="" />
        <span>작성</span>
      </S.SidebarItem>
      <S.InButton src={InButton} onClick={() => setIsVisible((prev) => !prev)} />
    </S.SidebarWrap>
  );
};

export default Sidebar;
