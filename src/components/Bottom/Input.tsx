import styled from "styled-components";

const Text = styled.input``;
const Submit = styled.input``;

function Input() {
  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <Text placeholder="당신의 경험을 메모해주세요" type="text"></Text>
      <Submit type="submit" onClick={handleSubmit}></Submit>
    </>
  );
}

export default Input;
