import { AppDataSource } from '../config/database';
import { User, UserRole } from '../entities/User';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

export class AuthService {
  private userRepository = AppDataSource.getRepository(User);

  async register(data: any) {
    const existingUser = await this.userRepository.findOne({ where: { email: data.email } });
    if (existingUser) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = this.userRepository.create({
      email: data.email,
      password: hashedPassword,
      firstName: data.firstName,
      lastName: data.lastName,
      role: UserRole.CUSTOMER,
    });

    return this.userRepository.save(user);
  }

  async login(data: any) {
    const user = await this.userRepository.findOne({ where: { email: data.email } });
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(data.password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET || 'secret', {
      expiresIn: '1h',
    });

    return { token, user: { id: user.id, email: user.email, role: user.role } };
  }
}
