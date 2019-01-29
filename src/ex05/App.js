import React, { useState } from "react";
import { TopAppBarActionItem } from "@rmwc/top-app-bar";

import { Header } from "../solution/Header";

import { SearchableList } from "./SearchableList";
// import { SearchableList } from "../solution/SearchableList";
import { Player } from "./Player";
// import { Player } from "../solution/ex05/Player";

export const App = ({ people }) => {
  const [showList, setShowList] = useState(true);
  const toggleView = () => setShowList(x => !x);
  const toggleIcon = showList ? "view_carousel" : "view_module";
  const CurrentView = showList ? SearchableList : Player;

  return (
    <>
      <Header>
        <TopAppBarActionItem icon={toggleIcon} onClick={toggleView} />
      </Header>
      <CurrentView people={people} />
    </>
  );
};
