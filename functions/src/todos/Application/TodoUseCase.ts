import { Todo } from '../Domain/Todo';
import { TodoRepository } from '../Domain/TodoRespository';
import { TodoDto } from '../Infraestructure/TodoDto';

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

  async getAllTodoByUser(idUser: string): Promise<Todo[]> {
    console.log('getAllTodoByUser', idUser);
    return await this.todoRepository.getAllByUser(idUser);
  }
  async getAllTodoByUserDone(idUser: string): Promise<Todo[]> {
    return await this.todoRepository.getAllByUserHistory(idUser);
  }

  getOne(id: string): void {
    console.log('getOne', id);
  }

  saveTodo(todo: TodoDto): Promise<Todo> {
    todo.uuid = Math.random().toString(36).substring(2, 12);
    const newTodo = new Todo(
      todo.uuid,
      todo.title ?? '',
      todo.description ?? '',
      todo.completed ?? false,
      todo.createdAt ?? '',
      todo.userId ?? ''
    );
    return this.todoRepository.save(newTodo);
  }

  updateTodo(taskId: string, todo: TodoDto): Promise<Todo> {
    console.log('updateTodo', taskId, todo);
    const updateTodo = new Todo(
      taskId,
      todo.title ?? '',
      todo.description ?? '',
      todo.completed ?? false,
      todo.createdAt ?? '',
      todo.userId ?? ''
    );
    return this.todoRepository.save(updateTodo);
  }

  deleteTodo(taskId: string): void {
    console.log('deleteTodo', taskId);
    this.todoRepository.delete(taskId);
  }
}
