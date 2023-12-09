import styled from "styled-components";
import { useMemoContext } from "../../contexts/memo";

const TempStyle = styled.div`
  background-color: white;
  color: ${({ theme }) => theme.color.darkGray};
  border: solid 1px ${({ theme }) => theme.color.darkGray};
  width: 100%;
  font-size: 16px;
  padding: 15px;
  border-radius: 15px;
`;

function Temp() {
  const context = useMemoContext();

  return (
    <TempStyle>
      <ul>
        {context?.tempText.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </TempStyle>
  );
}

export default Temp;
