import { Router } from 'express';
import { crearProyecto, getProyectos, getProyecto, deleteProyecto, updateProyecto } from '../controllers/project.controller';

const router = Router();

// /api/projects/
router.post('/', crearProyecto);

//Seleccionar todos los proyectos
router.get('/', getProyectos);

//Seleccionar un proyecto where id=id
router.get('/:id', getProyecto);

//Eliminar un proyecto
router.delete('/:id', deleteProyecto);

router.put('/:id', updateProyecto);
export default router;