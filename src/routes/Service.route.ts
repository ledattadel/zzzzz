import { Router } from 'express';
import { ServiceService } from '../service';

const router = Router();

// GET all services
router.get('/services', ServiceService.getAll);

// GET a service by ID
router.get('/services/:id', ServiceService.getById);

// CREATE a new service
router.post('/services', ServiceService.create);

// UPDATE a service by ID
router.put('/services/:id', ServiceService.update);

// DELETE a service by ID
router.delete('/services/:id', ServiceService.delete);

export default router;
