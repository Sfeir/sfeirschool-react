import React from "react";
import styled from "styled-components";
import { Card as MdcCard } from "@rmwc/card";
import { Typography } from "@rmwc/typography";

const CardContent = styled.div`
  padding: 1rem;
`;

export const Card = ({ title }) => (
  <MdcCard style={{ width: "calc(50% - 0.5rem)" }}>
    <CardContent>
      <Typography use="headline4">{title}</Typography>
    </CardContent>
  </MdcCard>
);
