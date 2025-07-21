import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import styled from "@emotion/styled";
import LayoutMainCont02 from "./mainCont02/LayoutMainCont02.container";
// import LayoutMovieWrap from "./moviewrap/LayoutMovieWrap.container";
import LayoutMainCont03 from "./mainCont03/LayoutMainCont03.container";
import LayoutFooter from "./footer/LayoutFooter.container";
// import OpenapiMovie from "../../units/openapi/movie/OpenapiMovie.container";
import TestApi from "../../units/openapi/movie/testApi";

const Body = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
`;

interface ILayoutProps {
  children: JSX.Element;
}
export default function Layout(props: ILayoutProps): JSX.Element {
  return (
    <>
      <LayoutHeader />
      <LayoutNavigation />
      <LayoutBanner />
      {/* <OpenapiMovie /> */}
      {/* <LayoutMovieWrap /> */}
      <TestApi />
      <LayoutMainCont02 />
      <LayoutMainCont03 />
      <LayoutFooter />

      {/* 아래가 기존의 게시판 자리임! */}
      {/* <Body>{props.children}</Body>  */}
    </>
  );
}
