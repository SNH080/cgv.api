import * as S from "./LayoutFooter.styles";

export default function LayoutFooterUI(): JSX.Element {
  return (
    <S.BackGround>
      <S.FooterMenu>
        <li>회사소개</li>
        <li>지속가능경영</li>
        <li>IR</li>
        <li>채용정보</li>
        <li>광고/제휴/출점문의</li>
        <li>이용약관</li>
        <li>편성기준</li>
        <li>개인정보처리방침</li>
        <li>법적고지</li>
        <li>이메일주소무단수집거부</li>
        <li>윤리경영</li>
        <li>사이버감사실</li>
      </S.FooterMenu>
      <S.FooterTextWrap>
        <span>
          (04377)서울특별시 용산구 한강대로 23길 55, 아이파크몰 6층(한강로동)
        </span>
        <span>
          대표이사허민회사업자등록번호104-81-45690통신판매업신고번호2017-서울용산-0662 사업자정보확인
        </span>
        <span>호스팅사업자CJ올리브네트웍스대표이메일cjcgvmaster@cj.net</span>
        <span>© CJ CGV. All Rights Reserved</span>
      </S.FooterTextWrap>
    </S.BackGround>
  );
}
