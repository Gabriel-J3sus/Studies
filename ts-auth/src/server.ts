import 'reflect-metadata';
import express from 'express';

import './database/connection'; //connection
import routes from './routes'; //routes file

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333); // http://localhost:3333
