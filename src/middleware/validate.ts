import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { Request, Response, NextFunction } from 'express';

export const validate = (dto: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const instance = plainToInstance(dto, req.body);
    validate(instance).then((errors) => {
      if (errors.length > 0) {
        const errorMessages = errors.map((err) => Object.values(err.constraints || {})).flat();
        return res.status(400).json({ message: 'Validation failed', errors: errorMessages });
      }
      req.body = instance;
      next();
    });
  };
};
