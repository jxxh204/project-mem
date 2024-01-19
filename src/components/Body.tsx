import { useToggleContext } from "@/contexts/toggle";
import Memo from "./Memo";
import Save from "./Memo/Save";
import Temp from "./Memo/Temp";
import Search from "./Search";
import styled from "styled-components";

const BodyWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
  width: 90%;
  height: 75%;
  /* max-height: 75vh; */
  overflow-y: auto;
`;

function Body() {
  const context = useToggleContext();

  // 하나로 감싸야할듯.
  return (
    <BodyWrapper data-testid="body-head">
      {context.toggle ? (
        <Search />
      ) : (
        <Memo>
          <Save />
          <Temp />
        </Memo>
      )}
    </BodyWrapper>
  );
}

export default Body;
