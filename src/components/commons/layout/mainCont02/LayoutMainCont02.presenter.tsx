// LayoutMainCont02.presenter.tsx

import * as S from "./LayoutMainCont02.styles";
import type { ILayoutMainCont02Props } from "./LayoutMainCont02.types";

export default function LayoutMainCont02UI({
  items,
  selectedIndex,
  handleItemClick,
}: ILayoutMainCont02Props): JSX.Element {
  return (
    <S.SpecialCinemaWrap>
      <S.Header>
        <S.Title>특별관</S.Title>
        <S.ButtonWrap>
          <S.ButtonSpan>전체보기</S.ButtonSpan>
          <S.ButtonImg src="/images/layout/moviewrap/right.png" />
        </S.ButtonWrap>
      </S.Header>
      <S.ContentWrap>
        <S.CinemaImgWrap>
          {selectedIndex !== null && (
            <S.CinemaImg
              src={`/images/layout/specialCinema/cinema0${
                selectedIndex + 1
              }.png`}
              alt={`Cinema ${selectedIndex + 1}`}
            />
          )}

          {selectedIndex !== null && (
            <S.CinemaTextWrap>
              <S.CinemaTitle>{items[selectedIndex].title}</S.CinemaTitle>
              <S.CinemaText>{items[selectedIndex].description}</S.CinemaText>
            </S.CinemaTextWrap>
          )}
        </S.CinemaImgWrap>
        <S.CinemaList>
          {items.map((item, index) => (
            <S.CinemaListLi
              key={index}
              onClick={() => handleItemClick(index)}
              isSelected={selectedIndex === index}
            >
              <S.CinemaTitle>{item.title}</S.CinemaTitle>
              <S.CinemaText>{item.description}</S.CinemaText>
            </S.CinemaListLi>
          ))}
        </S.CinemaList>
      </S.ContentWrap>
    </S.SpecialCinemaWrap>
  );
}
