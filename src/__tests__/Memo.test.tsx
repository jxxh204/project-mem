import { render, screen, fireEvent, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoProvider } from "@/contexts/memo";
import { ThemeProvider } from "styled-components";
import Theme from "@/styles/theme";
import { SearchProvider } from "@/contexts/search";
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
  test("Input의 Submit버튼은 text 값이 있을 경우 활성화 됩니다.", async () => {
    setup();
    const submitButton = screen.getByTestId("input-submit");
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
  const Temp등록 = async (tempname: string) => {
    const submitButton = screen.getByTestId("input-submit");
    const inputTextEl =
      screen.getByPlaceholderText("당신의 경험을 메모해주세요");
    await fireEvent.change(inputTextEl, { target: { value: tempname } }); // 입력
    expect(inputTextEl).toHaveValue(tempname); // 입력확인
    await fireEvent.submit(submitButton); //클릭
  };

  const TempList = async () => {
    const tempUl: HTMLDataListElement = screen.getByTestId("tempList");
    const { getAllByRole } = within(tempUl);
    const items = getAllByRole("listitem");
    return items;
  };
  const SaveList = async () => {
    const saveUl: HTMLDataListElement = screen.getByTestId("saveList");
    const saveItems = within(saveUl).getAllByRole("listitem");
    return saveItems;
  };
  test("Temp가 생성되었는지 확인합니다.", async () => {
    setup();
    const temp = screen.findAllByText("memo1");
    expect(temp).toBeDefined();
  });

  test("Temp 여러개가 생성되는지 확인하고 등록 버튼작동을 테스트합니다.", async () => {
    setup();

    const temp = screen.findAllByText("memo1");
    expect(temp).toBeDefined();

    await Temp등록("memo1");
    await Temp등록("memo2");
    await Temp등록("memo3");
    const tempList = await TempList();
    expect(tempList.length).toBe(4);

    const tempEnter = await screen.getByTestId("tempButton");
    await userEvent.click(tempEnter);
    expect(tempList.length).toBe(4);
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
