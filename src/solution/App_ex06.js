import React, { useState, useEffect } from "react";
import { TopAppBarActionItem } from "@rmwc/top-app-bar";

import { Header } from "./Header";
import { SearchableList } from "./SearchableList";
import { Player } from "./Player";

export const App = () => {
  const [showList, setShowList] = useState(false);
  const toggleView = () => setShowList(x => !x);
  const toggleIcon = showList ? "view_carousel" : "view_module";
  const CurrentView = showList ? SearchableList : Player;

  const [people, setPeople] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/people")
      .then(res => res.json())
      .then(setPeople);
  }, []);

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
