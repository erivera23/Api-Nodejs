import { Router } from 'express';

const router = Router();

import { createEmpresa} from '../controllers/empresa.controller';

router.post('', createEmpresa);

export default router;