import { useState } from 'react';
import DeleteIcon from '../../assets/delete-icon.svg';
import EditIcon from '../../assets/edit-icon.svg';
import './styles.css';

interface contactsAll {
  id: number;
  nome: string;
  email: string;
  telefone: string;

}


function Table() {
 
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
  }]
)
  const [open, setOpen] = useState(false);
  const [handleEditContact] = useState() 
  

  

  function handleEditContact(contact) {
  
  
  }

  function handleDeleteContact(contact) {
    setCurrentContact(contact)
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
                onClick={() => handleEditContact(item)}
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
