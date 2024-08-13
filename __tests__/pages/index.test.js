import { render } from "@testing-library/react";
import Home from "../../src/pages";

describe("Index page", () => {
    it("Renders Correctly", () => {
        render(<Home />);
    });
});
