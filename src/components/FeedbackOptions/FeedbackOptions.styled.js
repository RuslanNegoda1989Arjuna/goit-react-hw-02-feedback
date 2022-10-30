import styled from '@emotion/styled';

export const Button = styled.button`
  padding: 10px;
  margin: 10px;
  border: none;
  border-radius: 3px;
  box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: rgba(255, 183, 48, 1);
    scale: 1.2;
  }
`;
