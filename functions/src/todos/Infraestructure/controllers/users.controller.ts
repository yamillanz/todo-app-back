/* eslint-disable require-jsdoc */
import { Request, Response } from 'express';
import { GetUserUseCase } from '../../../todos/Application/GetUserUseCase';
import { PostUserUseCase } from '../../Application/PostUserUseCase';

export class UsersController {
  private userUseCase: GetUserUseCase;
  private saveUserUseCase: PostUserUseCase;

  constructor(userUseCase: GetUserUseCase, saveUserUseCase: PostUserUseCase) {
    this.userUseCase = userUseCase;
    this.saveUserUseCase = saveUserUseCase;
  }

  public async getCtrl({ params }: Request, res: Response) {
    const { email = '' } = params;
    // const user = await this.userUseCase.getDetailUSer(`${email}`);
    const user = await this.userUseCase.getUserById(`${email}`);
    res.send(user ?? {});
  }

  public async insertCtrl({ body }: Request, res: Response) {
    // const user = await this.userUseCase.getDetailUSer(`${email}`);
    const user = await this.saveUserUseCase.saveUser({
      email: body.email,
    });
    res.send(user);
  }
}
