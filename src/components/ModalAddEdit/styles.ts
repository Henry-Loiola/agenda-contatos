import styled from 'styled-components';

export const ContainerModalInsert = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  width: 394px;
  padding: 56px;
  background-color: #fffdfd;
  text-align: center;
  position: relative;

  h2 {
    margin-bottom: 32px;
  }
`;

export const ButtonsConfirm = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 64px;

  button {
    width: 40%;
  }

  .btn-cancel-insert {
    margin-top: 8px;
  }
`;


/*.container-modal-insert {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  width: 394px;
  padding: 56px;
  background-color: #fffdfd;
  text-align: center;
  position: relative;
}

.container-modal-insert h2 {
  margin-bottom: 32px;
}
  
.buttons-confirm button {    
  width: 40%;
}

.btn-confirm-insert {
  margin-top: 64px;
}

.btn-cancel-insert {
  margin-top: 8px;
}
  */