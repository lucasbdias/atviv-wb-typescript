import 'materialize-css/dist/css/materialize.min.css'
import '../styles/cadastro.css'
import  Navbar  from '../components/nav';
import { MdModeEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';


type props = {
    tema: string
}

function Clientes (){
        return (
            <> 

                <Navbar/>
                <div className="cliente">
                    <br />
                    <br />
                    <main>
                        <div>
                            <br />
                            <div className='col s12 m12 l6 estilo'>
                                <div className="box">
                                    <h4 className='margin_left'>Clientes</h4>
                                    <table className="responsive-table highlight">
                                        <thead>
                                            <tr>
                                                <th>Nome</th>
                                                <th>Sobrenome</th>
                                                <th>Editar</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Lucas Braz</td>
                                                <td>lucas.b@gmail.com</td>
                                                <td><Link className='edit' to="/user/:id"><MdModeEdit/></Link></td>
                                            </tr>
                                            <tr>
                                                <td>Gabriel Bicho Nnes</td>
                                                <td>gabriel.nunes@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <td>Lucas Ferreira</td>
                                                <td>lucas.ferreira@gmail.com</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <br />
                        </div>
                        <br />
                    </main>
                </div>

            </>
        )
    }


export default Clientes;