import { Router } from 'express';

const router = Router();

import { createProducto, getProductos, getOneProducto, deleteProducto, updateProducto, getProductosByEmpresa } from '../controllers/producto.controller';

router.post('/', createProducto);
router.get('/', getProductos);
router.get('/:id', getOneProducto);
router.delete('/:id', deleteProducto);
router.put('/:id', updateProducto);
router.get('/empresa/idEmpresa', getProductosByEmpresa);

export default router;