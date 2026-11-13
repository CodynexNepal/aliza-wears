import { Request, Response, NextFunction } from 'express';
import { AppDataSource } from '../config/database';
import { Repository } from 'typeorm';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
class IdempotencyKey {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  key: string;

  @Column('text')
  response: string;

  @CreateDateColumn()
  createdAt: Date;
}

export const idempotency = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const key = req.headers['idempotency-key'] as string;
    if (!key) {
      return next();
    }

    const repo = AppDataSource.getRepository(IdempotencyKey);
    const existing = await repo.findOne({ where: { key } });

    if (existing) {
      return res.json(JSON.parse(existing.response));
    }

    const originalJson = res.json;
    res.json = (body: any) => {
      const response = JSON.stringify(body);
      repo.save({ key, response }).catch(console.error);
      originalJson.call(res, body);
    };

    next();
  };
};
