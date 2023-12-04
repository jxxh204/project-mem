import styled from "styled-components";

const ToggleStyle = styled.section`
  background-color: ${({ theme }) => theme.color.main};
`;

function Toggle() {
  return <ToggleStyle>토글</ToggleStyle>;
}

export default Toggle;
