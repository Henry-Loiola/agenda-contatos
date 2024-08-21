import { useState } from 'react';
import DeleteIcon from '../../assets/delete-icon.svg';
import EditIcon from '../../assets/edit-icon.svg';
import ModalConfirmDelete from '../ModalConfirmDelete';
import { useSelector, useDispatch } from 'react-redux';
import { Contact } from '../../types/Contacts';
import { AppDispatch, RootState } from '../../store/store';
import { removeContact } from '../../store/contactsSlice';
import './styles.css';



function Table() {

  const contactsVazio = {
    id: '',
    nome: '',
    email: '',
    telefone: ''
  }

  const contacts = useSelector((state: RootState) => state.contacts.contactsList);
  const dispatch = useDispatch<AppDispatch>();

  
  const [currentContact, setCurrentContact] = useState<Contact>(contactsVazio)
  const [open, setOpen] = useState(false);

  function handleDelete(item: Contact) {
    
  
  }

  function handleEditContact() {
    console.log("Edit")
  
  }



  function handleDeleteContact(id: string) {
    dispatch(removeContact({ id: item.id }));
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
        {Object.entries(contacts).map(([id, contact]) => (
          <div className="line-table" key={id}>
            <span>{contact.name}</span>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
            <div className="action-buttons">
              <img
                src={EditIcon}
                alt="Edit Icon"
                onClick={() => handleEditContact()}
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