import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));

app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  next();
});

// routes

import client from './client.js';
app.use('/', client);

import api from './api.js';
app.use('/', api);

export default app;
