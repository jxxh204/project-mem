import styled from "styled-components";
import { useMemoContext } from "@/contexts/memo";
import { ColorBoxStyle, UlStyle } from "@/styles/BodyStyle";

const SaveStyle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  font-size: 16px;
  /* ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 15px;
  } */
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
    <SaveStyle data-testid="saveList">
      {context?.saveText.map((value, index) => (
        <ColorBoxStyle key={"saveParagraph" + index}>
          <UlStyle>{mappingValue(value)}</UlStyle>
        </ColorBoxStyle>
      ))}
    </SaveStyle>
  );
}

export default Save;
