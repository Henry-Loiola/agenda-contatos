import { useState } from 'react';
import DeleteIcon from '../../assets/delete-icon.svg';
import EditIcon from '../../assets/edit-icon.svg';
import { useSelector } from 'react-redux';
import {  RootState } from '../../store/store';
import ModalInsertAndEditContact from '../ModalAddEdit';
import ModalConfirmDelete from '../ModalConfirmDelete';
import './styles';
import { ContainerTable, HeaderTable, BodyTable, LineTable, ActionButtons } from './styles';


function Table() {
  const contacts = useSelector((state: RootState) => state.contacts.contactsList);  
  const [editingContactId, setEditingContactId] = useState<string | null>(null);
  const [deleteContactId, setDeleteContactId] = useState<string | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalDelete, setModalDelete] = useState(false);

  function handleDeleteContact(id: string) {
    setDeleteContactId(id)
    setModalDelete(true)
    
  }
  const handleEdit = (id: string) => {
    setEditingContactId(id);
    setModalOpen(true);
  }

  return (
    <ContainerTable className="container-table">
      <HeaderTable className="header-table">
      <strong>Id</strong>
        <strong>Nome</strong>
        <strong>Email</strong>
        <strong>Telefone</strong>
      </HeaderTable>
      <BodyTable className="body-table">
        {Object.entries(contacts).map(([id, contact]) => (
          <LineTable className="line-table" key={id}>
            <span>{id}</span>
            <span>{contact.name}</span>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
            <ActionButtons className="action-buttons">
              <img
                src={EditIcon}
                alt="Edit Icon"
                onClick={() => handleEdit(id)}
              />
              <img
                src={DeleteIcon}
                alt="Delete Icon"
                onClick={() => handleDeleteContact(id)}
              />
            </ActionButtons>
          </LineTable>
        ))
        }
      </BodyTable >
      {isModalDelete && (
        <ModalConfirmDelete 
          contactId={deleteContactId!} 
          onClose={() => setModalDelete(false)} 
        />
      )} 
      {isModalOpen && (
        <ModalInsertAndEditContact 
          contactId={editingContactId} 
          onClose={() => setModalOpen(false)} 
        />
      )} 
    </ContainerTable >
  );
}

export default Table;
