import config from './configurator.js';

import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.render('home', {
    title: config.homepage.title,
    description: config.homepage.content,
    links: config.homepage.quicklinks,
  });
});

router.get('/w/:article', (req, res) => {
  res.render('article', { test: req.params.article });
});

export default router;
