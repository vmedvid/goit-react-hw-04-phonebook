import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 5px;
  font-size: 20px;
  border: 1px solid #d6e8f6;
  border-radius: 5px;

  :nth-of-type(odd) {
    background-color: #d6e8f6;
  }
`;
