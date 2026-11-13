import { ProductRepository } from '../repository/ProductRepository';
import { CreateProductDto } from '../dto/CreateProductDto';

export class ProductService {
  private productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();
  }

  async create(dto: CreateProductDto) {
    return this.productRepository.create(dto);
  }

  async findAll() {
    return this.productRepository.findAll();
  }

  async findById(id: string) {
    return this.productRepository.findById(id);
  }
}