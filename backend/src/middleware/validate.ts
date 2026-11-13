import { Request, Response, NextFunction } from 'express';
import { plainToInstance } from 'class-transformer';
import { validate as validateObject, ValidationError } from 'class-validator';

export const validate = (dto: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const instance = plainToInstance(dto, req.body);
    const errors: ValidationError[] = await validateObject(instance);
    if (errors.length > 0) {
      const messages = errors.map((err) => Object.values(err.constraints || {})).flat();
      return res.status(400).json({ message: 'Validation failed', errors: messages });
    }
    req.body = instance;
    next();
  };
};