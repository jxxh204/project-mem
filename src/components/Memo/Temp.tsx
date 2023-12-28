import styled from "styled-components";
import { useMemoContext } from "@/contexts/memo";
import enterImage from "@/assets/enter.svg";
const TempStyle = styled.article`
  width: 100%;
  background-color: white;
  color: ${({ theme }) => theme.color.darkGray};
  border: solid 1px ${({ theme }) => theme.color.main};
  border-radius: 15px;
`;
const UlStyle = styled.ul`
  /* width: 100%; */
  font-size: 16px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .imageLi {
    display: flex;
    flex-direction: row;
    justify-content: end;
  }
`;

const EnterImage = styled.img`
  width: 24px;
  height: 24px;
  padding: 12px 20px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.color.darkGray};
`;

function Temp() {
  const context = useMemoContext();

  if (!context?.tempText.length) return null;
  return (
    <TempStyle>
      <UlStyle aria-labelledby="temp-heading">
        {context?.tempText.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
        <li className="imageLi">
          <EnterImage
            onClick={context?.onClickEnterTemp}
            src={enterImage}
            alt="임시 메모 등록 버튼"
          />
        </li>
      </UlStyle>
    </TempStyle>
  );
}

export default Temp;
