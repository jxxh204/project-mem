import styled from "styled-components";
import { ColorBoxStyle, UlStyle } from "@/styles/BodyStyle";
import React from "react";

const SaveStyle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  font-size: 16px;
`;

type Props = {
  saves: string[][] | undefined;
};

function Save({ saves }: Props) {
  return (
    <SaveStyle data-testid="saveList">
      {saves?.map((value, index) => (
        <ColorBoxStyle key={"saveParagraph" + index}>
          <UlStyle>{value}</UlStyle>
        </ColorBoxStyle>
      ))}
    </SaveStyle>
  );
}

export default React.memo(Save);
