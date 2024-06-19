import { Router } from 'express';
import { TodoController } from '../../controllers/todo.controller';
import { TodoUseCase } from '../../../Application/TodoUseCase';
import { TodoMockRepository } from '../../reposities/TodoMockRepository';

// eslint-disable-next-line new-cap
const routesTodo = Router();
const respoMock = new TodoMockRepository();
const todoUseCase: TodoUseCase = new TodoUseCase(respoMock);
const todoCtrl: TodoController = new TodoController(todoUseCase);

routesTodo.get(`/todo/:idTodo`, todoCtrl.getCtrl.bind(todoCtrl));
routesTodo.get(`/todo`, todoCtrl.getAllCtrl.bind(todoCtrl));
routesTodo.post(`/todo`, todoCtrl.insertCtrl);

export default routesTodo;
