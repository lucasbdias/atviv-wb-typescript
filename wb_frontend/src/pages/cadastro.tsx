import 'materialize-css/dist/css/materialize.min.css'
import '../styles/cadastro.css'
import  Navbar  from '../components/nav';



function CadastroClientes (){
        return (
            <> 
                <Navbar/>
                <div className='topo'>
                        <div className="row box">
                                <h4 className='subtitulo margin_left'>Cadastro de Cliente</h4>
                                <div className="row">
                                    <form className="col s12">
                                        <div className="row">
                                            <div className="input-field col s6">
                                                <input id="icon_prefix " type="text" className="validate" placeholder="Nome"/>                                           
                                            </div>
                                            <div className="input-field col s6">
                                                <input id="icon_prefix " type="text" className="validate" placeholder= "Sobrenome"/>
                                            </div>
                                            <div className="input-field col s6">
                                                <label>Endereço</label>
                                            </div>
                                            <div className="input-field col s6">
                                                <input id="telefone" type="text" className="validate" placeholder= "Estado"/>
                                            </div>
                                            <div className="input-field col s6">
                                                <input type="text" className="validate" placeholder= "Cidade"/>
                                            </div>
                                            <div className="input-field col s6">
                                                <input type="text" className="validate" placeholder= "Bairro"/>
                                            </div>
                                            <div className="input-field col s6">
                                                <input type="text" className="validate" placeholder= "Rua"/>
                                            </div>
                                            <div className="input-field col s6">
                                                <input type="text" className="validate" placeholder= "Número"/>
                                            </div>
                                            <div className="input-field col s6">
                                                <input type="text" className="validate" placeholder= "Código Postal"/>
                                            </div>
                                            <div className="input-field col s6">
                                                <input type="text" className="validate" placeholder= "Informações Adicionais" />
                                            </div>
                                            <div className="row">
                                                <div className="col s12">
                                                    <button className='btn waves-effect waves-light botao' type="submit" name="action">Cadastrar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>                       
                        </div>
                        <br />
                </div>
            </>
        )
    }


export default CadastroClientes;