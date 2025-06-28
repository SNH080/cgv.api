import * as S from "./LayoutMainCont03.styles";

export default function LayoutMainCont03UI(): JSX.Element {
  return (
    <S.BackGround>
      <S.Wrapper>
        <S.CustomerServiceWrap>
          <S.CustomerServiceTop>
            <S.CustomerServiceTitle>고객센터</S.CustomerServiceTitle>
            <S.CustomerServiceTextWrap>
              <span>1544-1122</span>
              <span>
                고객센터 운영시간 (평일 09:00~18:00)
                <br />
                업무시간 외 자동응답 안내 가능합니다.
              </span>
            </S.CustomerServiceTextWrap>
          </S.CustomerServiceTop>
          <S.CustomerServiceBottom>
            <S.CustomerServiceIconWrap>
              <img src="/images/layout/icons/openBox.png" />
              <span>분실물 문의</span>
            </S.CustomerServiceIconWrap>
            <S.CustomerServiceIconWrap>
              <img src="/images/layout/icons/chatting.png" />
              <span>1대1 문의</span>
            </S.CustomerServiceIconWrap>
            <S.CustomerServiceIconWrap>
              <img src="/images/layout/icons/cinema.png" />
              <span>단체관람/대관 문의</span>
            </S.CustomerServiceIconWrap>
          </S.CustomerServiceBottom>
        </S.CustomerServiceWrap>
        <S.AppWrap>
          <span>앱 다운로드</span>
          <span>CGV앱에서 더 편리하게 이용하세요</span>
          <img src="/images/layout/icons/qr_code.png" />
          <span>
            QR코드를 스캔하고
            <br />
            앱설치 페이지로 바로 이동하세요
          </span>
        </S.AppWrap>
      </S.Wrapper>
    </S.BackGround>
  );
}
