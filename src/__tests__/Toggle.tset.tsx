// Imports
import { fireEvent, render, screen } from "@testing-library/react";

// To Test
import Toggle from "../components/Toggle";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

// Tests
test("Renders main page correctly", async () => {
  render(
    <ThemeProvider theme={theme}>
      <Toggle />
    </ThemeProvider>
  );
  const toggle = await screen.queryByTestId("toggle");
  expect(toggle).toBeDefined();
  if (toggle) fireEvent.click(toggle);
  //   click 변경사항은 toggle state를 context로 관리할때 테스트하기
});
