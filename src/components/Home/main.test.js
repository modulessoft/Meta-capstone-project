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

test("Should update available booking time options when changing booking date", async () => {
  render(
    <MemoryRouter>
      <Main />
    </MemoryRouter>
  );
  const exampleDate = "2023-11-24";
  // open the reservation modal
  const btn = screen.getByText("Reserve a Table");
  fireEvent.click(btn);
  // get initial value
  const initialOptions = await screen.getByLabelText("Choose time");
  const dateInput = await screen.getByLabelText("Choose date");
  fireEvent.change(dateInput, { target: { value: exampleDate } });
  fireEvent.blur(dateInput);
  expect(dateInput).toHaveValue(exampleDate);
  const newOptions = await screen.getByLabelText("Choose time");
  expect(initialOptions.length).not.toEqual(newOptions.length);
});
