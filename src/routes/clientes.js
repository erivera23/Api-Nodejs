import Router from 'express';

const router = Router();

import { createCliente, getClientes, getOneCliente, updateCliente } from '../controllers/cliente.controller';

router.post('/', createCliente);
router.get('/', getClientes);
router.get('/:id', getOneCliente);
router.put('/:id', updateCliente);

export default router;