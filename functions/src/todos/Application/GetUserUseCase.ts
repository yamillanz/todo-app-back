import { UserRepository } from '../Domain/UserRepository';

/* eslint-disable require-jsdoc */
export class GetUserUseCase {
  repository: UserRepository;
  constructor(repository: UserRepository) {
    this.repository = repository;
  }
  async getUserById(idUser: string) {
    return await this.repository.getOne(idUser);
  }
}
