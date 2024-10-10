// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { TodoUseCase } from '../../../src/todos/Application/TodoUseCase';
import { TodoRepository } from '../../../src/todos/Domain/TodoRespository';
import { Todo } from '../../../src/todos/Domain/Todo';
import { TodoDto } from '../../../src/todos/Infraestructure/TodoDto';
import { NotFoundError } from '../../../src/shared/NotFoundError';

describe('TodoUseCase', () => {
  let todoRepository: jest.Mocked<TodoRepository>;
  let todoUseCase: TodoUseCase;

  beforeEach(() => {
    todoRepository = {
      getOne: jest.fn(),
      getAll: jest.fn(),
      getAllByUser: jest.fn(),
      getAllByUserHistory: jest.fn(),
      save: jest.fn(),
      delete: jest.fn(),
    } as jest.Mocked<TodoRepository>;

    todoUseCase = new TodoUseCase(todoRepository);
  });

  it('should initialize with a TodoRepository', () => {
    expect(todoUseCase).toBeTruthy();
    expect(todoUseCase['todoRepository']).toBe(todoRepository);
  });

  it('should get all todos', async () => {
    const todos: Todo[] = [];
    todoRepository.getAll.mockResolvedValue(todos);

    const result = await todoUseCase.getAllTodo();

    expect(todoRepository.getAll).toHaveBeenCalled();
    expect(result).toBe(todos);
  });

  it('should get all todos by user', async () => {
    const todos: Todo[] = [];
    const userId = 'user1';
    todoRepository.getAllByUser.mockResolvedValue(todos);

    const result = await todoUseCase.getAllTodoByUser(userId);

    expect(todoRepository.getAllByUser).toHaveBeenCalledWith(userId);
    expect(result).toBe(todos);
  });

  it('should get all todos by user done', async () => {
    const todos: Todo[] = [];
    const userId = 'user1';
    todoRepository.getAllByUserHistory.mockResolvedValue(todos);

    const result = await todoUseCase.getAllTodoByUserDone(userId);

    expect(todoRepository.getAllByUserHistory).toHaveBeenCalledWith(userId);
    expect(result).toBe(todos);
  });

  it('should log getOne', () => {
    console.log = jest.fn();
    const id = 'todo1';

    todoUseCase.getOne(id);

    expect(console.log).toHaveBeenCalledWith('getOne', id);
  });

  it('should save a new todo', async () => {
    const todoDto: TodoDto = { title: 'Test', description: 'Test description' };
    const savedTodo: Todo = new Todo('uuid', 'Test', 'Test description', false, '', '');
    todoRepository.save.mockResolvedValue(savedTodo);

    const result = await todoUseCase.saveTodo(todoDto);

    expect(todoRepository.save).toHaveBeenCalled();
    expect(result).toBe(savedTodo);
  });

  it('should update a todo', async () => {
    const taskId = 'task1';
    const existingTodo: Todo = new Todo(taskId, 'Test', 'Test description', false, '', '');
    const todoDto: TodoDto = { title: 'Updated', description: 'Updated description' };

    todoRepository.getOne.mockResolvedValue(existingTodo);
    todoRepository.save.mockResolvedValue(existingTodo);

    const result = await todoUseCase.updateTodo(taskId, todoDto);

    expect(todoRepository.getOne).toHaveBeenCalledWith(taskId);
    expect(todoRepository.save).toHaveBeenCalledWith(expect.objectContaining({
      uuid: taskId,
      title: todoDto.title,
      description: todoDto.description,
    }));
    expect(result).toBe(existingTodo);
  });

  it('should delete a todo', async () => {
    const taskId = 'task1';
    todoRepository.getOne.mockResolvedValue(new Todo(taskId, 'Test', 'Test description', false, '', ''));

    await todoUseCase.deleteTodo(taskId);

    expect(todoRepository.delete).toHaveBeenCalledWith(taskId);
  });

  it('should throw NotFoundError when deleting a non-existing todo', async () => {
    const taskId = 'non-existing-task';
    todoRepository.getOne.mockResolvedValue(null);

    await expect(todoUseCase.deleteTodo(taskId)).rejects.toThrow(NotFoundError);
  });

  it('should throw NotFoundError when updating a non-existing todo', async () => {
    const taskId = 'non-existing-task';
    const todoDto: TodoDto = { title: 'Updated', description: 'Updated description' };
    todoRepository.getOne.mockResolvedValue(null);

    await expect(todoUseCase.updateTodo(taskId, todoDto)).rejects.toThrow(NotFoundError);
  });

  it('should get a task by id', async () => {
    const taskId = 'task1';
    const todo: Todo = new Todo(taskId, 'Test', 'Test description', false, '', '');
    todoRepository.getOne.mockResolvedValue(todo);

    const result = await todoUseCase.getTaskById(taskId);

    expect(todoRepository.getOne).toHaveBeenCalledWith(taskId);
    expect(result).toBe(todo);
  });

  it('should throw NotFoundError when getting a non-existing task by id', async () => {
    const taskId = 'non-existing-task';
    todoRepository.getOne.mockResolvedValue(null);

    await expect(todoUseCase.getTaskById(taskId)).rejects.toThrow(NotFoundError);
  });
});
