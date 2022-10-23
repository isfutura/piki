import config from './configurator.js';
import database from './database.js';

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

router.post('/engine/get', async (req, res) => {
  const body = req.body;

  const content = await database.getArticle(body.name);

  console.log(content);
  res.json(content);
});

export default router;
