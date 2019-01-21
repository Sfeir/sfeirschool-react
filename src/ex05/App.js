import React, { useState } from "react";
import { TopAppBarActionItem } from "@rmwc/top-app-bar";

import { people } from "../../data/people.json";
import { Header } from "../solution/Header";

import { SearchableList } from "./SearchableList";
import { Player } from "./Player";

// import { SearchableList } from "../solution/SearchableList";
// import { Player } from "../solution/Player_ex05";

export const App = () => {
  const [showList, setShowList] = useState(true);
  const toggleView = () => setShowList(x => !x);
  const toggleIcon = showList ? "view_carousel" : "view_module";
  const CurrentView = showList ? SearchableList : Player;

  return (
    <>
      <Header>
        <TopAppBarActionItem onClick={toggleView}>
          {toggleIcon}
        </TopAppBarActionItem>
      </Header>
      <CurrentView people={people} />
    </>
  );
};
