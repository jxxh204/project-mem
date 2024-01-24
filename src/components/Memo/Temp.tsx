import styled from "styled-components";
import enterImage from "@/assets/enter.svg";
import { BorderBoxStyle, UlStyle } from "@/styles/BodyStyle";
import React, { MouseEventHandler } from "react";

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.color.darkGray};
`;
const ButtonImg = styled.img`
  /* width: 24px; */
  height: 24px;
  margin-bottom: -4px;
  margin-top: 1px;
`;
const TempList = styled(UlStyle)`
  .imageLi {
    display: flex;
    flex-direction: row;
    justify-content: end;
  }
`;
type Props = {
  temps: string[] | undefined;
  handleClick: MouseEventHandler<HTMLButtonElement> | undefined;
};

function Temp({ temps, handleClick }: Props) {
  if (!temps?.length) return null;
  return (
    <BorderBoxStyle>
      <TempList data-testid="tempList">
        {temps?.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
        <li className="imageLi">
          <Button onClick={handleClick} data-testid="tempButton">
            <ButtonImg src={enterImage} alt="임시 메모 등록 버튼" />
          </Button>
        </li>
      </TempList>
    </BorderBoxStyle>
  );
}

export default React.memo(Temp);
