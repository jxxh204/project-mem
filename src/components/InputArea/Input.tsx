import styled from "styled-components";
import SendImage from "@/assets/send.svg";
import { useMemoContext } from "@/contexts/memo";
import { useToggleContext } from "@/contexts/toggle";
import { useSearchContext } from "@/contexts/search";

const Form = styled.form`
  width: 90%;
  height: 58px;
  display: flex;
  flex-direction: row;
  box-shadow: 0px 0px 32px 0px ${({ theme }) => theme.color.main};
  border-radius: 15px;
  background-color: white;
`;
const Text = styled.textarea`
  background-color: white;
  border-radius: 15px 0px 0px 15px;
  border: none;
  width: 100%;
  font-size: 16px;
  display: flex;
  align-items: center;
  padding: 20px 15px;

  color: ${({ theme }) => theme.color.darkGray};

  resize: none;
`;
const Submit = styled.input`
  border-radius: 0px 15px 15px 0px;
  border: none;
  padding: 15px;

  &:disabled {
    filter: invert(90%) sepia(12%) saturate(282%) hue-rotate(189deg)
      brightness(92%) contrast(99%);
  }
`;

// 성능이슈 있을지 확인해보기.
function Input() {
  const memo = useMemoContext();
  const search = useSearchContext();
  const { toggle } = useToggleContext();

  // index.tsx로 도려내기 vs search, memo input을 합치기?
  // 리팩터링 필요

  const onInputHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    toggle ? search?.onChangeInput(e) : memo?.onChangeInput(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    //Enter 버튼 적용되도록.
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      toggle ? search?.addQuestions(e) : memo?.addTemp(e);
    }
  };
  // 리팩터링 필요

  return (
    <Form onSubmit={toggle ? search?.addQuestions : memo?.addTemp}>
      <Text
        placeholder={
          toggle ? "당신의 경험을 검색해 주세요" : "당신의 경험을 메모해 주세요"
        }
        onInput={onInputHandler}
        onKeyDown={handleKeyDown}
        value={toggle ? search?.text : memo?.text}
        rows={3}
      ></Text>
      {toggle ? (
        <Submit
          type="Image"
          src={SendImage}
          name="submit"
          alt="메모 입력 버튼"
          disabled={search?.text ? false : true}
          data-testid="input-submit"
        ></Submit>
      ) : (
        <Submit
          type="Image"
          src={SendImage}
          name="submit"
          alt="메모 입력 버튼"
          disabled={memo?.text ? false : true}
          data-testid="input-submit"
        ></Submit>
      )}
    </Form>
  );
}

export default Input;
