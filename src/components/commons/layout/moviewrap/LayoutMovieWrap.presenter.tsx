import React from "react";
import {
  ButtonImg,
  ButtonSpan,
  ButtonWrap,
  MenuWrap,
  TabButton,
  TabContent,
  TabHeader,
  TabWrap,
} from "./LayoutMovieWrap.styles";
import { FooterPresenterProps } from "./LayoutMovieWrap.types";

const FooterPresenter: React.FC<FooterPresenterProps> = ({
  activeTab,
  TabData,
  handleTabClick,
}) => {
  return (
    <TabWrap>
      <TabHeader>
        <MenuWrap>
          {TabData.map((tab) => (
            <TabButton
              className="TabButton"
              key={tab.id}
              data-active={activeTab === tab.id ? "true" : "false"}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.button}
            </TabButton>
          ))}
        </MenuWrap>
        <ButtonWrap>
          <ButtonSpan>전체보기</ButtonSpan>
          <ButtonImg src="/images/layout/moviewrap/right.png" />
        </ButtonWrap>
      </TabHeader>
      <TabContent>
        {TabData.find((tab) => tab.id === activeTab)?.content()}
      </TabContent>
    </TabWrap>
  );
};

export default FooterPresenter;
