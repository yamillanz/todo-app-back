import { Router } from 'express';
import { TodoController } from '../../controllers/todo.controller';
import { TodoUseCase } from '../../../Application/TodoUseCase';

// eslint-disable-next-line new-cap
const routesTodo = Router();

const todoUseCase: TodoUseCase = new TodoUseCase();
const todoCtrl: TodoController = new TodoController(todoUseCase);

routesTodo.get(`/todo/:idTodo`, todoCtrl.getCtrl.bind(todoCtrl));
routesTodo.post(`/todo`, todoCtrl.insertCtrl);
