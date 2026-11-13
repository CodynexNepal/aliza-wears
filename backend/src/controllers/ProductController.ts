import { Request, Response, NextFunction } from 'express';
import { ProductService } from '../services/ProductService';
import { CreateProductDto } from '../dto/CreateProductDto';

export class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = req.body as CreateProductDto;
      const product = await this.productService.create(dto);
      res.status(201).json(product);
    } catch (err) {
      next(err);
    }
  }

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await this.productService.findAll();
      res.json(products);
    } catch (err) {
      next(err);
    }
  }

  async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const product = await this.productService.findById(id);
      res.json(product);
    } catch (err) {
      next(err);
    }
  }
}