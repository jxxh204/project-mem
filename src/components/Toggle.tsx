import { useState } from "react";
import styled, { css } from "styled-components";

const ToggleStyle = styled.section`
  position: relative;
  top: 40px;
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

const ToggleColor = styled.div<{ toggleClick: boolean }>`
  top: 5%;
  left: 2%; // => 48%
  ${(props) =>
    props.toggleClick &&
    css`
      left: 48%;
    `}
  transition:all 0.2s;
  background-color: white;
  border-radius: 20px;
  height: 90%;
  width: 50%;
  position: absolute;
  z-index: 2;
`;

function Toggle() {
  const [isClick, setIsClick] = useState(false); // context로 변경하기.
  const handleClickToggle = () => setIsClick(!isClick);
  return (
    <ToggleStyle onClick={handleClickToggle}>
      <p>
        <span>메모</span> <span>토글</span>
      </p>
      <ToggleColor toggleClick={isClick} data-testId="toggle" />
    </ToggleStyle>
  );
}

export default Toggle;
