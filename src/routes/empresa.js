import { Router } from 'express';

import path from 'path';
import multer from 'multer';

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './src/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage });
var type = upload.single('file');

const router = Router();

import { createEmpresa, getEmpresas, getOneEmpresa, updateEmpresa, getEmpresasByCategoria } from '../controllers/empresa.controller';

router.post('/', type, createEmpresa);
router.get('/', getEmpresas);
router.get('/:id', getOneEmpresa);
router.put('/:id', updateEmpresa);
router.get('/categorias/:idcategoria', getEmpresasByCategoria);

export default router;