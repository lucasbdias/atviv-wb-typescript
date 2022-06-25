import 'materialize-css/dist/css/materialize.min.css'
import '../styles/cadastro.css'
import  Navbar  from '../components/nav';
import { MdModeEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useEffect, useState, useCallback, SetStateAction } from 'react';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';

interface IEndereco {
    nome: string;
    sobreNome: string;
    id: number;
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: number;
    codigoPostal: string;
    informacoesAdicionais: string;
  }

function Clientes (){

    //const navigate = useNavigate(); 
    const [clientes, setClientes] = useState<IEndereco[]>([]);
  
    const getAllClientes = useCallback(() => {
      api
        .get('/clientes', {
        })
        .then(({ data }) => {
          console.log(data);
          setClientes(data);
        })
        .catch((error: Error | AxiosError) => {
          console.log(error);
        });
      setTimeout(() => {
      }, 5000);
    }, [setClientes]);
  
    useEffect(() => {
      getAllClientes();
    }, []);



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
                                        {clientes && clientes?.map(c => {
                                                    return (
                                                        <tr>
                                                            <td>{c.nome}</td>
                                                            <td>{c.sobreNome}</td>
{/*                                                             <td>{c.estado}</td>
                                                            <td>{c.cidade}</td>
                                                            <td>{c.bairro}</td>
                                                            <td>{c.rua}</td>
                                                            <td>{c.numero}</td>
                                                            <td>{c.codigoPostal}</td>
                                                            <td>{c.informacoesAdicionais}</td> */}
                                                            <td><Link className='edit' to="/user/:id"><MdModeEdit/></Link></td>
                                                        </tr>
                                                    )
                                                })}
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