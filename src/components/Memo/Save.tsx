import styled from "styled-components";

const SaveStyle = styled.div`
  background-color: white;
  color: ${({ theme }) => theme.color.darkGray};
  border: solid 1px ${({ theme }) => theme.color.darkGray};
  width: 100%;
  font-size: 16px;
  padding: 15px;
  border-radius: 15px;
`;

function Save() {
  return <SaveStyle>save</SaveStyle>;
}

export default Save;
