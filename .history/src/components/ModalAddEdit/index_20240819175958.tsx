import React, { useEffect, useState } from 'react';
import CloseIcon from '../../assets/close-icon.svg';
import './styles.css';
import { Contact } from '../../types/Contacts';

interface ModalInsertAndEditContactProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  itemToEdit: Contact | null;
  onSave: (contact: Contact) => void;
}

interface FormInputs {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const defaultValues: FormInputs = { id: 0, name: '', email: '', phone: '' };

const ModalInsertAndEditContact: React.FC<ModalInsertAndEditContactProps> = ({ open, setOpen, itemToEdit, onSave }) => {
  const [formInputs, setFormInputs] = useState<FormInputs>(itemToEdit || defaultValues);

  useEffect(() => {
    if (itemToEdit) {
      setFormInputs(itemToEdit); 
    } else {
      setFormInputs(defaultValues); 
    }
  }, [itemToEdit]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setFormInputs({ ...formInputs, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formInputs.name || !formInputs.email || !formInputs.phone) {
      console.log("Preencah todos os campos!");
      return;
    }

    onSave(formInputs);
    setOpen(false);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const body = {
      nome: formInputs.name,
      email: formInputs.email,
      phone: formInputs.phone,
    };

    // if (result) {
    //   setOpen(false);
    // }
  };

  return (
    <div
      className="backdrop"
      style={{ display: open ? 'flex' : 'none' }}
    >
      <form onSubmit={handleSubmit} className="container-modal-insert">
        <img
          src={CloseIcon}
          alt="Close Icon"
          className="close-icon"
          onClick={() => setOpen(false)}
        />
        {/* <h2>{currentContact ? 'Editar contato' : 'Novo Contato'}</h2> */}

        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={formInputs.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formInputs.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Telefone"
          value={formInputs.phone}
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