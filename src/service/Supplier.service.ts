import { AppDataSource } from '../data-source';
import { Supplier } from '../model/index';
import messages from '../messageResponse.js'

class SupplierService {
    // GET all suppliers
    async getAll(_, res) {
      try {
        const suppliers = await AppDataSource.getRepository(Supplier).find({ where: { isActive: true } });
        return res.json(suppliers);
      } catch (error) {
        return res.status(500).json({ error: messages.internalServerError });
      }
    }
  
    // GET a supplier by ID
    async getById(req, res) {
      try {
        const supplierId = req.params.id;
        const supplier = await AppDataSource.getRepository(Supplier).findOne({ where: { SupplierID: supplierId, isActive: true } });
  
        if (!supplier) {
          return res.status(404).json({ message: messages.notFound });
        }
  
        return res.json(supplier);
      } catch (error) {
        return res.status(500).json({ error: messages.internalServerError });
      }
    }
  
    // CREATE a new supplier
    async create(req, res) {
      try {
        const { SupplierName, SupPhone } = req.body;
  
        if (!SupplierName) {
          return res.status(400).json({
            code: 400,
            message: messages.missingFields,
          });
        }
  
        const supplierRepo = AppDataSource.getRepository(Supplier);
  
        const existingSupplier = await supplierRepo.findOne({
          where: { SupplierName },
        });
  
        if (existingSupplier) {
          return res.status(400).json({
            code: 400,
            message: messages.supplierExists,
          });
        }
  
        const supplier = new Supplier();
        supplier.SupplierName = SupplierName;
        supplier.SupPhone = SupPhone;
        supplier.isActive = true;
  
        await supplierRepo.save(supplier);
  
        return res.status(201).json({
          message: messages.created,
        });
      } catch (error) {
        return res.status(500).json({
          error: messages.internalServerError,
        });
      }
    }
  
    // UPDATE a supplier by ID
    async update(req, res) {
      try {
        const supplierId = req.params.id;
        const { SupplierName, SupPhone } = req.body;
  
        if (!SupplierName) {
          return res.status(400).json({
            code: 400,
            message: messages.missingFields,
          });
        }
  
        const supplierRepo = AppDataSource.getRepository(Supplier);
        const supplier = await supplierRepo.findOne({
          where: { SupplierID: supplierId },
        });
  
        if (!supplier) {
          return res.status(404).json({ message: messages.notFound });
        }
  
        supplier.SupplierName = SupplierName || supplier.SupplierName;
        supplier.SupPhone = SupPhone || supplier.SupPhone;
  
        await supplierRepo.save(supplier);
  
        return res.json({
          message: messages.updated,
        });
      } catch (error) {
        return res.status(500).json({
          error: messages.internalServerError,
        });
      }
    }
  
    // DELETE a supplier by ID
    async delete(req, res) {
      try {
        const supplierId = req.params.id;
        const supplierRepo = AppDataSource.getRepository(Supplier);
        const supplier = await supplierRepo.findOne({
          where: { SupplierID: supplierId },
        });
  
        if (!supplier) {
          return res.status(404).json({ message: messages.notFound });
        }
        supplier.isActive = false;
  
        await supplierRepo.save(supplier);
  
        return res.json({
          message: messages.deleted,
        });
      } catch (error) {
        return res.status(500).json({
          error: messages.internalServerError,
        });
      }
    }
  }
  
  export default new SupplierService();
  