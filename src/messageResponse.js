
const messages = {
  // STAFF
  accountExists: 'This account already exists, please enter a different username.',
  idCardExists: 'This ID card number is already in use, please enter a different one.',
  emailExists: 'This email address is already in use, please enter a different one.',
  roleNameNotExist: 'Role name does not exist in the system',
  roleExists: 'This Role is already in use, please enter a different one.',
  badRequest: 'Bad Request: The request is missing data or malformed.',
  unauthorized: 'Unauthorized: Access is denied due to invalid credentials.',
  notFound: 'Not Found: The requested resource was not found.',  
  created: 'Created',
  internalServerError: 'Internal Server Error: Something went wrong on the server.',
  missingRoleName:'The following fields are missing: roleName',
  accountNotFoundWhenSignIn: 'No account found with this username',
  wrongPasswordWhenSignIn:'Incorrect password, please try again',
  missingToken:'Unauthorized: Token is missing',
  invalidToken:'Unauthorized: Invalid token',
  UnauthorizedUser:'Unauthorized: User is not authenticated',
  notAdminRole:'Forbidden: User does not have admin role',
  notManageRole:'Forbidden: User does not have Manage role',
  notTechnicianRole:'Forbidden: User does not have Technician role',
  notAdminOrManageRole:'Forbidden: User does not have manage or admin role',
  missingStaffIDWhenUpdate:'Staff ID is missing in the request',
  // CUSTOMER
  customerMissingNameAndPhoneNumber:'Missing required fields: name and phone-number',
  findExistingCustomerWhenCreate:'A customer with the same phone number already exists',
  createCustomerSuccessful:'Customer created successfully',
  updateCustomerSuccessful: 'Customer updated successfully',
  deleteCustomerSuccessful:'Customer deleted successfully',
  // SERVICE
  missingServiceFields:'Missing required fields: service name or price',
  findExistingServiceWhenCreate:'A Service with the same name already exists',
  createServiceSuccessful:'Service created successfully',
  updateServiceSuccessful: 'Service updated successfully',
  deleteServiceSuccessful:'Service deleted successfully',

};


export default messages;
