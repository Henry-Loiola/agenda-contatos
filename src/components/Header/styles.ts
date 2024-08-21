import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  background-color: #134563;
  position: relative;

  img.sign-out-button {
    position: absolute;
    right: 32px;
    top: 26px;
    cursor: pointer;
  }
`;
