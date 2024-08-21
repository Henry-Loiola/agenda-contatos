// src/components/ModalConfirmDelete.tsx
import React from 'react';
import CloseIcon from '../../assets/close-icon.svg';
import './styles.css';

// Definir a interface para a prop `itemToDelete`
interface ItemToDelete {
  id: number;
  name: string;
}

interface contactsAll {
  id: number;
  nome: string;
  email: string;
  telefone: string;

}

// Definir a interface para as props do componente
interface ModalConfirmDeleteProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  itemToDelete: ItemToDelete;
}

const ModalConfirmDelete: React.FC<ModalConfirmDeleteProps> = ({ open, setOpen, itemToDelete }) => {
  async function handleDeleteItem() {
    const { id } = itemToDelete;

    // Lógica para deletar o item (a ser implementada)

    setOpen(false);
  }

  return (
    <div
      className="backdrop"
      style={{ display: open ? 'flex' : 'none' }}
    >
      <div className="container-modal-delete">
        <img
          src={CloseIcon}
          alt="Close Icon"
          className="close-icon"
          onClick={() => setOpen(false)}
        />

        <h2>Confirma a exclusão?</h2>
        <span>Deseja excluir o contato, {itemToDelete.name}?</span>
        <div className="buttons-confirm">
          <button
            className="btn btn-positive btn-confirm-delete"
            onClick={handleDeleteItem}
          >
            EXCLUIR
          </button>
          <button
            className="btn btn-negative btn-cancel-delete"
            onClick={() => setOpen(false)}
          >
            CANCELAR
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalConfirmDelete;
