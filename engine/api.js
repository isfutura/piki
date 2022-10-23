import config from './configurator.js';
import database from './database.js';
import convert from './converter.js';

import { Router } from 'express';

const router = Router();

// sends homepage data

router.get('/engine/homepage', (req, res) => {
  const combined = {
    homepage: config.homepage,
    prefix: config.options.prefix,
  };
  res.json(combined);
});

// sends article entry from database

router.post('/engine/get', async (req, res) => {
  const body = req.body;
  const content = await database.getArticle(body.name);
  console.log(content);
  const converted = convert(content);

  console.log(converted);
  res.json(converted);
});

// sends raw markdown

router.post('/engine/raw', async (req, res) => {
  const body = req.body;
  const content = await database.getArticle(body.name);

  res.json(content);
});

// modifies or creates new article

router.post('/engine/modify', async (req, res) => {
  const body = req.body;

  console.log(body);

  database.updateArticle(body.name, body.content).then(() => {
    res.end();
  });
});

export default router;
