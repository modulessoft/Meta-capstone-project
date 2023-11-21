import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Main from "./Main"; // Replace with the actual component you want to test

test("Should have available booking time options", async () => {
  render(
    <MemoryRouter>
      <Main />
    </MemoryRouter>
  );
  // open the reservation modal
  const btn = screen.getByText("Reserve a Table");
  fireEvent.click(btn);
  const options = await screen.getByLabelText("Choose time");
  expect(options.length).toBeGreaterThan(0);
});
