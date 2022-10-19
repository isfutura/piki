import config from './configurator.js';

import { Router } from 'express';

const router = Router();

router.get('/engine/homepage', (req, res) => {
  res.json(config.homepage);
});

router.get('/w/:article', (req, res) => {
  res.render('article', { test: req.params.article });
});

export default router;
