import React, { useState } from "react";
import { TopAppBarActionItem } from "@rmwc/top-app-bar";

import { people } from "../../data/people.json";
import { Header } from "../solution/Header";

import { PersonCard } from "./PersonCard";
import { Carousel } from "./Carousel";

export const App = () => {
  return (
    <>
      <Header>
        <TopAppBarActionItem>view_carousel</TopAppBarActionItem>
        {/* use "view_module" as icon for showing the list */}
      </Header>
      <main>
        Switch between a List view and a Carousel view to display all the
        people. Use TopAppBarActionItems in the Header to do so.
        <br />
        <br />
        Omit the manager icon in PersonCard when there is none.
        <br />
        <br />
        Rewrite the Carousel so it has no dependency on PersonCard.
      </main>
    </>
  );
};
