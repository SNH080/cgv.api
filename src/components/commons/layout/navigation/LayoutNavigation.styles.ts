import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: #000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  padding: 8px 40px;
  color: white;
`;

export const MenuItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const MenuItem = styled.div`
  margin: 0px 60px;
  cursor: pointer;
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
  transition: all 0.3s;

  :hover {
    border-bottom: 2px solid #ed3124;
  }
`;

export const SearchBar = styled.div`
  width: 20%;
  height: 16px;
  border-right: 1px solid #fff;
  border-left: 1px solid #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
`;

export const InnerSearchImg = styled.img`
  width: 16px;
  margin-right: 12px;
`;
