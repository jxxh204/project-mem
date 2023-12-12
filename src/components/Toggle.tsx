import { useState } from "react";
import styled, { css } from "styled-components";
import { useToggleContext } from "../contexts/toggle";

const ToggleWrap = styled.section`
  background-color: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.darkGray};
  font-size: 16px;
  border-radius: 20px;
  height: 48px;
  width: 128px;
  /* cursor: pointer; */
  p {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    z-index: 3;
  }
`;
const ToggleStyle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const ToggleColor = styled.div<{ $isToggleClick: boolean }>`
  position: absolute;
  top: 5%;
  left: 2%; // => 48%
  ${(props) =>
    props.$isToggleClick &&
    css`
      left: 48%;
    `}
  transition:all 0.2s;
  background-color: white;
  border-radius: 20px;
  height: 90%;
  width: 50%;
  z-index: 2;
`;

function Toggle() {
  const context = useToggleContext();

  const handleClickToggle = () => {
    console.log(context.toggle);
    context.setToggle(!context.toggle);
  };
  return (
    <ToggleWrap onClick={handleClickToggle}>
      <ToggleStyle>
        <p>
          <span>메모</span> <span>검색</span>
        </p>
        <ToggleColor $isToggleClick={context.toggle} data-testid="toggle" />
      </ToggleStyle>
    </ToggleWrap>
  );
}

export default Toggle;
