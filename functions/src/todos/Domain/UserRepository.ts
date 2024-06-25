import { User } from './User';

export interface UserRepository {
  getOne(idUser: string): Promise<User>;
  save(todo: User): Promise<User>;
}
