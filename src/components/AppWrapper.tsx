import styled from "styled-components";

const AppWrapperStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

function AppWrapper({ children }: { children: React.ReactNode }) {
  return <AppWrapperStyle>{children}</AppWrapperStyle>;
}

export default AppWrapper;
