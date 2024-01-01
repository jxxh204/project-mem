import styled from "styled-components";
import SendImage from "@/assets/send.svg";
import { useMemoContext } from "@/contexts/memo";
import { useToggleContext } from "@/contexts/toggle";
import { useSearchContext } from "@/contexts/search";

const InputWarp = styled.form`
  width: 90%;
  height: 58px;
  display: flex;
  flex-direction: row;
  box-shadow: 0px 0px 32px 0px ${({ theme }) => theme.color.main};
  border-radius: 15px;
  background-color: white;
`;
const Text = styled.input`
  background-color: white;
  border-radius: 15px 0px 0px 15px;
  border: none;
  width: 100%;
  font-size: 16px;
  padding: 0px 16px;
  color: ${({ theme }) => theme.color.darkGray};
`;
const Submit = styled.input`
  border-radius: 0px 15px 15px 0px;
  padding: 15px;
  border: none;

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
    <InputWarp onSubmit={toggle ? search?.addQuestions : memo?.addTemp}>
      <Text
        placeholder={
          toggle ? "당신의 경험을 검색해주세요" : "당신의 경험을 메모해주세요"
        }
        type="text"
        onChange={toggle ? search?.onChangeInput : memo?.onChangeInput}
        value={toggle ? search?.text : memo?.text}
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
    </InputWarp>
  );
}

export default Input;
