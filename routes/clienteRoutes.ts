import { Router } from 'express';
import { criarCliente } from '../src/controllers/clienteController';

const router = Router();

router.post('/', criarCliente);

export default router;

