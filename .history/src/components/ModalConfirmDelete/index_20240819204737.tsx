// src/components/ModalConfirmDelete.tsx
import React from 'react';
import CloseIcon from '../../assets/close-icon.svg';
import { Contact } from '../../types/Contacts';
import './styles.css';


interface ModalConfirmDeleteProps {
  contactId: string | null;
  onClose: () => void;
}


const ModalConfirmDelete: React.FC<ModalConfirmDeleteProps> = ({ contactId, onClose}) => {
  async function handleDeleteItem() {

    dispatch(removeContact({ id }));
    messageSuccess("Registro excluído com sucesso.")

    const { id } = itemToDelete;
    
  }

  return (
    <div
      className="backdrop"
      style={{ display: 'flex' }}
    >
      <div className="container-modal-delete">     

        <h2>Confirma a exclusão?</h2>
        <span>Deseja excluir o contato?</span>
        <div className="buttons-confirm">
          <button
            className="btn btn-positive btn-confirm-delete"
            onClick={handleDeleteItem}
          >
            EXCLUIR
          </button>
          <button
            className="btn btn-negative btn-cancel-delete"
            onClick={onClose}
          >
            CANCELAR
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalConfirmDelete;
