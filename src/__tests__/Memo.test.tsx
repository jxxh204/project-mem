import {
  render,
  screen,
  fireEvent,
  within,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoProvider } from "@/components/Memo/useContext";
import { ThemeProvider } from "styled-components";
import Theme from "@/styles/theme";
import { SearchProvider } from "@/components/Search/useContext";
import { ToggleProvider } from "@/contexts/toggle";
import App from "@/App";

// Tests
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
//test의 dom상태는 유지된다.
describe("<Input />", () => {
  test("Input을 클릭할 경우 css가 제대로 변경되는 지", async () => {
    setup();
    const textArea = screen.getByPlaceholderText("당신의 경험을 메모해 주세요");

    await userEvent.click(textArea);
    const textAreaStyle = getComputedStyle(textArea);
    expect(textAreaStyle.outline).toBe("solid 2px #fe6b8b");
  });
  test("Input의 Submit버튼은 text 값이 있을 경우 활성화 됩니다.", async () => {
    setup();
    const submitButton = screen.getByTestId("input-submit");
    const textArea = screen.getByPlaceholderText("당신의 경험을 메모해 주세요");

    expect(submitButton).toBeDisabled(); //버튼 비활성화

    fireEvent.change(textArea, { target: { value: "memo1" } }); // 입력
    waitFor(() => {
      expect(textArea).toHaveTextContent("memo1"); // 입력확인
      expect(submitButton).not.toBeDisabled(); // 버튼 활성화 확인
      fireEvent.submit(submitButton); //클릭
      expect(textArea).toHaveValue(""); // 입력 초기화
      expect(submitButton).toBeDisabled(); // 버튼 비활성화
    });
  });
});

describe("<Temp />", () => {
  const Temp등록 = async (tempname: string) => {
    const submitButton = screen.getByTestId("input-submit");
    const inputTextEl =
      screen.getByPlaceholderText("당신의 경험을 메모해 주세요");
    userEvent.type(inputTextEl, tempname).then(() => {
      expect(inputTextEl).toHaveValue(tempname); // 입력확인
    });
    fireEvent.submit(submitButton); //클릭
  };

  const TempList = async () => {
    const tempUl: HTMLDataListElement = await screen.findByTestId("tempList");
    const { getAllByRole } = within(tempUl);
    const items = getAllByRole("listitem");
    return items;
  };
  const SaveList = async () => {
    const saveUl: HTMLDataListElement = screen.getByTestId("saveList");
    const saveItems = within(saveUl).getAllByRole("listitem");
    return saveItems;
  };

  test("Temp 여러개가 생성되는지 확인하고 등록 버튼작동을 테스트합니다.", async () => {
    setup();

    Temp등록("memo1");
    Temp등록("memo2");
    Temp등록("memo3");
    waitFor(async () => {
      const tempList = await TempList();
      expect(tempList.length).toBe(4);

      const tempEnter = await screen.getByTestId("tempButton");
      await userEvent.click(tempEnter);
      expect(tempList.length).toBe(4);
    });
  });
  test("Save가 잘 등록되었는지 확인합니다.", async () => {
    setup();

    await Temp등록("memo1");
    await Temp등록("memo2");
    await Temp등록("memo3");

    const tempEnter = await screen.getByTestId("tempButton");
    await userEvent.click(tempEnter);

    const saveList = await SaveList();
    expect(saveList.length).toBe(3);
  });
});
