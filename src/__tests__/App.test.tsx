// Imports
import { render, screen } from "@testing-library/react";

// To Test
import App from "../App";

// Tests
test("Renders main page correctly", async () => {
  // Setup
  render(<App />);
  //   const buttonCount = await screen.findByRole("button");
  const isToggle = await screen.queryByText(/토글/);
  expect(isToggle).toBeDefined();
  //   // Pre Expecations
  //   expect(buttonCount.innerHTML).toBe("count is 0");
  //   // Instead of:
  //   expect(codeCount).toBeNull();
  //   expect(codeCount).not.toBeInTheDocuement();

  //   // Init
  //   fireEvent.click(buttonCount);
  //   fireEvent.click(buttonCount);

  //   // Post Expectations
  //   expect(buttonCount.innerHTML).toBe("count is 2");
  //   expect(await screen.queryByText(/The count is now:/)).toBeInTheDocument();
});
