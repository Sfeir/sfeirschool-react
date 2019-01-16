import React, { useState } from "react";
import { TopAppBarActionItem } from "@rmwc/top-app-bar";

import { people } from "../../data/people.json";
import { Header } from "./Header";

import { PersonCard } from "./PersonCard";
import { Carousel } from "./Carousel_ex04";

const personCards = people.map(person => (
  <PersonCard person={person} key={person.id} />
));

export const App = () => {
  const [showCarousel, setShowCarousel] = useState(false);
  const toggleView = () => setShowCarousel(x => !x);

  return (
    <>
      <Header>
        <TopAppBarActionItem onClick={toggleView}>
          {showCarousel ? "view_module" : "view_carousel"}
        </TopAppBarActionItem>
      </Header>
      <main>
        {showCarousel ? <Carousel>{personCards}</Carousel> : personCards}
      </main>
    </>
  );
};
