import React from "react";
import { render, fireEvent } from "react-testing-library";
import { App } from "./App";

test("App renders a header with the app logo", () => {
  const { getByAltText } = render(<App />);
  const image = getByAltText("People", { selector: "header *" });
  expect(image).toBeInTheDocument();
});

test("App renders React @ SFEIR in main", () => {
  const { getByText } = render(<App />);
  const card = getByText("React @ SFEIR", { selector: "main *" });
  expect(card).toBeInTheDocument();
});
