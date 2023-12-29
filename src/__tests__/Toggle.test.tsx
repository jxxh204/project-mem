// Imports
import { render, screen } from "@testing-library/react";

// To Test
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import { ToggleProvider } from "@/contexts/toggle";
import { MemoProvider } from "@/contexts/memo";
import GlobalStyle from "@/styles/GlobalStyle";
import App from "@/App";
import userEvent from "@testing-library/user-event";
// import App from "@/App";

// Tests
describe("<Toggle />", () => {
  test("토글 기능이 작동하는지 확인.", async () => {
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
    const toggle = await screen.getByTestId("toggle");
    expect(toggle).toBeDefined();
    const memo = await screen.getByTestId("memo-head");

    expect(memo).toBeDefined();
    await userEvent.click(toggle);
    const search = await screen.getByTestId("search-head");

    expect(search).toBeDefined();
  });
});
