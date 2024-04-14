import styled from "styled-components";
import Input from "./Input";
import Profile from "./Profile";

//엔터를 자동으로 넣기위해 submit 사용
const BottomStyle = styled.section`
  width: 90%;
  max-width: 640px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  position: absolute;
  bottom: 20px;
`;
function Bottom({ children }: { children: React.ReactNode }) {
  return <BottomStyle>{children}</BottomStyle>;
}

Bottom.Input = Input;
Bottom.Profile = Profile;

export default Bottom;
