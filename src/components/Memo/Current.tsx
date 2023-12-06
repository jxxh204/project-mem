import styled from "styled-components";

const CurrentStyle = styled.section`
  background-color: white;
  color: ${({ theme }) => theme.color.darkGray};
  border: solid 1px ${({ theme }) => theme.color.darkGray};
  width: 85%;
  font-size: 16px;
  padding: 15px 15px;
  border-radius: 15px;
`;

function Current() {
  return <CurrentStyle>current</CurrentStyle>;
}

export default Current;
