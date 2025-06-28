import { Fragment } from "react";
import {
  InnerSearchImg,
  MenuItem,
  MenuItemWrapper,
  SearchBar,
  Wrapper,
} from "./LayoutNavigation.styles";
import type { ILayoutNavigationUIProps } from "./LayoutNavigation.types";

const NAVIGATION_MENUS = [
  { name: "영화", page: "/myfirebase" },
  { name: "예메", page: "/openapis" },
  { name: "특별관", page: "/boards" },
];

export default function LayoutNavigationUI(
  props: ILayoutNavigationUIProps
): JSX.Element {
  return (
    <Wrapper>
      <MenuItemWrapper>
        {NAVIGATION_MENUS.map((el) => (
          <Fragment key={el.page}>
            <MenuItem id={el.page} onClick={props.onClickMenu}>
              {el.name}
            </MenuItem>
          </Fragment>
        ))}
      </MenuItemWrapper>
      <SearchBar>
        <InnerSearchImg src="/images/layout/header/search.png" />
      </SearchBar>
    </Wrapper>
  );
}
