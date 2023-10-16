


import productDescription from './ProductDescription.route'
import manufacturer from './Manufacturer.route'
import mail from './Mail.route'
import StaffRoute from './Staff.route'
import CustomerRoute from './Customer.route'
import RoleRoute from './Role.route'
import Supplier from './Supplier.route'
const router = (app) => {

// OLD VERSION
	
	// app.use('/api/product', product);

	

	// app.use('/api/mail', mail);
	// app.use('/api/manufacturer', manufacturer);

	// app.use('/api/product-description', productDescription);

// NEW VERSION - DAT
	app.use('/api/staff',StaffRoute);
	app.use('/api/role', RoleRoute);
	app.use('/api/customer', CustomerRoute);
	app.use('/api/supplier',Supplier)

}

export default router;