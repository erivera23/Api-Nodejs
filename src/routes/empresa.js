import { Router } from 'express';

const router = Router();

import { createEmpresa, getEmpresas, getOneEmpresa, updateEmpresa, getEmpresasByCategoria} from '../controllers/empresa.controller';

router.post('/', createEmpresa);
router.get('/', getEmpresas);
router.get('/:id', getOneEmpresa);
router.put('/:id', updateEmpresa);
router.get('categorias/idcategoria', getEmpresasByCategoria);

export default router;