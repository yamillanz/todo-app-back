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

  public async saveCtrl({ body }: Request, res: Response) {
    res.send({ body });
  }

  public async deleteCtrl({ params }: Request, res: Response) {
    res.send({ params });
  }
}
