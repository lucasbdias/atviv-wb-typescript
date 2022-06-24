import { BrowserRouter ,Route, Routes as RoutesWrapper } from 'react-router-dom';
import Clientes  from '../pages/cliente';
import CadastroClientes from '../pages/cadastro';


function Routes() {
  return (
    //<BrowserRouter>
      <RoutesWrapper>
        <Route path="/" element={<Clientes />} />
        <Route path="/cadastro" element={<CadastroClientes />} />

      </RoutesWrapper>
    //</BrowserRouter>
  );
}

export default Routes;
