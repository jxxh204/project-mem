import styled from "styled-components";
import { useMemoContext } from "../../contexts/memo";

const TempStyle = styled.ul`
  background-color: white;
  color: ${({ theme }) => theme.color.darkGray};
  border: solid 1px ${({ theme }) => theme.color.darkGray};
  width: 100%;
  font-size: 16px;
  padding: 15px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function Temp() {
  const context = useMemoContext();

  return (
    <TempStyle>
      {context?.tempText.length
        ? context?.tempText.map((text, index) => <li key={index}>{text}</li>)
        : "메모를 입력해주세요. (비어있어서 일단 넣음)"}
    </TempStyle>
  );
}

export default Temp;
