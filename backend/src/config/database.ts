import { DataSource } from 'typeorm';
import { Product } from '../entities/Product';
import { User } from '../entities/User';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [Product, User],
  synchronize: true,
  logging: true,
});