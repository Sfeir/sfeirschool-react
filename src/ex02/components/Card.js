import React from "react";
import styled from "styled-components";

const Container = styled.section.attrs({
  className: "card"
})`
  width: 460px;
  min-height: 180px;
  margin: 10px;

  &:hover {
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
      0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3);
  }
`;

export const Card = ({ title }) => (
  <Container>
    <div className="card-content">
      <div className="card-title">{title}</div>
    </div>
  </Container>
);
