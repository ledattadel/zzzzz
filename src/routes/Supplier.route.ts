import { Router } from 'express';
import {SupplierService} from '../service';

const router = Router();

// GET all suppliers
router.get('/suppliers', SupplierService.getAll);

// GET a supplier by ID
router.get('/suppliers/:id', SupplierService.getById);

// CREATE a new supplier
router.post('/suppliers', SupplierService.create);

// UPDATE a supplier by ID
router.put('/suppliers/:id', SupplierService.update);

// DELETE a supplier by ID
router.delete('/suppliers/:id', SupplierService.delete);

export default router;
