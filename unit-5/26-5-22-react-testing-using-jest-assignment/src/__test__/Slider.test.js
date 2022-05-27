import { render,screen,fireEvent } from "@testing-library/react"
import App from "../App"


describe("Should have prev and next button", function () {
    it("should not give error", function () {
        render(<App />);
        let prevBtn = screen.getByText("prev")
        let nextBtn = screen.getByText("next")
        expect(prevBtn).toBeInTheDocument();
        expect(nextBtn).toBeInTheDocument();
    })
    it("should have correct question and state of prev buttons", function () {
        render(<App />);
        let h1 = screen.getByTestId("question")
        let btn = screen.getByText("prev");
        expect(h1).toHaveTextContent("Why to use Reactjs?")
        expect(btn).toBeDisabled();
    })
    it("should have correct question and state of next Button", function () {
        render(<App />);
        let h1 = screen.getByTestId("question");
        let btn = screen.getByText("next");
        fireEvent.click(btn);
        fireEvent.click(btn);
        fireEvent.click(btn);
        expect(btn).toBeDisabled();
        expect(h1).toHaveTextContent("what is Hoisting,closure?")
    })
})