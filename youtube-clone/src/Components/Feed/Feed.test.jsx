import React from "react";
import { render } from "@testing-library/react";
import Feed from "./Feed";

it("renders with a specific category", () => {
    const category = "music";
    render(<Feed category={category} />);
    const { getByText } = render(<Feed category={category} />);
    expect(getByText(category)).toBeInTheDocument();
});

it("renders with an empty category", () => {
    const category = "";
    render(<Feed category={category} />);
    // Add assertions to check if the component renders correctly with an empty category
});

it("renders with a null category", () => {
    const category = null;
    render(<Feed category={category} />);
    // Add assertions to check if the component renders correctly with a null category
    
});
