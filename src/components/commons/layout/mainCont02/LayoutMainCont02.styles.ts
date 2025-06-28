import styled from "@emotion/styled";

export const SpecialCinemaWrap = styled.div`
  background-color: #000;
  padding: 50px 40px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 20px;
`;
export const Title = styled.div`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
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

export const ContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
`;
export const CinemaImgWrap = styled.div`
  position: relative;
  width: 40%;
`;
export const CinemaImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px;
`;
export const CinemaTextWrap = styled.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
  display: flex;
  flex-direction: column;
`;
export const CinemaTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
`;
export const CinemaText = styled.span`
  font-size: 12px;
`;

export const CinemaList = styled.ul`
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  li {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #fff;
    padding: 14px 12px;
    cursor: pointer;
    transition: all 0.3s;

    :first-child {
      border-top: 1px solid #fff;
    }

    :hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`;

export const CinemaListLi = styled.li<{ isSelected: boolean }>`
  span {
    :first-child {
      color: ${({ isSelected }) =>
        isSelected ? "#ed3124" : "#fff"}; /* 선택된 경우 색상 변경 */
    }
  }
`;
