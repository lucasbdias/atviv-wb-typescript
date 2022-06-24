import React from 'react';
import './App.css';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import Clientes from './pages/cliente';
import CadastroClientes from './pages/cadastro';

function App() {
  return (
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
