import { Response, Request } from "express";
import { AppDataSource } from "config/database";
import { v4 as uuidv4 } from 'uuid';

import { Cliente } from "../models/Cliente";
import { Endereco } from "models/Endereco";

interface IEndereco {
  id: number;
  estado: string;
  cidade: string;
  bairro: string;
  rua: string;
  numero: number;
  codigoPostal: string;
  informacoesAdicionais: string;
}

const repositorioCliente = AppDataSource.getRepository(Cliente);
const repositorioEndereco = AppDataSource.getRepository(Endereco);

const listagemTodosClientes = async (
  _: Request,
  res: Response
) => {
  try {
    const consultaClientes = await repositorioCliente
      .createQueryBuilder()
      .select(['c', 'e'])
      .from(Cliente, 'c')
      .leftJoin('c.endereco', 'e')
      .getMany();

    return res.json(consultaClientes);
  } catch (error) {
    res.json({ error: 'num deu' });
  }
}

const retornoCliente = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const consultaCliente = await repositorioCliente
      .createQueryBuilder()
      .select(['c', 'e'])
      .from(Cliente, 'c')
      .leftJoin('c.endereco', 'e')
      .where('c.id = :id', { id })
      .getOne();

    return res.json(consultaCliente);
  } catch (error) {
    res.json({ error: 'num deu' });
  }
}

const criarCliente = async (req: Request, res: Response) => {
  const { nome, sobreNome, endereco } = req.body;

  const registroEndereco = repositorioEndereco.create(endereco);
  await repositorioEndereco.save(registroEndereco);
  const registroEnderecoTipado = registroEndereco as unknown as IEndereco;

  const registroCliente = repositorioCliente.create({
    id: uuidv4(),
    nome,
    sobreNome,
    endereco: registroEnderecoTipado
  });
  await repositorioCliente.save(registroCliente);

  res.json(registroCliente);
}

const deletarCliente = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await repositorioCliente
      .createQueryBuilder()
      .delete()
      .from(Cliente)
      .where(
        "id = :id", {
        id
      })
      .execute();
    res.json({
      "message": "cliente deletado com sucesso"
    })
  } catch (error) {
    console.log(error);
  }
}

const atualizarCliente = async (req: Request, res: Response) => {
  try {
    const { nome, sobreNome, endereco } = req.body;
    const { id } = req.params;
    await repositorioCliente
      .createQueryBuilder()
      .update(Cliente)
      .set({
        nome,
        sobreNome
      })
      .where(
        "id = :id", {
        id
      }).
      execute();

    await repositorioEndereco
      .createQueryBuilder()
      .update(Endereco)
      .set(endereco)
      .where(
        "id = :id", {
        id: endereco.id
      }).
      execute();


    res.json({
      "message": `Cliente foi atualizado com sucesso`
    });
  } catch (error) {
    res.json(error);
  }
}

export {
  listagemTodosClientes,
  retornoCliente,
  criarCliente,
  deletarCliente,
  atualizarCliente
}
