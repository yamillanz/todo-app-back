import { Todo } from '../Domain/Todo';
import { TodoRepository } from '../Domain/TodoRespository';

/* eslint-disable require-jsdoc */
export class TodoUseCase {
  private todoRepository: TodoRepository;
  constructor(todoRepository: TodoRepository) {
    this.todoRepository = todoRepository;
  }
  async getAllTodo(): Promise<Todo[]> {
    console.log('getAllTodo');
    return await this.todoRepository.getAll();
  }

  getOne(id: string): void {
    console.log('getOne', id);
  }

  saveTodo(todo: unknown): void {
    console.log('saveTodo', todo);
  }
}
