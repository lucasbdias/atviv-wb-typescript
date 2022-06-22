import { Response, Request } from "express";
import { AppDataSource } from "config/database";
import { Cliente } from "../models/Cliente";
import { Endereco } from "models/Endereco";

const repositorioCliente = AppDataSource.getRepository(Cliente);

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
    res.json({error: 'num deu'});
  }
}

const retornoCliente = async (req:Request, res: Response) => {
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
    res.json({error: 'num deu'});
  }
}

// const criarCliente = async ()

export { listagemTodosClientes, retornoCliente }
