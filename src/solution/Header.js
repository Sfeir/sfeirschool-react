import React from "react";
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarFixedAdjust
} from "@rmwc/top-app-bar";

import logo from "../images/Header.logo.svg";

export const Header = ({ children }) => (
  <>
    <TopAppBar>
      <TopAppBarRow>
        <TopAppBarSection>
          <img src={logo} alt="People logo" />
        </TopAppBarSection>
        <TopAppBarSection alignEnd>{children}</TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
    <TopAppBarFixedAdjust />
  </>
);
