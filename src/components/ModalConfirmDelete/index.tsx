// src/components/ModalConfirmDelete.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { removeContact } from '../../store/contactsSlice';
import { messageSuccess } from '../../helpers/toast';
import './styles';
import { ContainerModalDelete, ButtonsConfirmDelete, ButtonDelete, ButtonCancel } from './styles';


interface ModalConfirmDeleteProps {
  contactId: string;
  onClose: () => void;
}

const ModalConfirmDelete: React.FC<ModalConfirmDeleteProps> = ({ contactId, onClose}) => {
  const dispatch = useDispatch<AppDispatch>(); 

  async function handleDeleteItem() {
    dispatch(removeContact({ id: contactId }));
    messageSuccess("Registro excluído com sucesso.")
    onClose()
  }

  return (
    <div
      className="backdrop"
      style={{ display: 'flex' }}
    >
      <ContainerModalDelete className="container-modal-delete">     

        <h2>Confirma a exclusão?</h2>
        <span>Deseja excluir o contato?</span>
        <ButtonsConfirmDelete className="buttons-confirm">
          <ButtonDelete
            className="btn btn-positive btn-confirm-delete"
            onClick={handleDeleteItem}
          >
            EXCLUIR
          </ButtonDelete>
          <ButtonCancel
            className="btn btn-negative btn-cancel-delete"
            onClick={onClose}
          >
            CANCELAR
          </ButtonCancel>
        </ButtonsConfirmDelete>
      </ContainerModalDelete>
    </div>
  );
}

export default ModalConfirmDelete;
