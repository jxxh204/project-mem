import styled from "styled-components";

const AppWrapperStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const MaxWidth = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
  max-width: 640px;
  width: 90%;
  height: 100%;
`;

function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <AppWrapperStyle>
      <MaxWidth>{children}</MaxWidth>
    </AppWrapperStyle>
  );
}

export default AppWrapper;
