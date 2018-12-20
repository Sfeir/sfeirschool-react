import React from "react";
import styled from "styled-components";
import { AppBar } from "./AppBar";
import { Card } from "./Card";

const title = "React @ SFEIR";

const Main = styled.main`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const App = () => (
  <>
    <header>
      <AppBar />
    </header>
    <Main>
      <Card title={title} />
    </Main>
  </>
);
