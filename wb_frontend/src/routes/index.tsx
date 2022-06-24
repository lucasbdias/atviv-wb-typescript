import { BrowserRouter ,Route, Routes as RoutesWrapper } from 'react-router-dom';
import Clientes  from '../pages/cliente';
import CadastroClientes from '../pages/cadastro';
import User from '../pages/user';


function Routes() {
  return (
    //<BrowserRouter>
      <RoutesWrapper>
        <Route path="/" element={<Clientes />} />
        <Route path="/cadastro" element={<CadastroClientes />} />
        <Route path="/user/:id" element={<User />} />
      </RoutesWrapper>
    //</BrowserRouter>
  );
}

export default Routes;
