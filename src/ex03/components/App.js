import React from "react";
import styled from "styled-components";

import { AppBar } from "./AppBar";
import { Card } from "./Card";

const Main = styled.main`
  margin: 1rem;
  display: flex;
  justify-content: space-between;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

export const App = () => (
  <>
    <AppBar />
    <Main>
      <Card title="Welcome to Sfeir" />
      <Card title="We are learning React" />
    </Main>
  </>
);
