import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

//describe is used for grouping the tests. first argument is the name of the test group and second argument is the function that contains tests to be executed
describe("Main Greet", () => {
  //test is globally available in a react app project. The first argument is the name  of the test and second argument is a function that contains the expectayion to test
  test("Greet renders correctly", () => {
    //create a virtual dom of the greet component against which we test our assertions
    render(<Greet />);
    const textElement = screen.getByText(/hello/i); //text in red is a regex that matches the string ignoring the case
    expect(textElement).toBeInTheDocument(); //the expect method is to test our assertions
  });
  describe("Nested Greet", () => {
    test("Greet renders with followed by a name", () => {
      render(<Greet name="noor" />);
      const textElement = screen.getByText("Hello noor");
      expect(textElement).toBeInTheDocument();
    });
  });
});

describe("Multiple Greet", () => {
    test("Greet renders with followed by a name", () => {
      render(<Greet name="noor" />);
      const textElement = screen.getByText("Hello noor");
      expect(textElement).toBeInTheDocument();
    });
  });
