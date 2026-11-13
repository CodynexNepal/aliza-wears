import { Router } from 'express';
import { ProductController } from '../controllers/product.controller';
import { authenticate, authorize } from '../middleware/auth';
import { UserRole } from '../entities/User';
import { validate } from '../middleware/validate';
import { CreateProductDto } from '../dto/product.dto';

const router = Router();
const productController = new ProductController();

router.get('/', productController.findAll);
router.get('/:id', productController.findOne);
router.post(
  '/',
  authenticate,
  authorize(UserRole.ADMIN),
  validate(CreateProductDto),
  productController.create,
);

export default router;
