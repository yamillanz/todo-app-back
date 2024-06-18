/* eslint-disable require-jsdoc */
export class TodoUseCase {
  getAllTodo(): void {
    console.log('getAllTodo');
  }

  getOne(id: string): void {
    console.log('getOne', id);
  }

  saveTodo(todo: unknown): void {
    console.log('saveTodo', todo);
  }
}
