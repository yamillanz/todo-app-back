/* eslint-disable require-jsdoc */
import { Request, Response } from 'express';
import { GetUserUseCase } from '../../../todos/Application/GetUserUseCase';

export class UsersController {
  private userUseCase: GetUserUseCase;

  constructor(userUseCase: GetUserUseCase) {
    this.userUseCase = userUseCase;
  }

  public async getCtrl({ params }: Request, res: Response) {
    const { email = '' } = params;
    // const user = await this.userUseCase.getDetailUSer(`${email}`);
    const user = await this.userUseCase.getUserById(`${email}`);
    res.send(user ?? {});
  }

  public async insertCtrl({ body }: Request, res: Response) {
    // const user = await this.userUseCase.getDetailUSer(`${email}`);
    res.send({ body });
  }
}
