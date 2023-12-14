// Importsui
import Bottom from "@/components/Bottom";
import Temp from "@/components/Memo/Temp";
import { fireEvent, render } from "@testing-library/react";

// To Test
import { MemoProvider } from "@/contexts/memo";
import { ToggleProvider } from "@/contexts/toggle";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";

// Tests

const setup = () => {
  return render(
    <ThemeProvider theme={theme}>
      <ToggleProvider>
        <MemoProvider>
          <Bottom.Input />
        </MemoProvider>
      </ToggleProvider>
    </ThemeProvider>
  );
};
describe("메모 관련 테스트", () => {
  test("메모 입력 테스트", async () => {
    const result = setup();
    const inputText = result.getByPlaceholderText("당신의 경험을 메모해주세요");
    expect(inputText).toBeInTheDocument();

    fireEvent.change(inputText, { taget: { value: "메모1" } });
    fireEvent.click(result.getByTestId("memo-submit"));

    const TempComponent = render(<Temp />);
    TempComponent.getByText("메모1");
    console.log(TempComponent);
  });
});
