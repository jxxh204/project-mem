// Importsui
import { render, screen } from "@testing-library/react";

// To Test
import App from "@/App";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import { ToggleProvider } from "@/contexts/toggle";
import { MemoProvider } from "@/contexts/memo";
import GlobalStyle from "@/styles/GlobalStyle";

// Tests

test("Renders main page correctly", async () => {
  // Setup
  render(
    <ThemeProvider theme={theme}>
      <ToggleProvider>
        <MemoProvider>
          <GlobalStyle />
          <App />
        </MemoProvider>
      </ToggleProvider>
    </ThemeProvider>
  );
  //   const buttonCount = await screen.findByRole("button");
  const isToggle = await screen.queryByText(/메모/);
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
