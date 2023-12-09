import styled from "styled-components";

const SaveStyle = styled.div`
  background-color: ${({ theme }) => theme.color.light};
  color: ${({ theme }) => theme.color.darkGray};
  width: 100%;
  border-radius: 15px;
  font-size: 16px;
  padding: 15px;
  ul {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
`;

function Save() {
  const contents = [
    { index: 0, content: "홍대 입구역" },
    { index: 1, content: "삼겹살" },
    { index: 2, content: "또 뭐 없나" },
  ];
  return (
    <SaveStyle>
      <ul>
        {contents.map((value, index) => (
          <li key={index}>{value.content}</li>
        ))}
      </ul>
    </SaveStyle>
  );
}

export default Save;
