import { Todo } from './Todo';

export interface TodoRepository {
  getOne(idTodo: string): Promise<Todo>;
  getAll(): Promise<Todo[]>;
  save(todo: Todo): Promise<Todo>;
  delete(idTodo: string): Promise<void>;
  getAllByUser(idUser: string): Promise<Todo[]>;
  getAllByUserHistory(idUser: string): Promise<Todo[]>;
}
