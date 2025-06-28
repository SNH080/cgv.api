import * as S from "./LayoutHeader.styles";
import type { ILayoutHeaderProps } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: ILayoutHeaderProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.InnerLogo onClick={props.onClickLogo}>
          <S.InnerLogoImg src="/images/layout/header/logoRed.png" />
        </S.InnerLogo>
        <S.ButtonWrap>
          <S.InnerButton onClick={props.onClickMoveToLogin}>
            <S.InnerMenuImg src="/images/layout/header/loginPassword_white.png" />
            <S.MenuSpan>로그인</S.MenuSpan>
          </S.InnerButton>
          <S.InnerButton onClick={props.onClickMoveToLogin}>
            <S.InnerMenuImg src="/images/layout/header/user_plus.png" />
            <S.MenuSpan>회원가입</S.MenuSpan>
          </S.InnerButton>
          <S.InnerButton onClick={props.onClickMoveToLogin}>
            <S.InnerMenuImg src="/images/layout/header/user.png" />
            <S.MenuSpan>My CGV</S.MenuSpan>
          </S.InnerButton>
          <S.InnerButton onClick={props.onClickMoveToLogin}>
            <S.InnerMenuImg src="/images/layout/header/headset.png" />
            <S.MenuSpan>고객센터</S.MenuSpan>
          </S.InnerButton>
        </S.ButtonWrap>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
