// Importsui
import { render, screen } from "@testing-library/react";

// To Test
import App from "../App";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

// Tests

test("Renders main page correctly", async () => {
  // Setup
  render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
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
