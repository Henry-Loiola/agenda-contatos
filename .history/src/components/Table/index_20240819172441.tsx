import { useState } from 'react';
import DeleteIcon from '../../assets/delete-icon.svg';
import EditIcon from '../../assets/edit-icon.svg';
import './styles.css';
import ModalConfirmDelete from '../ModalConfirmDelete';
import { Contact } from '../../types/Contacts';



function Table() {

  const contactsVazio = {
    id: '',
    nome: '',
    email: '',
    telefone: ''
  }

  
  const [currentContact, setCurrentContact] = useState<Contact>(contactsVazio)
  const [open, setOpen] = useState(false);

  function handleEditContact() {
    console.log("Edit")
  
  }

  function handleDelete(id: number) {
  
  }

  function handleDeleteContact(item: Contact) {
    setCurrentContact(item)
    setOpen(true);
  }

  return (
    <div className="container-table">
      <div className="header-table">
        <strong>Nome</strong>
        <strong>Email</strong>
        <strong>Telefone</strong>
      </div>
      <div className="body-table">
        {allContacts.map(item => (
          <div className="line-table" key={item.id}>
            <span>{item.nome}</span>
            <span>{item.email}</span>
            <span>{item.phone}</span>
            <div className="action-buttons">
              <img
                src={EditIcon}
                alt="Edit Icon"
                onClick={() => handleEditContact()}
              />
              <img
                src={DeleteIcon}
                alt="Delete Icon"
                onClick={() => handleDeleteContact(item)}
              />
            </div>
          </div>
        ))
        }
      </div >
      <ModalConfirmDelete
        open={open}
        setOpen={setOpen}
        itemToDelete={currentContact}
        onDelete={handleDelete}
      />
    </div >
  );
}

export default Table;
