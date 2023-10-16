import { Router } from 'express';
import { RoleService } from '../service';

const router = Router();

//GET
router.get('/get-all', RoleService.getAll);


//POST
router.post('/create', RoleService.create);

export default router;
