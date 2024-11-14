import * as S from "../../style";
import Icon from "src/assets/images/common/bottombar/user.png";
interface Props {
  text: string;
}

const User = (text: Props) => {
  return (
    <S.AiPeachWrapper>
      <S.AiChatSpaceWrapper style={{ flexDirection: "row-reverse" }}>
        <img
          src={Icon}
          style={{ width: 50, height: 50, borderRadius: 100, background: "#fff", marginLeft: 10 }}
          alt=""
        />
        <S.AiChatTextWrapper>
          <S.AiChatTextMainWrapper>{text.text}</S.AiChatTextMainWrapper>
        </S.AiChatTextWrapper>
      </S.AiChatSpaceWrapper>
    </S.AiPeachWrapper>
  );
};

export default User;
