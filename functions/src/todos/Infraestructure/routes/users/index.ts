import { Router } from 'express';
import { UsersController } from '../../controllers/users.controller';
import { GetUserUseCase } from '../../../Application/GetUserUseCase';

// eslint-disable-next-line new-cap
const routesUser = Router();

const userUseCase: GetUserUseCase = new GetUserUseCase();
const userCtrl: UsersController = new UsersController(userUseCase);

routesUser.get(`/user`, userCtrl.getCtrl.bind(userCtrl));
routesUser.post(`/user`, userCtrl.insertCtrl.bind(userCtrl));

export default routesUser;
