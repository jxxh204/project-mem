// Importsui
// import Bottom from "@/components/Bottom";
// import Temp from "@/components/Memo/Temp";
import { render, screen, fireEvent } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
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
  test("Input의 Submit버튼은 text 값이 있을 경우 활성화 됩니다.", async () => {
    setup();
    const submitButton = screen.getByTestId("memo-submit");
    const inputTextEl =
      screen.getByPlaceholderText("당신의 경험을 메모해주세요");

    expect(submitButton).toBeDisabled(); //버튼 비활성화

    await fireEvent.change(inputTextEl, { target: { value: "memo1" } }); // 입력
    expect(inputTextEl).toHaveValue("memo1"); // 입력확인
    expect(submitButton).not.toBeDisabled(); // 버튼 활성화 확인
    await fireEvent.submit(submitButton); //클릭
    expect(inputTextEl).toHaveValue(""); // 입력 초기화
    expect(submitButton).toBeDisabled(); // 버튼 비활성화
  });
});

describe("<Temp />", () => {
  test("Temp가 생성되었는지 확인합니다.", async () => {
    setup();
    const temp = screen.findAllByText("memo1");
    expect(temp).toBeDefined();
  });

  test("Temp 여러개가 생성되는지 확인합니다.", async () => {
    setup();
    const submitButton = screen.getByTestId("memo-submit");
    const inputTextEl =
      screen.getByPlaceholderText("당신의 경험을 메모해주세요");

    const Temp등록 = async (tempname: string) => {
      await fireEvent.change(inputTextEl, { target: { value: tempname } }); // 입력
      expect(inputTextEl).toHaveValue(tempname); // 입력확인
      await fireEvent.submit(submitButton); //클릭
    };
    const temp = screen.findAllByText("memo1");
    expect(temp).toBeDefined();

    await Temp등록("memo1");
    await Temp등록("memo2");
    await Temp등록("memo3");

    // const tempUl: HTMLDataListElement = screen.getByRole("list", {
    //   name: /temp/i,
    // });

    const elements = await screen.findAllByText(/memo/);
    const fields = Array.from(elements).map((el) => el.textContent ?? "");
    expect(fields).toHaveLength(3);
  });
});
