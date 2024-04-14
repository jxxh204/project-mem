import styled from "styled-components";

const ProfileStyle = styled.div`
  border-radius: 16px;
  width: 56px;
  height: 56px;
  background-color: ${({ theme }) => theme.color.main};
`;

function Profile() {
  return <ProfileStyle></ProfileStyle>;
}

export default Profile;
