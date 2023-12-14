// Importsui
import { fireEvent, render, screen } from "@testing-library/react";

// To Test
import App from "@/App";
import { MemoProvider } from "@/contexts/memo";
import { ToggleProvider } from "@/contexts/toggle";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import GlobalStyle from "@/styles/GlobalStyle";

// Tests

test("input memo", async () => {
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
  const inputElement = await screen.queryByTestId("memo-text");
  const submitButton = await screen.queryByTestId("memo-submit");
  expect(inputElement?.nodeValue).toBe("테스트 메모1");
  if (submitButton) fireEvent.click(submitButton);
});
