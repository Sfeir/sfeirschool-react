import React from "react";
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarActionItem,
  TopAppBarFixedAdjust
} from "@rmwc/top-app-bar";
import { Route } from "react-router-dom";

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

export const HeaderActionItem = ({ to, icon }) => (
  <Route path={to}>
    {({ history, match }) => (
      <TopAppBarActionItem
        icon={icon}
        onClick={() => !match && history.push(to)}
      />
    )}
  </Route>
);
