import React from "react";
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarFixedAdjust
} from "@rmwc/top-app-bar";

import logo from "./AppBar.logo.svg";

export const AppBar = ({ children }) => (
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
