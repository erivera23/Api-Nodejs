import Router from 'express';

const router = Router();

import { createRepartidor, getRepartidores, getOneRepartidor, updateRepartidor, updateEstadoRepartidor, deleteRepartidor } from '../controllers/repartidores.controller';

router.post('/', createRepartidor);
router.get('/', getRepartidores);
router.get('/:id', getOneRepartidor);
router.put('/:id', updateRepartidor);
router.put('/estado/:id', updateEstadoRepartidor);
router.delete('/:id', deleteRepartidor);

export default router;