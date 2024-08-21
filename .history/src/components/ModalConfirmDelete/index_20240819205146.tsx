// src/components/ModalConfirmDelete.tsx
import React from 'react';
import CloseIcon from '../../assets/close-icon.svg';
import { Contact } from '../../types/Contacts';
import './styles.css';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { removeContact } from '../../store/contactsSlice';
import { messageSuccess } from '../../helpers/toast';


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
