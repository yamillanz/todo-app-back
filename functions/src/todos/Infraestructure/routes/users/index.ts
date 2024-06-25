import { Router } from 'express';
import { UsersController } from '../../controllers/users.controller';
import { GetUserUseCase } from '../../../Application/GetUserUseCase';
import { FireBaseUserRepository } from '../../FireBaseUserRepository';

// eslint-disable-next-line new-cap
const routesUser = Router();

const userUseCase: GetUserUseCase = new GetUserUseCase(new FireBaseUserRepository());
const userCtrl: UsersController = new UsersController(userUseCase);

routesUser.get(`/user/:email`, userCtrl.getCtrl.bind(userCtrl));
routesUser.post(`/user`, userCtrl.insertCtrl.bind(userCtrl));

export default routesUser;
