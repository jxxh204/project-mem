import styled from "styled-components";
import SendImage from "../../assets/send.svg";
import { useState } from "react";

const InputWarp = styled.form`
  width: 80%;
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
  const [inputText, setInputText] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    alert("개발중");
    // setInputText()
  };
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputText(e.target.value);

  return (
    <InputWarp>
      <Text
        placeholder="당신의 경험을 메모해주세요"
        type="text"
        onChange={onChangeHandler}
      ></Text>
      <Submit
        type="Image"
        src={SendImage}
        name="submit"
        alt="메모 입력 버튼"
        disabled={inputText ? false : true}
        onClick={handleSubmit}
      ></Submit>
    </InputWarp>
  );
}

export default Input;
