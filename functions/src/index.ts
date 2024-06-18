import { onRequest } from 'firebase-functions/v2/https';
// import * as logger from "firebase-functions/logger";
import * as express from 'express';
import routesUser from './todos/Infraestructure/routes/users';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routesUser);
app.get('/status', (req, res) => res.status(200).send({ message: 'Ok' }));

exports.app = onRequest(app);
