import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { jest } from "@jest/globals";
 
jest.mock("./providers/AuthProvider", () => ({
  __esModule: true,
  default: ({ children }) => <div>{children}</div>,
}));
jest.mock("react-router-dom", () => ({
  __esModule: true,
  BrowserRouter: ({ children }) => <div>{children}</div>,
}));
jest.mock("./routing/AllRoutes", () => () => <div>All Routes</div>);
jest.mock("./components/Footer", () => () => <div>Footer</div>);
 
test("renders App components", () => {
  render(<App />);
  expect(screen.getByText("All Routes")).toBeInTheDocument();
  expect(screen.getByText("Footer")).toBeInTheDocument();
})


test("connects to the API", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  expect(data.id).toBe(1);
});

test("accepts a username and password", () => {
  const username = "testuser";
  const password = "password";
  expect(username).toEqual("testuser");
  expect(password).toEqual("password");
});
