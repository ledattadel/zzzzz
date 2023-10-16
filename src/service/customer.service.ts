import { getRepository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Customer } from '../model/index';
import messages from '../messageResponse.js'

class CustomerService {
  // GET_ALL
  async getAll(_, res) {
    try {
      const customers = await AppDataSource.getRepository(Customer).find({ where: { isActive: true } });
      return res.json(customers);
    } catch (error) {
      return res.status(500).json({ error: messages.internalServerError });
    }
  }


  // CREATE
  async create(req, res) {
    const customerRepo = AppDataSource.getRepository(Customer);
    const { name, address, phoneNumber } = req.body;
    if (!name || !phoneNumber) {
      return res.status(400).json({
        code: 400,
        message: messages.customerMissingNameAndPhoneNumber,
      });
    }

    try {
      const existingCustomer = await customerRepo.findOne({
        where: { phoneNumber },
      });

      if (existingCustomer) {
        return res.status(400).json({
          code: 400,
          message: messages.findExistingCustomerWhenCreate,
        });
      }

      const customer = new Customer();
      customer.name = name;
      customer.address = address || null;
      customer.phoneNumber = phoneNumber;
      customer.isActive = true;

      await customerRepo.save(customer);
      return res.status(200).json({ message: messages.createCustomerSuccessful });
    } catch (error) {
      return res.status(500).json({ error: messages.internalServerError });
    }
  }
// GET_BY_ID
async getById(req, res) {
  try {
    const customerId = req.params.id;
    const customer = await AppDataSource.getRepository(Customer).findOne({where:{CustomerID: customerId, isActive: true}});

    if (!customer) {
      return res.status(404).json({ message: messages.notFound});
    }

    return res.json(customer);
  } catch (error) {
    return res.status(500).json({ error: messages.internalServerError});
  }
}

 // GET_BY_PHONE_NUMBER
 async getByPhoneNumber(req, res) {
  try {
    const phoneNumber = req.params.phoneNumber;
    const customer = await AppDataSource.getRepository(Customer).findOne({ where: { phoneNumber: phoneNumber,  isActive: true } });

    if (!customer) {
      return res.status(404).json({ message: messages.notFound });
    }

    return res.json(customer);
  } catch (error) {
    return res.status(500).json({ error: Error });
  }
 
}


  // UPDATE
  async updateCustomer(req, res) {
    const customerRepo = AppDataSource.getRepository(Customer);
    const customerId = req.params.id;
    const { name, address, phoneNumber } = req.body;
    
    try {
      const customer = await customerRepo.findOne(customerId);

      if (!customer) {
        return res.status(404).json({ message: messages.notFound });
      }

      customer.name = name || customer.name;
      customer.address = address || customer.address;
      customer.phoneNumber = phoneNumber || customer.phoneNumber;

      await customerRepo.save(customer);
      return res.status(200).json({ message: messages.updateCustomerSuccessful });
    } catch (error) {
      return res.status(500).json({ error: messages.internalServerError});
    }
  }

  async deleteCustomer(req, res) {
    const customerRepo =  AppDataSource.getRepository(Customer);
    const customerId = req.params.id;

    try {
      const customer = await customerRepo.findOne(customerId);

      if (!customer) {
        return res.status(404).json({ message: messages.notFound });
      }

      customer.isActive = false;
      await customerRepo.save(customer);
      return res.status(200).json({ message: messages.deleteCustomerSuccessful });
    } catch (error) {
      return res.status(500).json({ error: messages.internalServerError });
    }
  }




}

export default new CustomerService();
