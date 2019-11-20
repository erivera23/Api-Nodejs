import { Router } from 'express'; //importamos Router de express

const router = Router(); //variable para utilizar las propiedades de la clase Router

import { createCategoria, getCategorias, getOneCategoria, updateCategoria, deleteCategoria } from '../controllers/categoria.controller';

router.post('/', createCategoria);
router.get('/', getCategorias);
router.get('/:id', getOneCategoria);
router.put('/:id', updateCategoria);
router.delete('/:id', deleteCategoria);

export default router;