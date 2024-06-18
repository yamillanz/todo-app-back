/* eslint-disable require-jsdoc */
import { Request, Response } from 'express';

// eslint-disable-next-line require-jsdoc
export class UsersController {
  public async getCtrl({ query }: Request, res: Response) {
    const { uuid = '' } = query;
    // const user = await this.userUseCase.getDetailUSer(`${uuid}`);
    res.send({ message: 'getCtrl', uuid });
  }

  public async insertCtrl({ body }: Request, res: Response) {
    // const user = await this.userUseCase.getDetailUSer(`${uuid}`);
    res.send({ body });
  }
}
