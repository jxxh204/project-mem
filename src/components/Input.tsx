import { EventHandler } from "react";
import styled from "styled-components";

const Text = styled.input``;
const Submit = styled.input``;
//엔터를 자동으로 넣기위해 submit 사용
function Input() {
  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <Text type="text"></Text>
      <Submit type="submit" onClick={handleSubmit}></Submit>
    </>
  );
}

export default Input;
