import { User } from './User';

export interface UserRepository {
  getOne(idTodo: string): Promise<User>;
  getAll(): Promise<User[]>;
  save(todo: User): Promise<User>;
}
