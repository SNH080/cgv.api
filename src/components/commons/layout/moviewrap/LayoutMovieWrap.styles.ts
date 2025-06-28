import styled from "@emotion/styled";

export const TabWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  background-color: #000;
`;

export const TabHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  padding: 50px 0 20px;
`;

export const MenuWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  & > :first-child::after {
    content: "|";
    color: #fff;
    position: absolute;
    right: 0;
  }

  .TabButton {
    position: relative;
  }
`;

export const TabButton = styled.button<{ "data-active": string }>`
  border: none;
  padding: 10px 20px;
  background-color: initial;
  color: ${({ "data-active": dataActive }) =>
    dataActive === "true" ? "#ED3124" : "#fff"};
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`;

export const ButtonWrap = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ButtonSpan = styled.span`
  font-size: 16px;
  color: #fff;
`;

export const ButtonImg = styled.img`
  height: 14px;
  width: auto;
  margin-left: 6px;
`;

export const TabContent = styled.div`
  padding: 10px;
  color: #fff;
  display: flex;
  > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const ItemsWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 18%; /* 또는 다른 비율 */
  margin: 1%; /* 간격 조정 */
  box-sizing: border-box;
`;

export const ItemWrap = styled.div`
  flex: 1; /* 같은 비율로 공간 차지 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  position: relative;

  :hover {
    > :first-child {
      > div {
        opacity: 1;
      }
    }
  }
`;

export const ItemImgWrap = styled.div`
  position: relative; /* 내부의 hover 이미지를 위해 relative 설정 */
  width: 100%; /* 부모와 동일한 너비 */
  height: auto; /* 비율 유지 */
  overflow: hidden;

  &:hover {
    img {
      transform: scale(1.05); /* 호버 효과 */
    }
  }

  img {
    width: 100%; /* 이미지를 부모 요소에 맞게 조정 */
    height: auto; /* 비율 유지 */

    transition: transform 0.3s;
  }
`;

// export const ItemHoverWrap = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%; /* 부모와 동일한 너비 */
//   height: 100%; /* 부모와 동일한 높이 */
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 2;
//   background-color: rgba(
//     0,
//     0,
//     0,
//     0.5
//   ); /* 반투명 배경 (원하는 색상으로 변경 가능) */
//   color: white; /* 텍스트 색상 */
//   opacity: 0; /* 기본 상태에서 보이지 않도록 */
//   transition: opacity 0.3s; /* 호버 효과에 부드러운 전환 추가 */
// `;

export const ItemHoverWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  opacity: 0;
  transition: opacity 0.3s;

  /* padding: 12px;
  text-align: center;

  // 말줄임 처리
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical; */

  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.4em;
    max-height: calc(1.4em * 5); /* 5줄 기준 높이 제한 */
    font-size: 14px;
  }
`;

export const AgeWrap = styled.div`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 3vw;
  height: auto;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const RankingNum = styled.div`
  position: absolute;
  bottom: 0;
  left: 6px;
  font-size: 4vw;
  font-style: italic;
`;

export const ItemMovieTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 10px;
`;

export const ItemMovieTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

export const LikeWrap = styled.div`
  border: 1px solid #fff;
  border-radius: 15px;
  padding: 3px 8px;
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    width: 16px;
    height: 16px;
    margin-right: 2px;
  }
`;

export const LikeNum = styled.div`
  font-size: 12px;
`;

export const ReservationBtn = styled.div`
  width: 100%;
  border: 1px solid #fff;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  padding: 4px 0;
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    background-color: #ed3124;
    border: 1px solid #ed3124;
  }
`;
