/* eslint-disable require-jsdoc */
import { User } from '../Domain/User';
import { UserRepository } from '../Domain/UserRepository';
import { UserDto } from '../Infraestructure/UserDto';

export class PostUserUseCase {
  repository: UserRepository;
  constructor(repository: UserRepository) {
    this.repository = repository;
  }
  async saveUser(user: UserDto): Promise<User> {
    user.uuid = Math.random().toString(36).substring(2, 12);
    user.createdAt = new Date().toISOString();
    const newUser = new User(user.uuid, user.email ?? '', user.createdAt);
    return await this.repository.save(newUser);
  }
}
