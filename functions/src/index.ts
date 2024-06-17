

import { onRequest } from 'firebase-functions/v2/https';
// import * as logger from "firebase-functions/logger";
import * as express from 'express';

const app = express();
app.get('/', (req, res) => res.status(200).send('Hey there!'));
exports.app = onRequest(app);

