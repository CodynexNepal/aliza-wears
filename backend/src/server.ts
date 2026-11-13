import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { AppDataSource } from './config/database';
import { healthCheck } from './routes/health';
import { productRoutes } from './routes/products';
import { errorHandler } from './middleware/errorHandler';
import { idempotencyMiddleware } from './middleware/idempotency';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(idempotencyMiddleware);

app.use('/health', healthCheck);
app.use('/api/products', productRoutes);

app.use(errorHandler);

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Aliza Wears Backend running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
    process.exit(1);
  });

export default app;