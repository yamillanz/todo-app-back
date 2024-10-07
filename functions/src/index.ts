import { onRequest } from 'firebase-functions/v2/https';
import * as express from 'express';
import * as cors from 'cors';
import routesUser from './todos/Infraestructure/routes/users';
import routesTodo from './todos/Infraestructure/routes/todos';

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routesUser);
app.use(routesTodo);
app.get('/status', (req, res) => res.status(200).send({ message: 'Ok' }));

exports.app = onRequest(app);
