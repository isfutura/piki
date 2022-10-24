// usage: api endpoints for retrieving and modifying wiki articles
// not meant to be edited by the wiki admin, see README.md

import database from './database.js';
import convert from './converter.js';

import { Router } from 'express';

const router = Router();

// sends article entry from database

router.post('/engine/get', async (req, res) => {
  const body = req.body;
  const content = await database.getArticle(body.name);
  const converted = convert(content);

  res.json(converted);
});

// sends raw markdown

router.post('/engine/raw', async (req, res) => {
  const body = req.body;
  const content = await database.getArticle(body.name);

  res.json(content);
});

router.get('/engine/raw/:name', async (req, res) => {
  const name = req.params.name;
  const content = await database.getArticle(name);

  res.send(content);
});

// modifies or creates new article

router.post('/engine/modify', async (req, res) => {
  const body = req.body;

  database.updateArticle(body.name, body.content).then(() => {
    res.end();
  });
});

export default router;
