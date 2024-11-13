import * as S from "./style";

interface Props {
  title: string;
  img: any;
  des: string;
}

const ListItem = ({ title, img, des }: Props) => {
  return (
    <S.ItemWrapper>
      <S.ItemMainWrapper>
        <span style={{ fontSize: 25 }}>{title}</span>
        <img src={img} alt="" style={{ width: 200, height: 170, alignSelf: "center" }} />
        <span style={{ fontSize: 18 }}>{des}</span>
      </S.ItemMainWrapper>
    </S.ItemWrapper>
  );
};

export default ListItem;
