import React from 'react';
import * as S from './style';
import { Home, HomeClicked, AI, AIClicked, News, NewsClicked, InButton } from 'src/assets/images/common/sidebar';
import useSidebar from 'src/hooks/common/sidebar/useSIdebar';
import { SIDEBAR_AI_ITEMS } from 'src/constants/common/sidebar/sidebar.constants';

const Sidebar = () => {
  const { item, setItem, isVisible, setIsVisible, isClicked, handleIsClicked } = useSidebar();
  return (
    <S.SidebarWrap isvisible={isVisible}>
      <S.SidebarItemWrap>
        <S.SidebarItem iscliicked={item === '홈'} onClick={() => setItem('홈')}>
          <img src={item !== '홈' ? Home : HomeClicked} alt="" />
          <span>홈</span>
        </S.SidebarItem>
        <S.SidebarItem
          iscliicked={item === '작성'}
          onClick={() => {
            setItem('작성');
            handleIsClicked();
          }}
        >
          <img src={item !== '작성' ? AI : AIClicked} alt="" />
          <span>작성</span>
        </S.SidebarItem>
        {item === '작성' && isClicked === true && (
          <S.SidebarWriteItem>
            {SIDEBAR_AI_ITEMS.map((item, idx) => (
              <div key={idx}>{item}</div>
            ))}
          </S.SidebarWriteItem>
        )}
        <S.SidebarItem iscliicked={item === '뉴스'} onClick={() => setItem('뉴스')}>
          <img src={item !== '뉴스' ? News : NewsClicked} alt="" />
          <span>뉴스</span>
        </S.SidebarItem>
      </S.SidebarItemWrap>
      <S.InButton src={InButton} onClick={() => setIsVisible((prev) => !prev)} />
    </S.SidebarWrap>
  );
};

export default Sidebar;
