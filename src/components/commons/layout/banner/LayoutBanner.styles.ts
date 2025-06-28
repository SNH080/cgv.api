import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 400px;
`;

export const SliderItemWrap = styled.div`
  aspect-ratio: 16/9;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const SliderItem = styled.iframe`
  width: 100%;
  height: 100%;
  margin: auto;
`;

export const TextBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
  display: flex;
  align-items: center;
  padding-left: 10%;
`;

export const MovieTextWrap = styled.div`
  & > p {
    margin-bottom: 12px;
  }
`;

export const MovieTitle = styled.p`
  color: #fff;
  font-size: 28px;
  font-weight: bold;
  text-shadow: 2px 2px 3px #000;
`;

export const MovieText = styled.p`
  color: #fff;
  font-size: 16px;
`;

export const MovieTextBtn = styled.button`
  display: flex;
  border-radius: 15px;
  border: 0;
  background-color: #fff;
  padding: 8px 16px;
  cursor: pointer;

  :hover {
    > p {
      color: #ed3124;
    }
    > :nth-child(2) {
      display: none;
    }
    > :last-child {
      display: inline-block;
    }
  }
`;

export const MovieTextBtnText = styled.p`
  color: #999;
  font-size: 14px;
  margin-right: 6px;
`;

export const MovieTextBtnImg = styled.img`
  width: auto;
  height: 14px;
`;

export const MovieTextBtnImgHover = styled.img`
  width: auto;
  height: 14px;
  display: none;
`;
