import { useToggleContext } from "@/contexts/toggle";
import Memo from "./Memo";
import MemorizeSave from "./Memo/Save";
import MemorizeTemp from "./Memo/Temp";
import MemorizeSearch from "./Search";
import styled from "styled-components";
import { useMemoContext } from "@/components/Memo/useContext";
import { useSearchContext } from "@/components/Search/useContext";

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
  const memoContext = useMemoContext();
  const searchContext = useSearchContext();

  // 하나로 감싸야할듯.
  return (
    <BodyWrapper data-testid="body-head">
      {context.toggle ? (
        <MemorizeSearch questions={searchContext?.questions} />
      ) : (
        <Memo>
          <MemorizeSave saves={memoContext?.saveText} />
          <MemorizeTemp
            temps={memoContext?.tempText}
            handleClick={memoContext?.memorizeOnEnterTemp}
          />
        </Memo>
      )}
    </BodyWrapper>
  );
}

export default Body;
