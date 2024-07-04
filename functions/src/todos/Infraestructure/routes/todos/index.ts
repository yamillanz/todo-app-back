import { Router } from 'express';
import { TodoController } from '../../controllers/todo.controller';
import { TodoUseCase } from '../../../Application/TodoUseCase';
// import { TodoMockRepository } from '../../reposities/TodoMockRepository';
import { FireBaseTodoRepository } from '../../FireBaseTodoRepository';

// eslint-disable-next-line new-cap
const routesTodo = Router();
// const respoMock = new TodoMockRepository();
const todoFirebaseRepository = new FireBaseTodoRepository();
const todoUseCase: TodoUseCase = new TodoUseCase(todoFirebaseRepository);
// const todoUseCase: TodoUseCase = new TodoUseCase(respoMock);
const todoCtrl: TodoController = new TodoController(todoUseCase);

routesTodo.get(`/tasks/:taskId`, todoCtrl.getCtrl.bind(todoCtrl));
routesTodo.get(`/tasks`, todoCtrl.getAllCtrl.bind(todoCtrl));
routesTodo.get(`/tasks-user/:email`, todoCtrl.getAllByUserCtrl.bind(todoCtrl));
routesTodo.post(`/tasks`, todoCtrl.saveCtrl.bind(todoCtrl));
routesTodo.put(`/tasks/:taskId`, todoCtrl.updateCtrl.bind(todoCtrl));
routesTodo.delete(`/tasks/:taskId`, todoCtrl.deleteCtrl.bind(todoCtrl));

export default routesTodo;
