// Imports
import { fireEvent, render, screen } from "@testing-library/react";

// To Test
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import { ToggleProvider } from "@/contexts/toggle";
import { MemoProvider } from "@/contexts/memo";
import GlobalStyle from "@/styles/GlobalStyle";
// import App from "@/App";
import Toggle from "@/components/Toggle";
import Search from "@/components/Search";

// Tests
test("Renders main page correctly", async () => {
  render(
    <ThemeProvider theme={theme}>
      <ToggleProvider>
        <MemoProvider>
          <GlobalStyle />
          <Toggle />
          <Search />
        </MemoProvider>
      </ToggleProvider>
    </ThemeProvider>
  );
  const toggle = await screen.queryByTestId("toggle");
  expect(toggle).toBeDefined();
  if (toggle) fireEvent.click(toggle);
  //   click 변경사항은 toggle state를 context로 관리할때 테스트하기
});
