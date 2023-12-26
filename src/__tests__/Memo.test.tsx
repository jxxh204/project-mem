// Importsui
// import Bottom from "@/components/Bottom";
// import Temp from "@/components/Memo/Temp";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// To Test
import { MemoProvider } from "@/contexts/memo";
// import { ToggleProvider } from "@/contexts/toggle";
import { ThemeProvider } from "styled-components";
import Theme from "@/styles/theme";
// import Bottom from "@/components/Bottom";
import Temp from "@/components/Memo/Temp";
// import App from "@/App";
import Bottom from "@/components/InputArea";

// Tests
const setup = () => {
  return render(
    <ThemeProvider theme={Theme}>
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
//test의 dom상태는 유지된다.
describe("<Input />", () => {
  test("Input 입력 확인", async () => {
    setup();
    const submitButton = screen.getByTestId("memo-submit");

    const inputTextEl =
      screen.getByPlaceholderText("당신의 경험을 메모해주세요");

    expect(submitButton).toBeDisabled(); //버튼 비활성화

    await userEvent.type(inputTextEl, "memo1"); // 입력
    expect(inputTextEl).toHaveValue("memo1"); // 입력확인
    expect(submitButton).not.toBeDisabled(); // 버튼 활성화 확인
    await userEvent.click(submitButton); //클릭
    // await expect(inputTextEl).toHaveValue(""); // 입력 초기화
    // expect(submitButton).toBeDisabled(); // 버튼 비활성화
  });
});

describe("<Temp />", () => {
  test("Temp 입력 테스트", async () => {
    setup();

    const tempElement = screen.findByTestId("temp-ul");
    expect(tempElement).toHaveTextContent("memo1");
  });
});
