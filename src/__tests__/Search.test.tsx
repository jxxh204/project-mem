import { fireEvent, screen, waitFor } from "@testing-library/dom";
import { ThemeProvider } from "styled-components";
import Theme from "@/styles/theme";
import { render } from "@testing-library/react";
import { ToggleProvider } from "@/contexts/toggle";
import { SearchProvider } from "@/contexts/search";
import App from "@/App";
import userEvent from "@testing-library/user-event";
import { MemoProvider } from "@/contexts/memo";

describe("<Search />", () => {
  const setup = () => {
    return render(
      <ThemeProvider theme={Theme}>
        <ToggleProvider>
          <MemoProvider>
            <SearchProvider>
              <App />
            </SearchProvider>
          </MemoProvider>
        </ToggleProvider>
      </ThemeProvider>
    );
  };
  const 토글클릭 = async () => {
    const toggle = await screen.getByTestId("toggle");
    await userEvent.click(toggle);
  };
  const 값입력 = async (value: string) => {
    const submitButton = screen.getByTestId("input-submit");
    const inputTextEl =
      screen.getByPlaceholderText("당신의 경험을 검색해주세요");

    expect(submitButton).toBeDisabled(); //버튼 비활성화

    await fireEvent.change(inputTextEl, { target: { value } }); // 입력
    expect(inputTextEl).toHaveValue(value); // 입력확인
    return {
      submitButton,
      inputTextEl,
    };
  };
  test("Submit버튼은 text 값이 있을 경우 활성화 됩니다. ", async () => {
    setup();
    토글클릭();
    waitFor(async () => {
      const { submitButton, inputTextEl } = await 값입력("입력값");
      expect(submitButton).not.toBeDisabled(); // 버튼 활성화 확인
      await fireEvent.submit(submitButton); //클릭
      expect(inputTextEl).toHaveValue(""); // 입력 초기화
      expect(submitButton).toBeDisabled(); // 버튼 비활성화
    });
  });

  test("text를 입력합니다.", async () => {
    setup();
    토글클릭();
    waitFor(async () => {
      const { submitButton } = await 값입력("검색 입력값");
      await fireEvent.submit(submitButton); //클릭
      screen.getByRole("listitem", { name: "검색 입력값" });
    });
  });

  test("입력 후 답장을 받습니다.", async () => {
    setup();
    토글클릭();
    waitFor(async () => {
      const { submitButton } = await 값입력("검색 입력값");
      await fireEvent.submit(submitButton); //클릭
      const 입력 = screen.getByRole("listitem", { name: "검색 입력값" });
      const 답장 = screen.getByRole("listitem", { name: "답장값" });

      expect(입력).toBeDefined();
      expect(답장).toBeDefined();
    });
  });
});
