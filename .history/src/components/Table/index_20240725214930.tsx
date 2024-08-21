import { useState } from 'react';
import DeleteIcon from '../../assets/delete-icon.svg';
import EditIcon from '../../assets/edit-icon.svg';
import './styles.css';
import ModalConfirmDelete from '../ModalConfirmDelete';


function Table() {

  const contactsVazio = {
    id: 0,
    nome: '',
    email: '',
    telefone: ''
  
  }

  
  const [currentContact, setCurrentContact] = useState<>(contactsVazio)
  const [allContacts, setAllContacts] = useState<contactsAll[]>([{
    id: 1,
    nome: "Maxwell",
    email: "max@gmail.com",
    telefone: "6666666"
  },
  {
    id: 2,
    nome: "Henry",
    email: "henr@gmail.com",
    telefone: "999999"
  },
  {
    id: 2,
    nome: "Henry",
    email: "henr@gmail.com",
    telefone: "999999"
  }]
)
  const [open, setOpen] = useState(false);

  function handleEditContact() {
    console.log("Edit")
  
  }

  function handleDeleteContact(item: contactsAll) {
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
            <span>{item.telefone}</span>
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
      />
    </div >
  );
}

export default Table;
