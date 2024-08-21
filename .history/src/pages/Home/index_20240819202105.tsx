import React, { useState } from 'react';
import Header from '../../components/Header';
import Table from '../../components/Table';
import './styles.css';
import ModalInsertAndEditContact from '../../components/ModalAddEdit';

const Home: React.FC = () => {

  const [isModalOpen, setModalOpen] = useState(false);
  const [editingContactId, setEditingContactId] = useState<string | null>(null);

  const handleAdd = () => {
    setEditingContactId(null);
    setModalOpen(true);
  };

  return (
    <div className="container-home">
      <Header />
      <div className="content-home">
        <button
          className="btn btn-positive btn-adicionar"
          onClick={handleAdd}>
          Adicionar
        </button>
        <Table />
      </div>
      {isModalOpen && (
        <ModalInsertAndEditContact 
          contactId={editingContactId} 
          onClose={() => setModalOpen(false)} 
        />
      )}     
    </div>
  );
}

export default Home;


