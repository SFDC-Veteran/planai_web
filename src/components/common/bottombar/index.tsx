import * as S from "./style";
import Export from "src/assets/images/common/bottombar/export.png";
import Share from "src/assets/images/common/bottombar/share.png";
import Plus from "src/assets/images/common/bottombar/plus.png";
import UseBottomBar from "src/hooks/common/bottombar/useBottomBar";

const BottomBar = () => {
  const { setOnClick, onclick, PlusPage, page } = UseBottomBar();
  console.log(page.map((item) => item.id));
  return (
    <S.BarWrapper>
      <S.PlusButton onClick={PlusPage}>
        <img src={Plus} style={{ width: 30, height: 30 }} alt="" />
      </S.PlusButton>
      {page.map((item, idx) => (
        <S.PlanButton onClick={() => setOnClick(item.id)}>
          {onclick === item.id ? (
            <img src={item.Select} style={{ width: 50, height: 50 }} alt="" />
          ) : (
            <img src={item.Page} style={{ width: 50, height: 50 }} alt="" />
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
