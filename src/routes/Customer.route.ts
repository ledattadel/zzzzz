import { Router } from 'express';
import { CustomerService } from '../service';
import { authenticateJwt, checkAdminRole, checkTechnicianRole, checkManageRole, checkManageAnhAdminRole } from '../middlewares';

const router = Router();

router.get('',authenticateJwt,checkManageAnhAdminRole, CustomerService.getAll); 
router.post('',authenticateJwt,checkManageAnhAdminRole, CustomerService.create); 
router.put('/:id',authenticateJwt,checkManageAnhAdminRole, CustomerService.updateCustomer); 
router.delete('/:id',authenticateJwt,checkManageAnhAdminRole, CustomerService.deleteCustomer); 
router.get('/:id', authenticateJwt,checkManageAnhAdminRole, CustomerService.getById);
router.get('/phone/:phoneNumber',authenticateJwt,checkManageAnhAdminRole, CustomerService.getByPhoneNumber); 

export default router;
