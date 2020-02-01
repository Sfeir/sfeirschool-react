import React, { useState } from "react";
import { TopAppBarActionItem } from "@rmwc/top-app-bar";

import { Person } from "../solution/state";
import { Header } from "../solution/Header";
import { PersonCard } from "../solution/PersonCard";

import { Carousel } from "./Carousel";

type AppProps = {
  people: Person[];
};

export const App: React.FC<AppProps> = ({ people }) => {
  return (
    <>
      <Header>
        <TopAppBarActionItem icon="view_carousel" />
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
