import { Router } from 'express';
import { UsersController } from '../../controllers/users.controller';
import { GetUserUseCase } from '../../../Application/GetUserUseCase';
import { FireBaseUserRepository } from '../../FireBaseUserRepository';
import { PostUserUseCase } from '../../../Application/PostUserUseCase';

// eslint-disable-next-line new-cap
const routesUser = Router();

const userGetUseCase: GetUserUseCase = new GetUserUseCase(new FireBaseUserRepository());
const userPostUseCase: PostUserUseCase = new PostUserUseCase(new FireBaseUserRepository());
const userCtrl: UsersController = new UsersController(userGetUseCase, userPostUseCase);

routesUser.get(`/users/:email`, userCtrl.getCtrl.bind(userCtrl));
routesUser.post(`/users`, userCtrl.insertCtrl.bind(userCtrl));

export default routesUser;
