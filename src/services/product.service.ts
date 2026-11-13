import { AppDataSource } from '../config/database';
import { Product } from '../entities/Product';

export class ProductService {
  private productRepository = AppDataSource.getRepository(Product);

  async create(data: any) {
    const product = this.productRepository.create(data);
    return this.productRepository.save(product);
  }

  async findAll() {
    return this.productRepository.find();
  }

  async findOne(id: string) {
    return this.productRepository.findOne({ where: { id } });
  }
}
