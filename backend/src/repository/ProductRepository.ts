import { AppDataSource } from '../config/database';
import { Product } from '../entities/Product';
import { CreateProductDto } from '../dto/CreateProductDto';

export class ProductRepository {
  private repository = AppDataSource.getRepository(Product);

  async create(dto: CreateProductDto): Promise<Product> {
    const product = this.repository.create(dto);
    return this.repository.save(product);
  }

  async findAll(): Promise<Product[]> {
    return this.repository.find();
  }

  async findById(id: string): Promise<Product | null> {
    return this.repository.findOneBy({ id });
  }
}