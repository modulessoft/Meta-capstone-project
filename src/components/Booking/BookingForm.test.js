import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the BookingForm heading", () => {
  const { getByText } = render(
    <BookingForm availableTimes={["10:00"]} dispatchAvailableTimes={() => {}} />
  );
  expect(getByText("Choose date")).toBeInTheDocument();
});
