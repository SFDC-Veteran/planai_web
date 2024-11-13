import * as S from './style';
import Export from 'src/assets/images/common/bottombar/export.png';
import Share from 'src/assets/images/common/bottombar/share.png';
import Plus from 'src/assets/images/common/bottombar/plus.png';
import UseBottomBar from 'src/hooks/common/bottombar/useBottomBar';
import UseWrite from 'src/hooks/write/useWrite';
import Save from 'src/assets/images/common/bottombar/save.png';
import Select from 'src/assets/images/common/bottombar/selectpage.png';
import Page from 'src/assets/images/common/bottombar/page.png';
import { useEffect } from 'react';

const BottomBar = () => {
  const { setOnClick, onclick, PostPage, message, now, NowPage } = UseBottomBar();
  const { GetPage, PatchPage } = UseWrite({ pageId: onclick });

  console.log('bottomNow', now);
  useEffect(() => {
    NowPage();
  }, []);

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
              GetPage();
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
