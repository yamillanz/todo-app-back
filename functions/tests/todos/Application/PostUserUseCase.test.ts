import { PostUserUseCase } from '../../../src/todos/Application/PostUserUseCase';
import { UserRepository } from '../../../src/todos/Domain/UserRepository';
import { User } from '../../../src/todos/Domain/User';
import { UserDto } from '../../../src/todos/Infraestructure/UserDto';

describe('PostUserUseCase', () => {
  let userRepository: jest.Mocked<UserRepository>;
  let postUserUseCase: PostUserUseCase;

  beforeEach(() => {
    userRepository = {
      save: jest.fn(),
      getOne: jest.fn(),
    } as jest.Mocked<UserRepository>;

    postUserUseCase = new PostUserUseCase(userRepository);
  });

  it('should initialize with a UserRepository', () => {
    expect(postUserUseCase).toBeTruthy();
    expect(postUserUseCase['repository']).toBe(userRepository);
  });

  it('should save a new user with generated UUID and creation date', async () => {
    const userDto: UserDto = { email: 'test@example.com' };
    const savedUser: User = new User('generated-uuid', 'test@example.com', '2023-01-01T00:00:00.000Z');
    userRepository.save.mockResolvedValue(savedUser);

    const result = await postUserUseCase.saveUser(userDto);

    expect(userRepository.save).toHaveBeenCalled();
    expect(result).toBeInstanceOf(User);
    expect(result.email).toBe(userDto.email);
    expect(result.uuid).toHaveLength(14);
    expect(result.createdAt).toBeTruthy();
  });

  it('should call repository save method with correct parameters', async () => {
    const userDto: UserDto = { email: 'test@example.com' };
    const newUser: User = new User('generated-uuid', 'test@example.com', '2023-01-01T00:00:00.000Z');
    userRepository.save.mockResolvedValue(newUser);

    await postUserUseCase.saveUser(userDto);

    expect(userRepository.save).toHaveBeenCalledWith(expect.objectContaining({
      uuid: expect.any(String),
      email: userDto.email,
      createdAt: expect.any(String),
    }));
  });
});