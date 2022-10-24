import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginOpenerPolicy: false,
    originAgentCluster: false,
  })
);
app.use(morgan('dev'));

// routes

import client from './client.js';
app.use('/', client);

import api from './api.js';
app.use('/', api);

export default app;
