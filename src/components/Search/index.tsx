import { useSearchContext } from "@/components/Search/useContext";
import styled from "styled-components";
import Mem from "@/assets/mem.svg";
import { BorderBoxStyle, ColorBoxStyle, UlStyle } from "@/styles/BodyStyle";
import React from "react";

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
  align-items: center;
`;
const MemImoji = styled.img`
  height: 70px;
`;
const ReplyStyle = styled(ColorBoxStyle)`
  width: auto;
  padding: 15px;
`;

type Props = {
  questions: string[] | undefined;
};
function Search({ questions }: Props) {
  return (
    <>
      <ListStyle>
        {questions?.map((q, index) => (
          <>
            <QuestionWrap>
              <QuestionStyle key={"questions" + index}>{q}</QuestionStyle>
            </QuestionWrap>
            <ReplyWrap>
              <MemImoji src={Mem} alt="mem 캐릭터 이미지" />
              <ReplyStyle key={"reply" + index}>{q}</ReplyStyle>
            </ReplyWrap>
          </>
        ))}
      </ListStyle>
    </>
  );
}

export default React.memo(Search);
