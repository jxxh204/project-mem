// Importsui
// import Bottom from "@/components/Bottom";
// import Temp from "@/components/Memo/Temp";
import { fireEvent, render, screen } from "@testing-library/react";

// To Test
import { MemoProvider } from "@/contexts/memo";
// import { ToggleProvider } from "@/contexts/toggle";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
// import Bottom from "@/components/Bottom";
import Temp from "@/components/Memo/Temp";
// import App from "@/App";
import Bottom from "@/components/Bottom";

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
    // const tempList = result.getByTestId("TempList");

    expect(inputTextEl).toBeInTheDocument();

    fireEvent.change(inputTextEl, { target: { value: "메모1" } });
    const input: HTMLInputElement = screen.getByDisplayValue("메모1");
    expect(input.value).toEqual("메모1");
  });

  test("Input 클릭 확인 x", async () => {
    setup();

    const inputTextEl: HTMLInputElement =
      screen.getByPlaceholderText("당신의 경험을 메모해주세요");

    const submitButton = screen.getByTestId("memo-submit");

    expect(inputTextEl).toBeInTheDocument();

    fireEvent.change(inputTextEl, { target: { value: "메모1" } });
    fireEvent.click(submitButton);
  });
});

describe("<Temp />", () => {
  test("Temp 입력 테스트", async () => {
    setup();

    const inputTextEl: HTMLInputElement =
      screen.getByPlaceholderText("당신의 경험을 메모해주세요");

    const submitButton = screen.getByTestId("memo-submit");

    expect(inputTextEl).toBeInTheDocument();

    fireEvent.change(inputTextEl, { target: { value: "메모1" } });
    fireEvent.click(submitButton);

    // const tempList = screen.findByTestId("tempList");
    // expect(tempList).toHaveTextContent("메모1");

    const memoContext = screen.getByTestId("tempList"); // Assuming you have a test ID for your MemoContextProvider
    expect(memoContext).toHaveTextContent("메모1"); // Adjust this based on your context structure

    expect(inputTextEl.value).toBe("");
  });
});
