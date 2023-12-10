import styled from "styled-components";
import { useMemoContext } from "../../contexts/memo";
import enterImage from "../../assets/enter.svg";
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
  const onClickEnter = () => {
    context?.addSaveText(context.tempText);
  };
  return (
    <TempStyle>
      <UlStyle>
        {context?.tempText.length
          ? context?.tempText.map((text, index) => <li key={index}>{text}</li>)
          : "메모를 입력해주세요. (비어있어서 일단 넣음)"}
        <EnterImage
          onClick={onClickEnter}
          src={enterImage}
          alt="임시 메모 등록 버튼"
        />
      </UlStyle>
    </TempStyle>
  );
}

export default Temp;