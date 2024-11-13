import * as S from "./style";
import Export from "src/assets/images/common/bottombar/export.png";
import Share from "src/assets/images/common/bottombar/share.png";
import Plus from "src/assets/images/common/bottombar/plus.png";
import UseBottomBar from "src/hooks/common/bottombar/useBottomBar";
import UseWrite from "src/hooks/write/useWrite";
import Select from "src/assets/images/common/bottombar/selectpage.png";
import Page from "src/assets/images/common/bottombar/page.png";

const BottomBar = () => {
  const { setOnClick, onclick, PostPage, message, now } = UseBottomBar();
  const { GetPage } = UseWrite({ pageId: onclick });
  console.log("now", now);
  return (
    <S.BarWrapper>
      <S.PlusButton onClick={PostPage}>
        <img src={Plus} style={{ width: 30, height: 30 }} alt="" />
      </S.PlusButton>
      {now?.map((item, idx) => (
        <S.PlanButton
          key={idx}
          onClick={() => {
            setOnClick(item.data[0].id);
            GetPage();
          }}
        >
          {onclick === item.data[0].id ? (
            <img src={Select} style={{ width: 50, height: 50 }} alt="" />
          ) : (
            <img src={Page} style={{ width: 50, height: 50 }} alt="" />
          )}
        </S.PlanButton>
      ))}

      <S.BarMainWrapper>
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
