import styled from "styled-components";

export const UlStyle = styled.ul`
  font-size: 16px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-wrap: wrap;
`;

export const BorderBoxStyle = styled.div`
  width: 100%;
  background-color: white;
  color: ${({ theme }) => theme.color.darkGray};
  border: solid 1px ${({ theme }) => theme.color.main};
  border-radius: 15px;
`;

export const ColorBoxStyle = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.light};
  color: ${({ theme }) => theme.color.darkGray};
  border-radius: 15px;
`;
