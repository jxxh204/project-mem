import styled from "styled-components";
import SendImage from "@/assets/send.svg";
import { useMemoContext } from "@/contexts/memo";

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

function Input() {
  const context = useMemoContext();

  return (
    <InputWarp onSubmit={context?.addTemp}>
      <Text
        placeholder="당신의 경험을 메모해주세요"
        type="text"
        onChange={context?.onChangeInput}
        value={context?.text}
      ></Text>
      <Submit
        type="Image"
        src={SendImage}
        name="submit"
        alt="메모 입력 버튼"
        disabled={context?.text ? false : true}
        data-testid="memo-submit"
      ></Submit>
    </InputWarp>
  );
}

export default Input;