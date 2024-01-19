import { useSearchContext } from "@/contexts/search";
import styled from "styled-components";
import { BorderBoxStyle, ColorBoxStyle, UlStyle } from "@/styles/BodyStyle";

const ListStyle = styled(UlStyle)`
  padding: 0px;
  width: 100%;

  /* align-items: flex-start; */
`;
const QuestionWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: end;
  text-align: right;
  width: 100%;
  white-space: pre;
`;
const QuestionStyle = styled(BorderBoxStyle)`
  width: auto;
  padding: 15px;
  max-width: 480px;
`;
const ReplyWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  text-align: left;
`;
const ReplyStyle = styled(ColorBoxStyle)`
  width: auto;
  padding: 15px;
`;

function Search() {
  const context = useSearchContext();
  return (
    <>
      <ListStyle>
        {context?.questions.map((q, index) => (
          <>
            <QuestionWrap>
              <QuestionStyle key={"questions" + index}>{q}</QuestionStyle>
            </QuestionWrap>
            <ReplyWrap>
              <ReplyStyle key={"reply" + index}>{q}</ReplyStyle>
            </ReplyWrap>
          </>
        ))}
      </ListStyle>
    </>
  );
}

export default Search;
