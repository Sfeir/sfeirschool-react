import React from "react";
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarFixedAdjust
} from "@rmwc/top-app-bar";

import logo from "./AppBar.logo.svg";

export const AppBar = () => (
  <>
    <TopAppBar>
      <TopAppBarRow>
        <TopAppBarSection>
          <img src={logo} alt="People logo" />
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
    <TopAppBarFixedAdjust />
  </>
);
