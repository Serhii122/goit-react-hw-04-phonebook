import styled from 'styled-components';

export const ContactsItem = styled.li`
  display: flex;
  width: 300px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
 
  &:not(:last-child) {
    margin-bottom: 8px;
  }

  p {
    margin: 0px;
  }

  button {
    padding: 2px 7px;
    margin-left: 20px;
    background-color: white;
    border: 1px solid grey;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
`;