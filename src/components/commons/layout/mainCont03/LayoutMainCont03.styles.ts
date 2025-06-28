import styled from "@emotion/styled";

export const BackGround = styled.div`
  background-color: #000;
  color: #fff;
  padding: 0 40px 50px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  border: 1px solid #666;
`;

export const CustomerServiceWrap = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 40px;
  border-right: 1px solid #666;
`;

export const CustomerServiceTop = styled.div`
  display: flex;
  align-items: baseline;
`;

export const CustomerServiceTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding-right: 20px;
`;

export const CustomerServiceTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;

  span {
    :first-child {
      font-weight: bold;
      margin-bottom: 8px;
    }
  }
`;

export const CustomerServiceBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CustomerServiceIconWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  img {
    width: 90px;
    height: 90px;
    margin-bottom: 12px;
    transition: transform 0.3s;
  }

  :hover {
    img {
      transform: scale(1.05);
    }
  }
`;

export const AppWrap = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  margin-left: 40px;

  span {
    margin-bottom: 12px;
    :first-child {
      font-size: 24px;
      font-weight: bold;
    }
    :last-child {
      margin-bottom: 0;
      text-align: center;
    }
  }

  img {
    width: 110px;
    height: auto;
    margin-bottom: 12px;
  }
`;
