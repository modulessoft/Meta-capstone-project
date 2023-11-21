import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the BookingForm heading", () => {
  const { getByText } = render(
    <BookingForm availableTimes={["10:00"]} dispatchAvailableTimes={() => {}} />
  );
  expect(getByText("Choose date")).toBeInTheDocument();
});

describe("BookingForm", () => {
  it("should display error messages for invalid form submission", async () => {
    render(
      <BookingForm
        availableTimes={["10:00"]}
        dispatchAvailableTimes={() => {}}
      />
    );

    const submitButton = screen.getByText("Make Your reservation");

    fireEvent.click(submitButton);

    // Validate that error messages are displayed
    const errorMessages = await screen.findAllByRole("alert");
    expect(errorMessages).toHaveLength(3);
    expect(
      screen.getByText("Please add more than 0 guests")
    ).toBeInTheDocument();
    expect(screen.getByText("Please add a correct time")).toBeInTheDocument();
    expect(screen.getByText("Please add a correct date")).toBeInTheDocument();
  });
});
