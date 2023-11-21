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

  it("should submit the form for valid input", async () => {
    const mockSubmitData = jest.fn();
    render(
      <BookingForm
        availableTimes={["12:00"]}
        dispatchAvailableTimes={() => {}}
        submitData={mockSubmitData}
      />
    );

    // Provide valid input
    fireEvent.change(screen.getByLabelText("Choose date"), {
      target: { value: "2023-11-23" },
    });
    fireEvent.change(screen.getByLabelText("Choose time"), {
      target: { value: "12:00" },
    });
    fireEvent.change(screen.getByLabelText("Number of guests"), {
      target: { value: "2" },
    });
    fireEvent.change(screen.getByLabelText("Occasion"), {
      target: { value: "Birthday" },
    });

    fireEvent.click(screen.getByText("Make Your reservation"));

    // Validate that the form is submitted
    expect(mockSubmitData).toHaveBeenCalledWith({
      date: "2023-11-23",
      time: "12:00",
      numberOfGuests: "2",
      occasion: "Birthday",
    });
  });
});
