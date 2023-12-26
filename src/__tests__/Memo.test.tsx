// Importsui
// import Bottom from "@/components/Bottom";
// import Temp from "@/components/Memo/Temp";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// To Test
import { MemoProvider } from "@/contexts/memo";
// import { ToggleProvider } from "@/contexts/toggle";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
// import Bottom from "@/components/Bottom";
import Temp from "@/components/Memo/Temp";
// import App from "@/App";
import Bottom from "@/components/InputArea";

// Tests
const setup = () => {
  return render(
    <ThemeProvider theme={theme}>
      {/* <ToggleProvider> */}
      <MemoProvider>
        <Temp />
        <Bottom.Input />
        {/* <App /> */}
      </MemoProvider>
      {/* </ToggleProvider> */}
    </ThemeProvider>
  );
};
describe("<Input />", () => {
  test("Input 입력 확인", async () => {
    setup();

    const inputTextEl =
      screen.getByPlaceholderText("당신의 경험을 메모해주세요");
    await userEvent.type(inputTextEl, "memo1");
    await expect(inputTextEl).toHaveValue("memo1");
  });

  test("Input 클릭 확인 x", async () => {
    setup();

    const inputTextEl: HTMLInputElement =
      screen.getByPlaceholderText("당신의 경험을 메모해주세요");

    const submitButton = screen.getByTestId("memo-submit");

    expect(inputTextEl).toBeInTheDocument();

    userEvent.type(inputTextEl, "메모1");
    userEvent.click(submitButton);
  });
});

describe("<Temp />", () => {
  test("Temp 입력 테스트", async () => {
    setup();

    const inputTextEl: HTMLInputElement =
      screen.getByPlaceholderText("당신의 경험을 메모해주세요");

    const submitButton = screen.getByTestId("memo-submit");

    expect(inputTextEl).toBeInTheDocument();
    userEvent.type(inputTextEl, "메모1");
    userEvent.click(submitButton);

    // const tempList = screen.findByTestId("tempList");
    // expect(tempList).toHaveTextContent("메모1");

    const memo = screen.getByText("메모1");
    // expect(memoContext).toHaveValue("메모1"); // Adjust this based on your context structure

    // expect(inputTextEl).toBe("");
  });
});
