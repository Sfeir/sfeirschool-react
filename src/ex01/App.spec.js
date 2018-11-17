import React from "react";
import { render, fireEvent } from "react-testing-library";
import { App } from "./App";

test("App renders a button", () => {
  const { getByText } = render(<App />);
  const button = getByText(/clicked/, { selector: "button" });
  expect(button).toBeInTheDocument();
});

test("App button click count increments on click", () => {
  const { getByText } = render(<App />);
  const button = getByText(/clicked/, { selector: "button" });
  fireEvent.click(button);
  expect(button).toHaveTextContent(/1 times/);
  fireEvent.click(button);
  expect(button).toHaveTextContent(/2 times/);
});
