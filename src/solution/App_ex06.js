import React, { useState, useEffect } from "react";
import { TopAppBarActionItem } from "@rmwc/top-app-bar";

import { Header } from "./Header";
import { Loading } from "./Loading";
import { SearchableList } from "./SearchableList";
import { Player } from "./Player";

export const App = () => {
  const [showList, setShowList] = useState(false);
  const toggleView = () => setShowList(x => !x);
  const toggleIcon = showList ? "view_carousel" : "view_module";

  const [people, setPeople] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/people")
      .then(res => res.json())
      .then(setPeople);
  }, []);

  const CurrentView =
    people.length === 0 ? Loading : showList ? SearchableList : Player;

  return (
    <>
      <Header>
        <TopAppBarActionItem icon={toggleIcon} onClick={toggleView} />
      </Header>
      <CurrentView people={people} />
    </>
  );
};
