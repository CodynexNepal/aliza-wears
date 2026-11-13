import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

const idempotencyStore = new Map<string, { response: any; timestamp: number }>();
const TTL = parseInt(process.env.IDEMPOTENCY_TTL || '3600', 10) * 1000;

export const idempotencyMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const idempotencyKey = req.headers['idempotency-key'] as string;
  if (!idempotencyKey) {
    return next();
  }

  const existing = idempotencyStore.get(idempotencyKey);
  if (existing && Date.now() - existing.timestamp < TTL) {
    return res.json(existing.response);
  }

  const originalJson = res.json.bind(res);
  res.json = (body: any) => {
    idempotencyStore.set(idempotencyKey, { response: body, timestamp: Date.now() });
    return originalJson(body);
  };

  next();
};