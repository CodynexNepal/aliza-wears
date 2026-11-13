import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';
import { validate } from '../middleware/validate';
import { RegisterDto, LoginDto } from '../dto/auth.dto';

const router = Router();
const authController = new AuthController();

router.post('/register', validate(RegisterDto), authController.register);
router.post('/login', validate(LoginDto), authController.login);

export default router;
