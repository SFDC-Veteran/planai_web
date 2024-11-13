import React from 'react';
import * as S from './style';
import { Home, HomeClicked, AI, AIClicked, News, NewsClicked, InButton } from 'src/assets/images/common/sidebar';
import useSidebar from 'src/hooks/common/sidebar/useSIdebar';
import { SIDEBAR_AI_ITEMS } from 'src/constants/common/sidebar/sidebar.constants';
import Out from 'src/assets/images/outButton.png';

const Sidebar = () => {
  const {
    item,
    setItem,
    isVisible,
    setIsVisible,
    isClicked,
    handleIsClicked,
    HandleCategoryClick,
    writeItem,
    setWriteItem,
  } = useSidebar();
  return (
    <>
      {isVisible ? (
        <S.SidebarWrap isvisible={isVisible}>
          <S.SidebarItemWrap>
            <S.SidebarItem iscliicked={item === '홈'} onClick={() => HandleCategoryClick('홈')}>
              <img src={item !== '홈' ? Home : HomeClicked} alt="" />
              <span>홈</span>
            </S.SidebarItem>
            <S.SidebarItem
              iscliicked={item === '작성'}
              onClick={() => {
                HandleCategoryClick('작성');
                handleIsClicked();
              }}
            >
              <img src={item !== '작성' ? AI : AIClicked} alt="" />
              <span>작성</span>
            </S.SidebarItem>
            {item === '작성' && isClicked === true && (
              <S.SidebarWriteItem>
                {SIDEBAR_AI_ITEMS.map((item, idx) => (
                  <S.WriteItem isclicked={writeItem === item} onClick={() => setWriteItem(item)} key={idx}>
                    {item}
                  </S.WriteItem>
                ))}
              </S.SidebarWriteItem>
            )}
            <S.SidebarItem iscliicked={item !== '뉴스'} onClick={() => HandleCategoryClick('뉴스')}>
              <img src={item === '뉴스' ? News : NewsClicked} alt="" />
              <span>뉴스</span>
            </S.SidebarItem>
          </S.SidebarItemWrap>
          <S.InButton src={InButton} onClick={() => setIsVisible((prev) => !prev)} />
        </S.SidebarWrap>
      ) : (
        <img src={Out} onClick={() => setIsVisible((prev) => !prev)} />
      )}
    </>
  );
};

export default Sidebar;
