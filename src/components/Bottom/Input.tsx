import styled from "styled-components";
import SendImage from "@/assets/send.svg";
import { useMemoContext } from "@/components/Memo/useContext";
import { useToggleContext } from "@/contexts/toggle";
import { useSearchContext } from "@/components/Search/useContext";

const Form = styled.form`
  width: 90%;
  height: 58px;
  display: flex;
  flex-direction: row;
  box-shadow: 0px 0px 32px 0px ${({ theme }) => theme.color.main};
  border-radius: 15px;
  background-color: white;
`;
const Textarea = styled.textarea`
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
  outline: none;
  &:focus {
    outline: solid 2px #fe6b8b;
  }
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

  return (
    <Form>
      <Textarea
        placeholder={
          toggle ? "당신의 경험을 검색해 주세요" : "당신의 경험을 메모해 주세요"
        }
        onInput={toggle ? search?.onChangeInput : memo?.onChangeInput}
        onKeyDown={toggle ? search?.keyDownHandler : memo?.keyDownHandler}
        value={toggle ? search?.text : memo?.text}
        rows={3}
      ></Textarea>
      {toggle ? (
        <Submit
          type="Image"
          src={SendImage}
          name="submit"
          alt="메모 입력 버튼"
          disabled={search?.text ? false : true}
          data-testid="input-submit"
          onClick={search?.onClickHandler}
        ></Submit>
      ) : (
        <Submit
          type="Image"
          src={SendImage}
          name="submit"
          alt="검색 입력 버튼"
          disabled={memo?.text ? false : true}
          data-testid="input-submit"
          onClick={memo?.onClickHandler}
        ></Submit>
      )}
    </Form>
  );
}

export default Input;
