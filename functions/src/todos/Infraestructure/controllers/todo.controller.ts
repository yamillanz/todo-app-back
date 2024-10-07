/* eslint-disable require-jsdoc */
import { Request, Response } from 'express';
import { TodoUseCase } from '../../Application/TodoUseCase';

export class TodoController {
  private todoUseCase: TodoUseCase;

  constructor(userUseCase: TodoUseCase) {
    this.todoUseCase = userUseCase;
  }

  public async getCtrl({ params }: Request, res: Response) {
    const { taskId = '' } = params;

    const user = this.todoUseCase.getOne(`${taskId}`);
    res.send({ message: 'Todo getCtrl', user });
  }

  public async getAllCtrl(req: Request, res: Response) {
    const todos = await this.todoUseCase.getAllTodo();
    res.send(todos);
  }

  public async getAllByUserCtrl({ params }: Request, res: Response) {
    const todos = await this.todoUseCase.getAllTodoByUser(params.email);
    res.send(todos);
  }

  public async getAllByUserHistoryCtrl({ params }: Request, res: Response) {
    const todos = await this.todoUseCase.getAllTodoByUserDone(params.email);
    res.send(todos);
  }

  public async saveCtrl({ body }: Request, res: Response) {
    const newTodo = await this.todoUseCase.saveTodo({
      title: body.title,
      description: body.description,
      completed: body.completed,
      userId: body.userId,
    });
    res.send(newTodo);
  }

  public async updateCtrl({ body, params }: Request, res: Response) {
    const updateTodo = await this.todoUseCase.updateTodo(params.taskId, {
      title: body.title,
      description: body.description,
      completed: body.completed,
      createdAt: body.createdAt,
      completedAt: body.completedAt,
      userId: body.userId,
    });
    res.send(updateTodo);
  }

  public async deleteCtrl({ params }: Request, res: Response) {
    this.todoUseCase.deleteTodo(params.taskId);
    res.send({ message: 'DELETED!' });
  }
}
