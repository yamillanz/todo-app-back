/* eslint-disable require-jsdoc */
import { Request, Response } from 'express';
import { GetUserUseCase } from '../../../todos/Application/GetUserUseCase';

export class UsersController {
  private userUseCase: GetUserUseCase;

  constructor(userUseCase: GetUserUseCase) {
    this.userUseCase = userUseCase;
  }

  public async getCtrl({ query }: Request, res: Response) {
    const { uuid = '' } = query;
    // const user = await this.userUseCase.getDetailUSer(`${uuid}`);
    const user = this.userUseCase.getUserById(`${uuid}`);
    res.send({ message: 'getCtrl', user });
  }

  public async insertCtrl({ body }: Request, res: Response) {
    // const user = await this.userUseCase.getDetailUSer(`${uuid}`);
    res.send({ body });
  }
}
