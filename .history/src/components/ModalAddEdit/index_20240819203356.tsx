import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { addContact, updateContact } from '../../store/contactsSlice';
import './styles.css';
import { messageError, messageSuccess } from '../../helpers/toast';
import { isValidEmail } from '../../lib/validacaoemail';

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
      setPhone(existingContact.phone || '');
    }
  }, [existingContact]);

  const handleSubmit = () => {
    
    if (isValidEmail(email)){
      messageError("Email inválido.")
      
    }else{


    }
    if (contactId) {
      dispatch(updateContact({ id: contactId, name, email, phone }));
      messageSuccess("Contato editado com sucesso.")
    } else {
      const newId = new Date().getTime().toString(); 
      dispatch(addContact({ id: newId, name, email, phone }));
      messageSuccess("Contato registrado com sucesso.")
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
          onChange = {(e) => setPhone(e.target.value)}
        />

        <div className="buttons-confirm">
          <button type="button" onClick={onClose} className="btn btn-negative btn-cancel-insert">Cancelar</button>
          <button type="submit" className="btn btn-positive btn-confirm-insert">Adicionar</button>
        </div>
      </form>
    </div>
  );
};
export default ModalInsertAndEditContact;