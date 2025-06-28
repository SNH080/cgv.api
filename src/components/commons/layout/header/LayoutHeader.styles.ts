import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 20px 0;
  background-color: #000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  margin: 0 40px;
`;

export const InnerLogo = styled.div`
  cursor: pointer;
`;

export const InnerLogoImg = styled.img`
  width: 130px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InnerButton = styled.span`
  margin: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  :last-child {
    margin-right: 0px;
  }
`;

export const InnerMenuImg = styled.img`
  height: 26px;
  width: auto;
  margin-bottom: 6px;
`;

export const MenuSpan = styled.span`
  font-size: 10px;
  color: #fff;
`;
