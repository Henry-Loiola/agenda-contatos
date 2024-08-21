import React, { useEffect, useState } from 'react';
import CloseIcon from '../../assets/close-icon.svg';
import './styles.css';
import { Contact } from '../../types/Contacts';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { addContact, updateContact } from '../../store/contactsSlice';

interface ContactModalProps {
    contactId: string | null;
    onClose: () => void;
}



const ModalInsertAndEditContact: React.FC<ContactModalProps> = ({ contactId, onClose }) => {

  const dispatch = useDispatch<AppDispatch>();  
  const existingContact = useSelector((state: RootState) => 
    contactId ? state.contacts.contactsList[contactId] : null
  );

  const [name, setName] = useState(existingContact?.name || '');
  const [email, setEmail] = useState(existingContact?.email || '');
  const [phone, setPhone] = useState(existingContact?.phone || '');
  

  useEffect(() => {
    if (existingContact) {
      setName(existingContact.name);
      setEmail(existingContact.email);
      setPhone(existingContact.phone);
    }
  }, [existingContact]);

  const handleSubmit = () => {
    if (contactId) {
      dispatch(updateContact({ id: contactId, name, email, phone }));
    } else {
      const newId = new Date().getTime().toString(); // Simples ID único
      dispatch(addContact({ id: newId, name, email, phone }));
    }
    onClose();
  };

  return (
    <div
      className="backdrop"
      style={{ display: 'flex' }}
    >
      <form onSubmit={handleSubmit} className="container-modal-insert">
        
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={name}
          onChange = {(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange = {(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          name="phone"
          placeholder="Telefone"
          value={phone}
          onChange={handleChange}
        />

        <div className="buttons-confirm">
          <button type="submit" className="btn btn-positive btn-confirm-insert">ADICIONAR</button>
          <button type="button" onClick={() => setOpen(false)} className="btn btn-negative btn-cancel-insert">LIMPAR</button>
        </div>
      </form>
    </div>
  );
};

export default ModalInsertAndEditContact;