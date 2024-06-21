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

  saveTodo(todo: Todo): void {
    console.log('saveTodo', todo);
    todo.uuid = Math.random().toString(36).substring(2, 12);
    this.todoRepository.save(todo);
  }

  updateTodo(taskId: string, todo: Todo): void {
    console.log('updateTodo', taskId, todo);
  }

  deleteTodo(): void {
    console.log('deleteTodo');
  }
}
