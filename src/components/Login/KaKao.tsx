import styled from "styled-components";
import kakaoIcon from "@/assets/social_kakao.svg";

const KaKaoStyle = styled.section`
  background-color: #ffde68;
  padding: 12px 16px;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;
const KaKaoIcon = styled.img`
  height: 24px;
  width: 24px;
`;
function Kakao() {
  return (
    <KaKaoStyle>
      <KaKaoIcon src={kakaoIcon} />
      카카오로 시작하기
    </KaKaoStyle>
  );
}

export default Kakao;
