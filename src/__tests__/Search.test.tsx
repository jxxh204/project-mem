import { fireEvent, getByRole, screen } from "@testing-library/dom";
import { ThemeProvider } from "styled-components";
import Theme from "@/styles/theme";
import Save from "@/components/Memo/Save";
import Temp from "@/components/Memo/Temp";
import InputArea from "@/components/InputArea";
import { render } from "@testing-library/react";

describe("<Search />", () => {
  const setup = () => {
    return render(
      <ThemeProvider theme={Theme}>
        <SearchProvider>
          <Save />
          <Temp />
          <InputArea.Input />
        </SearchProvider>
      </ThemeProvider>
    );
  };
  test("Submit버튼은 text 값이 있을 경우 활성화 됩니다. ", async () => {
    setup();
    const submitButton = screen.getByTestId("input-submit");
    const inputTextEl =
      screen.getByPlaceholderText("당신의 경험을 검색해주세요");

    expect(submitButton).toBeDisabled(); //버튼 비활성화

    await fireEvent.change(inputTextEl, { target: { value: "검색 입력" } }); // 입력
    expect(inputTextEl).toHaveValue("memo1"); // 입력확인
    expect(submitButton).not.toBeDisabled(); // 버튼 활성화 확인
    await fireEvent.submit(submitButton); //클릭
    expect(inputTextEl).toHaveValue(""); // 입력 초기화
    expect(submitButton).toBeDisabled(); // 버튼 비활성화
  });
});
