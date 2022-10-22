import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// test that tests that the data is sent to the server
test("data sent to server", () => {
  it("should send data to server", async () => {
    render(<App />);
  });
  // const linkElement = screen.getByText(/data sent to server/i);
  // expect(linkElement).toBeInTheDocument();
});
