import * as S from "../../style";
import Icon from "src/assets/images/common/bottombar/aiIcon.png";
import { AiRespons } from "src/types/ai/ai.type";
interface Props {
  youtube: any;
  write: any;
  wolfram: any;
  web: any;
  reddit: any;
  academic: any;
}

const Ai = ({ youtube, write, wolfram, web, reddit, academic }: Props) => {
  console.log("AiChat", youtube);
  return (
    <S.AiPeachWrapper>
      <S.AiChatSpaceWrapper>
        <img
          src={Icon}
          style={{ width: 50, height: 50, borderRadius: 100, background: "#fff", marginRight: 10 }}
          alt=""
        />
        <S.AiChatTextWrapper>
          <S.AiChatTextMainWrapper>
            {youtube?.message ||
              write?.message ||
              web?.message ||
              wolfram?.message ||
              reddit?.message ||
              academic?.message}
          </S.AiChatTextMainWrapper>
        </S.AiChatTextWrapper>
      </S.AiChatSpaceWrapper>
    </S.AiPeachWrapper>
  );
};

export default Ai;
