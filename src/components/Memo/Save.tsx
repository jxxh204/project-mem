import styled from "styled-components";
import { useMemoContext } from "@/contexts/memo";

const SaveStyle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  font-size: 16px;
  div {
    width: 100%;
    background-color: ${({ theme }) => theme.color.light};
    color: ${({ theme }) => theme.color.darkGray};
    border-radius: 15px;
  }
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 15px;
  }
`;

const TextStyle = styled.li``;

function Save() {
  const context = useMemoContext();
  const mappingValue = (value: string[]) => {
    return value.map((text, index) => (
      <TextStyle key={"saveText" + index}>{text}</TextStyle>
    ));
  };
  return (
    <SaveStyle>
      {context?.saveText.map((value, index) => (
        <div>
          <ul key={"saveParagraph" + index}>{mappingValue(value)}</ul>
        </div>
      ))}
    </SaveStyle>
  );
}

export default Save;
