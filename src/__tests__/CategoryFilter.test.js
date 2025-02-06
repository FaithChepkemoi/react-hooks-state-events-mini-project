import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import CategoryFilter from "../components/CategoryFilter";
import { CATEGORIES } from "../data";

test("clicking the category button adds a class of 'selected' to the button", async () => {
    const mockOnCategorySelect = jest.fn();
    render(<CategoryFilter
        categories={['All', ...CATEGORIES]} // Include 'All' in categories
        selectedCategory="All"
        onCategorySelect={mockOnCategorySelect}
    />);

    const codeButton = screen.getByRole("button", { name: "Code" });
    const allButtons = screen.getAllByText("All");
    expect(allButtons.length).toBe(1); // Assert only one "All" button

    fireEvent.click(codeButton);

    expect(codeButton.classList.contains("selected")).toBe(true);
    expect(allButtons[0].classList.contains("selected")).toBe(false);
});
