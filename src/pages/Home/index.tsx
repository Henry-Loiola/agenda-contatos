import React, { useState } from 'react';
import Header from '../../components/Header';
import Table from '../../components/Table';
import './styles';
import { ContainerHome, ContentHome, BtnAdicionar } from './styles';
import ModalInsertAndEditContact from '../../components/ModalAddEdit';

const Home: React.FC = () => {

  const [isModalOpen, setModalOpen] = useState(false);
  const [editingContactId, setEditingContactId] = useState<string | null>(null);

  const handleAdd = () => {
    setEditingContactId(null);
    setModalOpen(true);
  };

  return (
    <ContainerHome className="container-home">
      <Header />
      <ContentHome className="content-home">
        <BtnAdicionar
          className="btn btn-positive btn-adicionar"
          onClick={handleAdd}>
          Adicionar
        </BtnAdicionar>
        <Table />
      </ContentHome>
      {isModalOpen && (
        <ModalInsertAndEditContact 
          contactId={editingContactId} 
          onClose={() => setModalOpen(false)} 
        />
      )}     
    </ContainerHome>
  );
}

export default Home;



