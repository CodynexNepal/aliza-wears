import { AuthService } from '../services/auth.service';
import { AppDataSource } from '../config/database';
import { User, UserRole } from '../entities/User';

jest.mock('../config/database');

describe('AuthService', () => {
  let authService: AuthService;
  let userRepository: any;

  beforeEach(() => {
    authService = new AuthService();
    userRepository = AppDataSource.getRepository(User);
    jest.spyOn(userRepository, 'findOne').mockResolvedValue(null);
    jest.spyOn(userRepository, 'create').mockImplementation((data) => data);
    jest.spyOn(userRepository, 'save').mockImplementation((data) => Promise.resolve(data));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should register a new user', async () => {
    const data = {
      email: 'test@example.com',
      password: 'password123',
      firstName: 'Test',
      lastName: 'User',
    };

    const user = await authService.register(data);
    expect(user.email).toBe(data.email);
    expect(user.role).toBe(UserRole.CUSTOMER);
  });

  it('should login a user', async () => {
    const data = {
      email: 'test@example.com',
      password: 'password123',
    };

    const mockUser = {
      id: '1',
      email: data.email,
      password: '$2b$10$hashedpassword',
      role: UserRole.CUSTOMER,
    };

    userRepository.findOne.mockResolvedValue(mockUser);
    const result = await authService.login(data);
    expect(result.token).toBeDefined();
    expect(result.user.email).toBe(data.email);
  });
});
