import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { OrderItem } from './OrderItem';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column('float')
  price: number;

  @Column()
  sku: string;

  @Column('int')
  stock: number;

  @Column({ type: 'simple-array' })
  images: string[];

  @Column({ type: 'simple-array' })
  sizes: string[];

  @Column({ type: 'simple-array' })
  colors: string[];

  @OneToMany(() => OrderItem, (item) => item.product)
  items: OrderItem[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
