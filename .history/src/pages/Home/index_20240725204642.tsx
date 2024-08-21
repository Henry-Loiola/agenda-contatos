import React from 'react';
import Header from '../../components/Header';
import Table from '../../components/Table';

import './styles.css';

const Home: React.FC = () => {

  return (
    <div className="container-home">
      <Header />
      <div className="content-home">
        <button
          className="btn btn-positive btn-adicionar"
          onClick={() => setOpenAddEditModal(true)}>
          Adicionar
        </button>
        <Table />
      </div>
    </div>
  );
}

export default Home;



