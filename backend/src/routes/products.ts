import { Router } from 'express';
import { ProductController } from '../controllers/ProductController';
import { validate } from '../middleware/validate';
import { CreateProductDto } from '../dto/CreateProductDto';

const router = Router();
const productController = new ProductController();

router.post('/', validate(CreateProductDto), (req, res, next) => {
  productController.create(req, res, next);
});

router.get('/', (req, res, next) => {
  productController.findAll(req, res, next);
});

router.get('/:id', (req, res, next) => {
  productController.findById(req, res, next);
});

export const productRoutes = router;