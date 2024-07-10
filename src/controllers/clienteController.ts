import { Request, Response } from 'express';
import { Cliente } from './models/cliente';

export const criarCliente = (req: Request, res: Response) => {
    const { nomeCompleto, id, endereco, telefone } = req.body;
    const cliente = new Cliente(nomeCompleto, id, endereco, telefone);
    res.status(201).json(cliente);
};

