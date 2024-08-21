import styled from 'styled-components';

export const ContainerModalDelete = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  width: 394px;
  height: 263px;
  padding: 56px;
  background-color: #fffdfd;
  text-align: center;
  position: relative;

  .close-icon {
  position: absolute;
  right: 24px;
  top: 24px;
  cursor: pointer;
}
`;

export const ButtonsConfirmDelete = styled.div`
  width: 100%;
`;

export const ButtonDelete = styled.button`
  margin-top: 32px;
`;

export const ButtonCancel = styled.button`
  margin-top: 8px;
`;