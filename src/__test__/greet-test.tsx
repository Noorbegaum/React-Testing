import { render, screen } from "@testing-library/react";
import Greet from "../components/1.Greet/Greet";

describe("Multiple Greet", () => {
    test("Greet inside a test folder", () => {
      render(<Greet name="noor" />);
      const textElement = screen.getByText("Hello noor");
      expect(textElement).toBeInTheDocument();
    });
  });
