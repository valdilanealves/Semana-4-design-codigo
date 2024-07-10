import { Router } from 'express';
import { criarGerente, abrirContaCorrente } from '../src/controllers/gerenteController';

const router = Router();

router.post('/', criarGerente);
router.post('/contaCorrente', abrirContaCorrente);

export default router;