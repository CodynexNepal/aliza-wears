import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

export class AuthController {
  private authService = new AuthService();

  async register(req: Request, res: Response) {
    try {
      const user = await this.authService.register(req.body);
      res.status(201).json({ message: 'User registered successfully', user });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const result = await this.authService.login(req.body);
      res.json(result);
    } catch (error: any) {
      res.status(401).json({ message: error.message });
    }
  }
}
