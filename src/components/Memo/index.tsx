import styled from "styled-components";
import { MaxWidth } from "../AppWrapper";

const MemoStyle = styled(MaxWidth)``;
function Memo({ children }: { children: React.ReactNode }) {
  return <MemoStyle data-testid="memo-head">{children}</MemoStyle>;
}

export default Memo;
