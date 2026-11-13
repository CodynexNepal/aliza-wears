import { Request, Response } from 'express';
import { ProductService } from '../services/product.service';

export class ProductController {
  private productService = new ProductService();

  async create(req: Request, res: Response) {
    try {
      const product = await this.productService.create(req.body);
      res.status(201).json(product);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const products = await this.productService.findAll();
      res.json(products);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async findOne(req: Request, res: Response) {
    try {
      const product = await this.productService.findOne(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}
