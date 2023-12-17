import styled from "styled-components";
import Kakao from "./KaKao";

const LoginWrap = styled.article`
  position: absolute;
  z-index: 999;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const LoginStyle = styled.div`
  box-shadow: 0px 0px 32px 0px ${({ theme }) => theme.color.main};
  border-radius: 15px;
  background-color: white;
  width: 343px;
  height: 196px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25.6px;
  @media only screen and (max-width: 600px) {
    box-shadow: none;
    border-radius: none;
    background-color: white;
  }
`;

function Login() {
  return (
    <LoginWrap>
      <LoginStyle>
        <p>로그인 이후 사용 가능합니다</p> <Kakao />
      </LoginStyle>
    </LoginWrap>
  );
}

export default Login;
