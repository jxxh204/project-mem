import styled from "styled-components";
import kakaoIcon from "@/assets/social_kakao.svg";

const KaKaoStyle = styled.div`
  background-color: #ffde68;
  padding: 12px 16px;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  /* color: ${({ theme }) => theme.color.darkGray}; */
  cursor: pointer;
`;
const KaKaoIcon = styled.img`
  height: 24px;
  width: 24px;
`;
function Kakao() {
  const handleClickKaKao = () => {
    let redirect_uri = import.meta.env.VITE_REDIRECT_URI;
    if (import.meta.env.DEV) {
      redirect_uri = "http://localhost:5173";
    }
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${
      import.meta.env.VITE_KAKAO_REST_API_KEY
    }&
redirect_uri=${redirect_uri}&response_type=code`;
  };

  // 카카오 인가요청은 카카오측 페이지로 이동 후 리다이렉트하기 때문에 fetch를 사용불가하다.
  return (
    <KaKaoStyle onClick={handleClickKaKao}>
      <KaKaoIcon src={kakaoIcon} />
      카카오로 시작하기
    </KaKaoStyle>
  );
}

export default Kakao;
