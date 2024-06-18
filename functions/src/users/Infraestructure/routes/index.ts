import { Router } from 'express';
import { UsersController } from '../controllers/users.controller';

// eslint-disable-next-line new-cap
const routesUser = Router();

const userCtrl: UsersController = new UsersController();

routesUser.get(`/user`, userCtrl.getCtrl);
routesUser.post(`/user`, userCtrl.insertCtrl);

export default routesUser;
