import { useState } from 'react';
import DeleteIcon from '../../assets/delete-icon.svg';
import EditIcon from '../../assets/edit-icon.svg';
import { useSelector, useDispatch } from 'react-redux';
import { Contact } from '../../types/Contacts';
import { AppDispatch, RootState } from '../../store/store';

import ModalInsertAndEditContact from '../ModalAddEdit';
import './styles.css';

import ModalConfirmDelete from '../ModalConfirmDelete';


function Table() {
  const contacts = useSelector((state: RootState) => state.contacts.contactsList);
  const dispatch = useDispatch<AppDispatch>();
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
    <div className="container-table">
      <div className="header-table">
        <strong>Nome</strong>
        <strong>Email</strong>
        <strong>Telefone</strong>
      </div>
      <div className="body-table">
        {Object.entries(contacts).map(([id, contact]) => (
          <div className="line-table" key={id}>
            <span>{contact.name}</span>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
            <div className="action-buttons">
             
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
            </div>
          </div>
        ))
        }
      </div >
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
    </div >
  );
}

export default Table;