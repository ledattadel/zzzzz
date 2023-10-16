import { Router } from 'express';
import { StaffService } from '../service';
import { authenticateJwt, checkAdminRole, checkTechnicianRole, checkManageRole, checkManageAnhAdminRole } from '../middlewares';

const router = Router();
router.get('/get-all',authenticateJwt,checkAdminRole, StaffService.getAllUser); 

router.get('/get-all-manage',authenticateJwt,checkManageAnhAdminRole,StaffService.getAllManage);

router.get('/get-all-technicians',authenticateJwt,checkManageAnhAdminRole, StaffService.getAllTechnicians);

router.get('/get-role-name/:username', StaffService.getRoleNameByUsername);

// //POST
router.post('/create',authenticateJwt,checkAdminRole, StaffService.createStaff)	// createStaff
router.post('/sign-in', StaffService.signIn)	// sign in
// router.post('/forgot-password', accountService.forgotPassword)	// forgot password


// //PATCH - Update
router.put('/update/:staffId', authenticateJwt, StaffService.updateStaff);

// //DELETE
router.delete('/delete/:staffId', authenticateJwt, checkAdminRole, StaffService.deleteStaff);

export default router;
