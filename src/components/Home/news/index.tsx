import React from 'react';
import Sidebar from 'src/components/common/sidebar';
import Header from 'src/components/common/header';
import * as S from './style';
import Search from 'src/assets/images/search.svg';
import useNews from 'src/hooks/Home/news/useNews';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import {
  useGetInterestNewsQuery,
  useGetMainNewsQuery,
  useGetRecommandNewsQuery,
  useGetSavedUrlQuery,
  usePostSaveUrlMutation,
} from 'src/query/Home/news/news.query';
import useScrapedNewsStore from 'src/store/Home/news.store';
import BottomBar from 'src/components/common/bottombar';
import bottomStore from 'src/store/common/bottom.store';

const News: React.FC = () => {
  dayjs.locale('ko');
  dayjs.extend(relativeTime);
  const { keyword, handlekKeyword, getSearchNews } = useNews();
  const { data: mainNews } = useGetMainNewsQuery();
  const { data: interestNews } = useGetInterestNewsQuery();
  const { data: recommandNews } = useGetRecommandNewsQuery();
  const addScrapedNews = useScrapedNewsStore((state) => state.addScrapedNews);
  const planId = bottomStore((state) => state.planId);

  const postSaveUrl = usePostSaveUrlMutation();

  return (
    <S.NewsWrap>
      <Header />
      <S.Main>
        <Sidebar />
        <S.NewsContainer>
          <S.SearchWrap>
            <input
              type="text"
              placeholder="기획 의도에 맞는 뉴스를 찾아보세요!"
              value={keyword}
              onChange={handlekKeyword}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  getSearchNews(keyword);
                }
              }}
            />
            <img src={Search} alt="" onClick={() => getSearchNews(keyword)} />
          </S.SearchWrap>
          <S.NewsBox>
            <S.MainNewsWrap>
              <S.Title>주요</S.Title>
              <S.MainNews>
                <S.NewsWrapper>
                  {mainNews?.articles.map((mainNews, idx) => (
                    <S.News
                      key={idx} // key 추가
                      onClick={() => {
                        addScrapedNews(mainNews);
                        const title = prompt('기사 제목을 입력해주세요');
                        postSaveUrl.mutate({ planId, url: mainNews.url, title: title! });
                      }} // Zustand 사용
                    >
                      <img src={mainNews.urlToImage} alt="" />
                      <div>
                        <span>{mainNews.title}</span>
                        <span style={{ color: '#a1a1a1', fontSize: '16px' }}>
                          {dayjs(mainNews.publishedAt).fromNow()}
                        </span>
                      </div>
                    </S.News>
                  ))}
                </S.NewsWrapper>
              </S.MainNews>
            </S.MainNewsWrap>
            <S.InterestNewsWrap>
              <S.Title>관심 항목</S.Title>
              <S.InterestNews>
                {interestNews?.articles.map((interest, idx) => (
                  <div key={idx} onClick={() => (window.location.href = interest.url)}>
                    <span style={{ color: '#a1a1a1', fontSize: '18px' }}>{interest.source.name}</span>
                    <span>{interest.title}</span>
                  </div>
                ))}
              </S.InterestNews>
            </S.InterestNewsWrap>
          </S.NewsBox>
          <S.RecommanedWrap>
            <S.Title>추천</S.Title>
            <S.Recommaned>
              {recommandNews?.articles.map((item, idx) => (
                <div key={idx} onClick={() => (window.location.href = item.url)}>
                  <span>{item.title}</span>
                  <span style={{ color: '#a1a1a1', fontSize: '15px', fontWeight: '400' }}>
                    {dayjs(item.publishedAt).fromNow()}
                  </span>
                </div>
              ))}
            </S.Recommaned>
          </S.RecommanedWrap>
        </S.NewsContainer>
      </S.Main>
      <BottomBar />
    </S.NewsWrap>
  );
};

export default News;
