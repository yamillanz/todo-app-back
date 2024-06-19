/* eslint-disable require-jsdoc */
import { Todo } from '../../Domain/Todo';
import { TodoRepository } from '../../Domain/TodoRespository';

const dataTodos: Todo[] = [
  {
    uuid: '1',
    title: 'Todo 1',
    description: 'Description 1',
    completed: false,
  },
  {
    uuid: '2',
    title: 'Todo 2',
    description: 'Description 2',
    completed: true,
  },
  {
    uuid: '3',
    title: 'Todo 3',
    description: 'Description 3',
    completed: false,
  },
  {
    uuid: '4',
    title: 'Todo 4',
    description: 'Description 4',
    completed: true,
  },
  {
    uuid: '5',
    title: 'Todo 5',
    description: 'Description 5',
    completed: false,
  },
  {
    uuid: '6',
    title: 'Todo 6',
    description: 'Description 6',
    completed: true,
  },
  {
    uuid: '7',
    title: 'Todo 7',
    description: 'Description 7',
    completed: false,
  },
];

export class TodoMockRepository implements TodoRepository {
  getOne(idTodo: string): Promise<Todo> {
    console.log(idTodo);
    throw new Error('Method not implemented.');
  }

  getAll(): Promise<Todo[]> {
    // console.log(dataTodos);
    return Promise.resolve(dataTodos);
  }

  save(todo: Todo): Promise<Todo> {
    // TODO: Implement logic to save the todo to the mock repository
    // For now, return the same todo object
    return Promise.resolve(todo);
  }
}
