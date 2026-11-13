import { DataSource } from 'typeorm';
import { User } from '../entities/User';
import { Product } from '../entities/Product';
import { Order } from '../entities/Order';
import { Cart } from '../entities/Cart';
import { Payment } from '../entities/Payment';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USER || 'aliza',
  password: process.env.DB_PASSWORD || 'aliza_secret',
  database: process.env.DB_NAME || 'aliza_wears',
  entities: [User, Product, Order, Cart, Payment],
  synchronize: process.env.NODE_ENV !== 'production',
  logging: process.env.NODE_ENV === 'development',
});

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((error) => {
    console.error('Error during Data Source initialization', error);
  });
