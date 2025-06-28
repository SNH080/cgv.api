import styled from "@emotion/styled";

export const BackGround = styled.div`
  background-color: #666;
  color: #fff;
  padding: 0 40px;
  font-size: 10px;
`;

export const FooterMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  li {
    list-style: none;
    cursor: pointer;
  }
`;

export const FooterTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 0;
  span {
    margin: 6px 0;
  }
`;
