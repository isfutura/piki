import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

app.set('view engine', 'ejs');
app.set('views', 'engine/www');

app.use('/engine/theme', express.static('theme'));

// routes

import client from './client.js';
app.use('/', client);

export default app;
