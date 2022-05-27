import { screen, render ,fireEvent} from "@testing-library/react";
import App from "../App";



describe("Should Resnder without error", function () {
    it("should have h1 and button", function () {
        render(<App></App>)
        let h1 = screen.getByText("Counter: 0");
        let btn = screen.getByTestId("add");
        expect(h1).toBeInTheDocument();
        expect(btn).toBeInTheDocument();
    })

    it("Should have Reduce Button", function () {
        render(<App></App>)
        let btn = screen.getByTestId("reduce");
        expect(btn).toBeInTheDocument();
    })
    
})

describe("Should update Counter", function(){
    it("should increase/decrease counter by 5", function () {
        render(<App />)
        let h1 = screen.getByText("Counter: 0");
        let btn = screen.getByTestId("add");
        fireEvent.click(btn);
        expect(h1).toHaveTextContent("Counter: 5");
        let red = screen.getByTestId("reduce");
        fireEvent.click(red);
        expect(h1).toHaveTextContent("Counter: 0");
    })
})

